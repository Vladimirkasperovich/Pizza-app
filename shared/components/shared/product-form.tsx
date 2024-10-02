'use client'
import React from 'react';
import {useCartStore} from "@/shared/store";
import {ChoosePizzaForm} from "@/shared/components/shared/choose-pizza-form";
import {ChooseProductForm} from "@/shared/components/shared/choose-product-form";
import {ProductWithRelations} from "@/shared/helpers/@types/prisma";
import toast from "react-hot-toast";

interface Props {
    product: ProductWithRelations;
    onSubmit?: VoidFunction;
}

export const ProductForm: React.FC<Props> = ({product, onSubmit: _onSubmit}) => {
    const [addCartItem, loading] = useCartStore(state => [state.addCartItem, state.loading])
    const firstItem = product.items[0]
    const isPizzaForm = Boolean(firstItem.pizzaType)

    const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
        try {
            const itemId = productItemId ?? firstItem.id
            await addCartItem({
                productItemId: itemId,
                ingredients
            })
            toast.success(`${product.name} добавлена в корзину`)
            _onSubmit?.()
        } catch (error) {
            toast.error('Не удалось добавить товар в корзину')
            console.error(error)
        }
    }
    if (isPizzaForm) {
        return (
            <ChoosePizzaForm
                imageUrl={product.imageUrl}
                name={product.name}
                ingredients={product.ingredients}
                onSubmit={onSubmit}
                items={product.items}
                loading={loading}
            />
        )
    }
    return (
        <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            onSubmit={onSubmit}
            price={firstItem.price}
            loading={loading}
        />
    )
};


