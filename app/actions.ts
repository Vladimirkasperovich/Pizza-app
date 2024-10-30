"use server";
import { CheckoutFormSchema } from "@/shared/helpers/constants";
import { cookies } from "next/headers";
import { prisma } from "@/prisma/prisma-client";
import { OrderStatus } from "@prisma/client";
import { sendEmail } from "@/shared/helpers";
import { PayOrderTemplate } from "@/shared/components";

export async function createOrder(data: CheckoutFormSchema) {
  try {
    const cookieStore = cookies();
    const cartToken = cookieStore.get("cartToken")?.value;
    if (!cartToken) {
      throw new Error("Cart token not found");
    }

    /* Находим корзину по токену*/
    const userCart = await prisma.cart.findFirst({
      include: {
        user: true,
        items: {
          include: {
            ingredients: true,
            productItem: {
              include: {
                product: true,
              },
            },
          },
        },
      },
      where: {
        token: cartToken,
      },
    });

    /*Если корзина не найдена возвращаем ошибку*/
    if (!userCart) {
      throw new Error("Cart not found");
    }

    /*Если корзина пустая возвращаем ошибку*/
    if (userCart?.totalAmount === 0) {
      throw new Error("Cart is empty");
    }

    /*Создаем заказ*/
    const order = await prisma.order.create({
      data: {
        token: cartToken,
        fullName: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: data.phone,
        address: data.address,
        comment: data.comment,
        totalAmount: userCart.totalAmount,
        status: OrderStatus.PENDING,
        items: JSON.stringify(userCart.items),
      },
    });

    /*очищаем корзину*/
    await prisma.cart.update({
      where: {
        id: userCart.id,
      },
      data: {
        totalAmount: 0,
      },
    });
    /**/
    await prisma.cartItem.deleteMany({
      where: {
        id: userCart.id,
      },
    });

    //Сделать создание ссылки оплаты
    sendEmail(
      data.email,
      `Оплатите заказ #${order.id}`,
      PayOrderTemplate({
        orderId: order.id,
        totalAmount: order.totalAmount,
        paymentUrl: order.email,
      }),
    );
  } catch (error) {}
}

//re_96pPJYRS_HPggEjMQLjsPa4utvRDTk3sC
