'use client';

import React from 'react';
import {X} from 'lucide-react';
import {CartItemProps} from './cart-item-details/cart-item-details.types';
import * as CartItemDetails from './cart-item-details';
import {CountButtonProps} from './count-button';
import {cn} from "@/shared/helpers/lib/utils";

interface Props extends CartItemProps {
    onClickCountButton?: (type: 'plus' | 'minus') => void
    onClickRemove?: () => void
    className?: string;
}

export const CartItem: React.FC<Props> = ({
                                              name,
                                              price,
                                              imageUrl,
                                              quantity,
                                              className,
                                              onClickCountButton,
                                              onClickRemove,
                                              details,
                                          }) => {
    return (
        <div className={cn('flex items-center justify-between', className)}>
            <div className="flex items-center gap-5 flex-1">
                <CartItemDetails.Image src={imageUrl}/>
                <CartItemDetails.Info name={name} details={details}/>
            </div>

            <CartItemDetails.Price value={price}/>

            <div className="flex items-center gap-5 ml-20">
                <CartItemDetails.CountButton onClick={onClickCountButton} value={quantity}/>
                <button onClick={onClickRemove}>
                    <X className="text-gray-400 cursor-pointer hover:text-gray-600" size={20}/>
                </button>
            </div>
        </div>
    );
};
