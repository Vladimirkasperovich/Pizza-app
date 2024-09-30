'use client'

import React from 'react';
import {cn} from "@/shared/helpers/lib/utils";
import {PizzaImage} from "@/shared/components/shared/pizza-image";
import {Title} from "@/shared/components/shared/title";
import {Button} from "@/shared/components/ui";
import {GroupVariants} from "@/shared/components/shared/group-variants";
import {PizzaSize, PizzaType, pizzaTypes} from "@/shared/helpers/constants/pizza";
import {IngredientItem} from "@/shared/components/shared";
import {Ingredient, ProductItem} from "@prisma/client";
import {usePizzaOptions} from "@/shared/helpers/hooks";
import {getPizzaDetails} from "@/shared/helpers/lib";


interface Props {
    imageUrl: string;
    name: string;
    className?: string;
    ingredients: Ingredient[];
    items: ProductItem[];
    loading: boolean;
    onSubmit: (itemId: number, ingredients: number[]) => void
}

/**
 * Форма выбора ПИЦЦЫ
 */

export const ChoosePizzaForm: React.FC<Props> = ({
                                                     className,
                                                     ingredients,
                                                     onSubmit,
                                                     name,
                                                     items,
                                                     imageUrl,
                                                     loading,

                                                 }) => {

    const {
        size,
        setSize,
        availablePizzaSizes,
        setType,
        type,
        selectedIngredients,
        addIngredient,
        currentItemId,

    } = usePizzaOptions(items)

    const {totalPrice, textDetails} = getPizzaDetails(
        type,
        size,
        items,
        ingredients,
        selectedIngredients
    )

    const handleClickAdd = () => {
        if (currentItemId) {
            onSubmit(currentItemId, Array.from(selectedIngredients))
        }
    }

    return (
        <div className={cn(className, 'flex flex-1')}>
            <PizzaImage
                src={imageUrl}
                alt={name}
                size={size}
            />
            <div className='w-[490px] bg-[#f7f6f5] p-7'>
                <Title
                    text={name}
                    className='font-extrabold mb-1'
                    size='md'
                />
                <p className='text-gray-400'>{textDetails}</p>
                <div className='flex flex-col gap-4 mt-5'>
                    <GroupVariants
                        items={availablePizzaSizes}
                        selectedValue={String(size)}
                        onClick={value => setSize(Number(value) as PizzaSize)}
                    />
                    <GroupVariants
                        items={pizzaTypes}
                        selectedValue={String(type)}
                        onClick={value => setType(Number(value) as PizzaType)}
                    />
                </div>
                <div className='bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5'>
                    <div className='grid grid-cols-3 gap-3'>
                        {
                            ingredients.map((ingredient) => (
                                <IngredientItem
                                    key={ingredient.id}
                                    name={ingredient.name}
                                    price={ingredient.price}
                                    imageUrl={ingredient.imageUrl}
                                    onClick={() => addIngredient(ingredient.id)}
                                    active={selectedIngredients.has(ingredient.id)}
                                />

                            ))
                        }
                    </div>
                </div>
                <Button loading={loading} className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'
                        onClick={handleClickAdd}>{totalPrice}</Button>
            </div>
        </div>
    );
};


