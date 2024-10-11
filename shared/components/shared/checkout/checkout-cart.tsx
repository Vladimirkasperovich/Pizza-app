import React from 'react';
import {CheckoutItem, WhiteBlock} from "@/shared/components/shared";
import {getCartItemDetails} from "@/shared/helpers/lib";
import {PizzaSize, PizzaType} from "@/shared/helpers/constants/pizza";
import {CartStateItem} from "@/shared/helpers/lib/get-cart-details";

interface Props {
    items: CartStateItem[];
    removeCartItem: (id: number) => void;
    handleCountQuantity: (id: number, quantity: number, type: 'plus' | 'minus') => void;
    className?: string;
}

export const CheckoutCart: React.FC<Props> = ({
                                                  items,
                                                  removeCartItem,
                                                  handleCountQuantity,
                                                  className
                                              }) => {
    return (
        <WhiteBlock title='1. Корзина' className={className}>
            <div className='flex flex-col gap-5'>
                {
                    items.map(item => (
                        <React.Fragment key={item.id}>
                            {
                                <CheckoutItem
                                    onClickRemove={() => removeCartItem(item.id)}
                                    onClickCountButton={(type) => handleCountQuantity(item.id, item.quantity, type)}
                                    id={item.id}
                                    imageUrl={item.imageUrl}
                                    details={
                                        getCartItemDetails(
                                            item.ingredients,
                                            item.pizzaType as PizzaType,
                                            item.pizzaSize as PizzaSize
                                        )
                                    }
                                    name={item.name}
                                    price={item.price}
                                    quantity={item.quantity}
                                    disabled={item.disabled}
                                />
                            }
                            <div
                                className='flex-1 border-b border-dotted border-b-neutral-200 relative -top-1 mx-2'/>
                        </React.Fragment>
                    ))
                }

            </div>
        </WhiteBlock>
    );
};


