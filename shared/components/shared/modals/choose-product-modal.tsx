'use client'
import React from 'react';
import {cn} from "@/shared/helpers/lib/utils";
import {DialogContent, Dialog} from "@/shared/components/ui/dialog";
import {ChooseProductForm} from "@/shared/components/shared";
import {useRouter} from "next/navigation";
import {ProductWithRelations} from "@/shared/helpers/@types/prisma";
import {ChoosePizzaForm} from "@/shared/components/shared/choose-pizza-form";
import {useCartStore} from "@/shared/store";
import toast, {Toaster} from 'react-hot-toast'
import {
    on
} from "@/node_modules/.pnpm/react-use@17.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use/lib/misc/util";


interface Props {
    product: ProductWithRelations;
    className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({className, product}) => {
    const router = useRouter()
    const firstItem = product.items[0]
    const isPizzaForm = Boolean(product.items[0].pizzaType)
    const [addCartItem, loading] = useCartStore(state => [state.addCartItem, state.loading])


    const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
        try {
            const itemId = productItemId ?? firstItem.id
            await addCartItem({
                productItemId: itemId,
                ingredients
            })
            toast.success(`${product.name} добавлена в корзину`)
            router.back()
        } catch (error) {
            toast.error('Не удалось добавить товар в корзину')
            console.error(error)
        }
    }

    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent className={cn(
                'p-0  w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden', className
            )}>
                {
                    isPizzaForm ? (
                        <ChoosePizzaForm
                            imageUrl={product.imageUrl}
                            name={product.name}
                            ingredients={product.ingredients}
                            onSubmit={onSubmit}
                            items={product.items}
                            loading={loading}
                        />
                    ) : (
                        <ChooseProductForm
                            imageUrl={product.imageUrl}
                            name={product.name}
                            onSubmit={onSubmit}
                            price={firstItem.price}
                            loading={loading}
                        />
                    )

                }
            </DialogContent>
        </Dialog>
    );
};


