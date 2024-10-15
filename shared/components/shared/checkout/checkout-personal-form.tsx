import React from 'react';
import {AddressInput, FormInput, FormTextarea, WhiteBlock} from "@/shared/components/shared";

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
                    <AddressInput name='address'/>
                    <FormTextarea name='comment' placeholder='Комментарий к заказу' className='text-base' rows={5}/>
                </div>
            </WhiteBlock>
        </>
    );
};


