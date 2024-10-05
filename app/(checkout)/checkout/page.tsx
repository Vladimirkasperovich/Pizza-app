'use client'
import {CheckoutItemDetails, Container, Title, WhiteBlock} from "@/shared/components/shared";
import {useCartStore} from "@/shared/store";
import React from "react";
import {Input, Textarea} from "@/shared/components/ui";
import {Package} from "@/node_modules/.pnpm/lucide-react@0.427.0_react@18.3.1/node_modules/lucide-react";

export default function CheckoutPage() {
    const [totalAmount, items, fetchCartItems, updateItemQuantity, removeCartItem,] = useCartStore(state => [
        state.totalAmount,
        state.items,
        state.fetchCartItems,
        state.updateItemQuantity,
        state.removeCartItem,
    ])

    React.useEffect(() => {
        fetchCartItems()
    }, [])

    return (
        <Container className='mt-10'>
            <Title text='Оформление заказа' size='lg' className='font-extrabold mb-8'/>
            <div className='flex gap-10'>
                {/*Left side*/}
                <div className='flex flex-col gap-10 flex-1 mb-20'>
                    <WhiteBlock title='1. Корзина'>123123</WhiteBlock>
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
                            value={totalAmount}
                            // title={<Package />}
                        />
                    </WhiteBlock>
                </div>
            </div>

        </Container>
    )
}