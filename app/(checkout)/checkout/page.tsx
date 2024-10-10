'use client'
import {CheckoutItemDetails, Container, Title, WhiteBlock} from "@/shared/components/shared";
import React from "react";
import {Button, Input, Textarea} from "@/shared/components/ui";
import {
    ArrowRight,
    Package,
    Truck
} from "@/node_modules/.pnpm/lucide-react@0.427.0_react@18.3.1/node_modules/lucide-react";
import {CheckoutItem} from "@/shared/components/shared";
import {getCartItemDetails} from "@/shared/helpers/lib";
import {PizzaSize, PizzaType} from "@/shared/helpers/constants/pizza";
import {useCart} from "@/shared/helpers/hooks";


export default function CheckoutPage() {
    const {
        items,
        removeCartItem,
        totalAmount,
        handleCountQuantity,
        loading
    } = useCart()

    return (
        <Container className='mt-10'>
            <Title text='Оформление заказа' size='lg' className='font-extrabold mb-8'/>
            <div className='flex gap-10'>
                {/*Left side*/}
                <div className='flex flex-col gap-10 flex-1 mb-20'>
                    <WhiteBlock title='1. Корзина'>
                        <div className='flex flex-col gap-5'>
                            {
                                items.map(item => (
                                    <React.Fragment key={item.id}>
                                        <CheckoutItem
                                            onClickRemove={() => removeCartItem(item.id)}
                                            onClickCountButton={(type) => handleCountQuantity(item.id, item.quantity, type)}
                                            id={item.id}
                                            imageUrl={item.imageUrl}
                                            details={
                                                getCartItemDetails(
                                                    item.ingredients,
                                                    item.pizzaType as PizzaType,
                                                    item.pizzaSize as PizzaSize
                                                )
                                            }
                                            name={item.name}
                                            price={item.price}
                                            quantity={item.quantity}
                                            disabled={item.disabled}
                                        />
                                        <div
                                            className='flex-1 border-b border-dotted border-b-neutral-200 relative -top-1 mx-2'/>
                                    </React.Fragment>
                                ))
                            }

                        </div>
                    </WhiteBlock>
                    <WhiteBlock title='2. Персональная информация'>
                        <div className='grid grid-cols-2 gap-5'>
                            <Input
                                name='FirstName'
                                className='text-base'
                                placeholder='Имя'/>
                            <Input
                                name='LastName'
                                className='text-base'
                                placeholder='Фамилия'/>
                            <Input
                                name='Email'
                                className='text-base'
                                placeholder='E-mail'/>
                            <Input
                                name='Phone'
                                className='text-base'
                                placeholder='Телефон'
                            />
                        </div>
                    </WhiteBlock>
                    <WhiteBlock title='3. Адрес доставки'>
                        <div className='flex flex-col gap-5'>
                            <Input
                                name='Address'
                                className='text-base'
                                placeholder='Введите адрес...'
                            />
                            <Textarea
                                placeholder='Комментарий к заказу'
                                rows={5}
                                className='text-base'
                            />
                        </div>
                    </WhiteBlock>
                </div>
                {/*Right side*/}
                <div className='w-[450px]'>
                    <WhiteBlock className='p-6 sticky top-4'>
                        <div className="flex flex-col gap-1">
                            <span className="text-xl">Итого:</span>
                            <span className="text-[34px] font-extrabold">35 BYN</span>
                        </div>
                        <CheckoutItemDetails
                            title={
                                <div className='flex items-center'>
                                    <Package size={18} className='mr-2 text-gray-300'/>
                                    Стоимость товаров:
                                </div>
                            }
                            value={totalAmount}
                        />
                        <CheckoutItemDetails
                            title={
                                <div className='flex items-center'>
                                    <Truck size={18} className='mr-2 text-gray-300'/>
                                    Доставка:
                                </div>
                            }
                            value={totalAmount}
                        />
                        <Button
                            type='submit'
                            className='w-full h-14 rounded-2xl mt-6 text-base font-bold'>
                            Перейти к оплате
                            <ArrowRight className='w-5 ml-2'/>
                        </Button>
                    </WhiteBlock>
                </div>
            </div>

        </Container>
    )
}