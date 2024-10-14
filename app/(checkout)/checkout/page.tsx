'use client'
import {CheckoutCart, CheckoutPersonalForm, Container, Title, WhiteBlock} from "@/shared/components/shared";
import React from "react";
import {useCart} from "@/shared/helpers/hooks";
import {CheckoutSideBar} from "@/shared/components/shared";
import {FormProvider, useForm} from "react-hook-form"
import {zodResolver} from "@/node_modules/@hookform/resolvers/zod";
import {CheckoutFormSchema, checkoutFormSchema} from "@/shared/components/shared/checkout/checkout-form-schema";


export default function CheckoutPage() {
    const {items, removeCartItem, totalAmount, handleCountQuantity, loading} = useCart()

    const form = useForm<CheckoutFormSchema>({
        resolver: zodResolver(checkoutFormSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            comment: ''
        }
    })
    const onSubmit = (values: CheckoutFormSchema) => {
        console.log(values)
    }

    return (
            <Container className='mt-10'>
                <Title text='Оформление заказа' size='lg' className='font-extrabold mb-8'/>
                <FormProvider {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
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
                    </form>
                </FormProvider>
            </Container>
    )
}