import {useCartStore} from "@/shared/store";
import React from "react";
import {CartStateItem} from "@/shared/helpers/lib/get-cart-details";
import {CreateCartItemValues} from "@/shared/services/dto/cart.dto";

interface ReturnProps {
    totalAmount: number;
    items: CartStateItem[];
    removeCartItem: (id: number) => void;
    addCartItem: (value: CreateCartItemValues) => void;
    loading: boolean;
    handleCountQuantity: (id: number, quantity: number, type: 'plus' | 'minus') => void
}

export const useCart = (): ReturnProps => {
    const [items, totalAmount, fetchCartItems, removeCartItem, updateItemQuantity, addCartItem, loading] = useCartStore((state) => [
        state.items,
        state.totalAmount,
        state.fetchCartItems,
        state.removeCartItem,
        state.updateItemQuantity,
        state.addCartItem,
        state.loading,
    ])

    React.useEffect(() => {
        fetchCartItems()
    }, [])

    const handleCountQuantity = (id: number, quantity: number, type: 'plus' | 'minus') => {
        const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
        updateItemQuantity(id, newQuantity);
    }
    return {
        items,
        totalAmount,
        addCartItem,
        removeCartItem,
        loading,
        handleCountQuantity
    }
}