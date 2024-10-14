import React from 'react';
import { Textarea} from "@/shared/components/ui";
import {FormInput, WhiteBlock} from "@/shared/components/shared";

interface Props {
    className?: string;
}

export const CheckoutPersonalForm: React.FC<Props> = ({className}) => {
    return (
        <>
            <WhiteBlock title='2. Персональная информация'>
                <div className='grid grid-cols-2 gap-5'>
                    <FormInput name='firstName' placeholder='Имя' className='text-base'/>
                    <FormInput name='lastName' placeholder='Фамилия' className='text-base'/>
                    <FormInput name='email' placeholder='E-mail' className='text-base'/>
                    <FormInput name='phone' placeholder='Телефон' className='text-base'/>
                </div>
            </WhiteBlock>
            <WhiteBlock title='3. Адрес доставки'>
                <div className='flex flex-col gap-5'>
                    <FormInput name='address' placeholder='Введите адрес...' className='text-base'/>
                    <Textarea
                        placeholder='Комментарий к заказу'
                        rows={5}
                        className='text-base'
                        name='comment'
                    />
                </div>
            </WhiteBlock>
        </>
    );
};


