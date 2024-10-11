import React from 'react';
import {WhiteBlock} from "@/shared/components/shared/white-block";
import {CheckoutItemDetails} from "@/shared/components/shared/checkout-item-details";
import {
    ArrowRight,
    Package,
    Truck
} from "@/node_modules/.pnpm/lucide-react@0.427.0_react@18.3.1/node_modules/lucide-react";
import {Button} from "@/shared/components/ui";

interface Props {
    className?: string;
    totalAmount: number;
}

export const CheckoutSideBar: React.FC<Props> = ({
                                                     className,
                                                     totalAmount,
                                                 }) => {
    return (
        <WhiteBlock className='p-6 sticky top-4'>
            <div className="flex flex-col gap-1">
                <span className="text-xl">Итого:</span>
                <span className="text-[34px] font-extrabold">{totalAmount} BYN</span>
            </div>
            <CheckoutItemDetails
                title={
                    <div className='flex items-center'>
                        <Package size={18} className='mr-2 text-gray-300'/>
                        Стоимость корзины:
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
                value={0}
            />
            <Button
                type='submit'
                className='w-full h-14 rounded-2xl mt-6 text-base font-bold'>
                Перейти к оплате
                <ArrowRight className='w-5 ml-2'/>
            </Button>
        </WhiteBlock>
    );
};


