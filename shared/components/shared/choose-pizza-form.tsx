import React from 'react';
import {cn} from "@/shared/lib/utils";
import {PizzaImage} from "@/shared/components/shared/pizza-image";
import {Title} from "@/shared/components/shared/title";
import {Button} from "@/shared/components/ui";
import {GroupVariants} from "@/shared/components/shared/group-variants";
import {PizzaSize, pizzaSizes, PizzaType, pizzaTypes} from "@/shared/helpers/constants/pizza";
import {IngredientItem} from "@/shared/components/shared";
import {Ingredient} from "@prisma/client";
import {useSet} from "react-use";


interface Props {
    imageUrl: string;
    name: string;
    className?: string;
    ingredients: Ingredient[];
    items?: any[];
    onClickAdd?: VoidFunction;
}

export const ChoosePizzaForm: React.FC<Props> = ({
                                                     className,
                                                     ingredients,
                                                     onClickAdd,
                                                     name,
                                                     items,
                                                     imageUrl,
                                                 }) => {

    const [size, setSize] = React.useState<PizzaSize>(20)
    const [type, setType] = React.useState<PizzaType>(1)
    const [selectedIngredients, {toggle: addIngredient}] = useSet(new Set<number>([]))

    const textDetails = '30 см, традиционное тесто 30'
    const totalPrice = 'Добавить в корзину за 350 BYN'

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
                        items={pizzaSizes}
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
                <Button className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'>{totalPrice}</Button>
            </div>
        </div>
    );
};


