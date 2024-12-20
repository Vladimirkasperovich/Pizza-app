'use client'
import React from 'react';
import {
    Sheet, SheetClose,
    SheetContent, SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/shared/components/ui/sheet";
import {Button} from "@/shared/components/ui";
import {ArrowLeft, ArrowRight} from "@/node_modules/.pnpm/lucide-react@0.427.0_react@18.3.1/node_modules/lucide-react";
import Link from 'next/link';
import {CartDrawerItem} from "@/shared/components/shared/cart-drawer-item";
import {getCartItemDetails} from "@/shared/helpers/lib";
import {PizzaSize, PizzaType} from "@/shared/helpers/constants/pizza";
import Image from "next/image";
import {Title} from "@/shared/components/shared/title";
import {cn} from "@/shared/helpers/lib/utils";
import {useCart} from "@/shared/helpers/hooks";


export const CartDrawer: React.FC<React.PropsWithChildren> = ({

                                                                  children
                                                              }) => {

    const {items, removeCartItem, totalAmount, handleCountQuantity} = useCart()
    const [redirecting, setRedirecting] = React.useState(false);


    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>{children}</SheetTrigger>
                <SheetContent className='flex flex-col justify-between pb-0 bg-[#F4F1EE]'>
                    <div className={cn('flex flex-col h-full', !totalAmount && 'justify-center')}>
                        {
                            totalAmount > 0 && (
                                <SheetHeader>
                                    <SheetTitle>
                                        В корзине <span className='font-bold'>{items.length} товара</span>
                                    </SheetTitle>
                                </SheetHeader>
                            )
                        }

                        {
                            !totalAmount && (
                                <div className='flex flex-col items-center justify-center w-72 mx-auto'>
                                    <Image src='/assets/images/empty-box.png' alt='Empty box' width={120} height={120}/>
                                    <Title text='Корзина пустая' size='sm' className='text-center font-bold my-2'/>
                                    <p className='text-center text-neutral-500 mb-5'>
                                        Добавьте хотя бы одну пиццу, чтобы совершить заказ
                                    </p>
                                    <SheetClose>
                                        <Button className='w-56 h-12 text-base' size='lg'>
                                            <ArrowLeft className='w-5 mr-2'/>
                                            Вернуться назад
                                        </Button>
                                    </SheetClose>
                                </div>
                            )
                        }
                        {totalAmount > 0 && (
                            <>
                            <div className='-mx-6 mt-5 overflow-auto flex-1'>

                                {
                                    items.map((item) => (
                                        <div className='mb-2' key={item.id}>
                                            <CartDrawerItem
                                                id={item.id}
                                                imageUrl={item.imageUrl}
                                                details={
                                                    getCartItemDetails(
                                                        item.ingredients,
                                                        item.pizzaType as PizzaType,
                                                        item.pizzaSize as PizzaSize
                                                    )
                                                }
                                                disabled={item.disabled}
                                                name={item.name}
                                                price={item.price}
                                                quantity={item.quantity}
                                                onClickCountButton={(type) => handleCountQuantity(item.id, item.quantity, type)}
                                                onClickRemove={() => removeCartItem(item.id)}

                                            />
                                        </div>
                                    ))

                                }

                            </div>

                            <SheetFooter className='-mx-6 bg-white p-8'>
                                <div className='w-full'>
                                    <div className='flex mb-4'>
                                <span className='flex flex-1 text-lg text-neutral-500'>
                                    Итого
                                    <div
                                        className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2'/>
                                </span>
                                        <span className='font-bold text-lg'>{totalAmount} BYN</span>
                                    </div>
                                    <Link href={`/checkout`}>
                                        <Button type='submit' className='w-full h-12 text-base' loading={redirecting} onClick={() => setRedirecting(true)}>
                                            Оформить заказ
                                            <ArrowRight className='w-5 ml-2'/>
                                        </Button>
                                    </Link>
                                </div>
                            </SheetFooter>
                        </>)
                        }
                    </div>
                </SheetContent>
            </Sheet>

        </div>
    );
};


