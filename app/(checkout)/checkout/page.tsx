'use client'
import {CheckoutCart, CheckoutPersonalForm, Container, Title, WhiteBlock} from "@/shared/components/shared";
import React from "react";
import {Input, Textarea} from "@/shared/components/ui";
import {useCart} from "@/shared/helpers/hooks";
import {CheckoutSideBar} from "@/shared/components/shared";
import {FormInput} from "@/shared/components/shared";
import {useForm, SubmitHandler} from "react-hook-form"
import {zodResolver} from "@/node_modules/@hookform/resolvers/zod";


export default function CheckoutPage() {
    const {items, removeCartItem, totalAmount, handleCountQuantity, loading} = useCart()

    // const {} = useForm({
    //     resolver: zodResolver(),
    //     defaultValues: {
    //         firstName: '',
    //         lastName: '',
    //         email: '',
    //         phone: '',
    //         address: '',
    //         comment: ''
    //     }
    // })

    return (
        <form action="">
            <Container className='mt-10'>
                <Title text='Оформление заказа' size='lg' className='font-extrabold mb-8'/>
                <div className='flex gap-10'>
                    {/*Left side*/}
                    <div className='flex flex-col gap-10 flex-1 mb-20'>
                        <CheckoutCart
                            items={items}
                            removeCartItem={removeCartItem}
                            handleCountQuantity={handleCountQuantity}
                        />
                        <CheckoutPersonalForm/>
                    </div>
                    {/*Right side*/}
                    <div className='w-[450px]'>
                        <CheckoutSideBar totalAmount={totalAmount}/>
                    </div>
                </div>
            </Container>
        </form>
    )
}