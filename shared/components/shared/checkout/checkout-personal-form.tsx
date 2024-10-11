import React from 'react';
import {Input, Textarea} from "@/shared/components/ui";
import {FormInput, WhiteBlock} from "@/shared/components/shared";

interface Props {
    className?: string;
}

export const CheckoutPersonalForm: React.FC<Props> = ({className}) => {
    return (
        <>
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

                    <FormInput name='phone' placeholder='Телефон' className='text-base'/>
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
        </>
    );
};


