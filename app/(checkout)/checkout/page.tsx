'use client'
import React from "react";
import {CheckoutCart, CheckoutPersonalForm, Container, Title} from "@/shared/components";
import {useCart} from "@/shared/helpers/hooks";
import {CheckoutSideBar} from "@/shared/components";
import {FormProvider, useForm} from "react-hook-form"
import {zodResolver} from "@/node_modules/@hookform/resolvers/zod";
import {CheckoutFormSchema, checkoutFormSchema} from "@/shared/helpers/constants";


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
                                    loading={loading}
                                />
                                <CheckoutPersonalForm className={loading ? 'opacity-40 pointer-events-none' : ''} />
                            </div>
                            {/*Right side*/}
                            <div className='w-[450px]'>
                                <CheckoutSideBar totalAmount={totalAmount} loading={loading}/>
                            </div>
                        </div>
                    </form>
                </FormProvider>
            </Container>
    )
}