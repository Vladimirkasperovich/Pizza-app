import React from 'react';
import {cn} from "@/shared/helpers/lib/utils";
import * as CartItem from './cart-item-details'
import {CartItemProps} from "@/shared/components/shared/cart-item-details/cart-item-details.types";
import {CountButton} from "@/shared/components/shared/count-button";
import {Trash2Icon} from "@/node_modules/.pnpm/lucide-react@0.427.0_react@18.3.1/node_modules/lucide-react";

interface Props extends CartItemProps {
    className?: string;
}

export const CartDrawerItem: React.FC<Props> = ({
                                                    className,
                                                    name,
                                                    imageUrl,
                                                    id,
                                                    details,
                                                    quantity,
                                                    price,
                                                }) => {
    return (
        <div className={cn('flex bg-white p-5 gap-6', className)}>
            <CartItem.Image src={imageUrl}/>

            <div className='flex-1'>
                <CartItem.Info name={name} details={details}/>
                <hr className='my-3'/>
                <div className='flex items-center justify-between'>
                    <CountButton onClick={type => console.log(type)} value={quantity}/>
                    <div className='flex items-center gap-3'>
                        <CartItem.Price value={price}/>
                        <Trash2Icon className='text-gray-400 cursor-pointer hover:text-gray-600' size={16}/>
                    </div>
                </div>
            </div>
        </div>
    );
};


