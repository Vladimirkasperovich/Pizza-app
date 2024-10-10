import {useCartStore} from "@/shared/store";
import React from "react";
import {CartStateItem} from "@/shared/helpers/lib/get-cart-details";

interface ReturnProps {
    totalAmount: number;
    items: CartStateItem[];
    onClickCountButton: (id: number, quantity: number, type: 'plus' | 'minus') => void
    removeCartItem: (id: number) => Promise<void>
}
export const useCart = (): ReturnProps => {
    const [totalAmount, items, fetchCartItems, updateItemQuantity, removeCartItem,] = useCartStore(state => [
        state.totalAmount,
        state.items,
        state.fetchCartItems,
        state.updateItemQuantity,
        state.removeCartItem,
    ])

    React.useEffect(() => {
        fetchCartItems()
    }, [])

    const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
        const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
        updateItemQuantity(id, newQuantity);
    }

    return {totalAmount, items, onClickCountButton, removeCartItem}
}