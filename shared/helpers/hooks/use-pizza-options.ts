import React from "react";
import {PizzaSize, PizzaType} from "@/shared/helpers/constants/pizza";
import {
    useSet
} from "@/node_modules/.pnpm/react-use@17.5.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-use";
import {getAvailablePizzaSizes} from "../lib";
import {ProductItem} from "@prisma/client";
import {Variant} from "@/shared/components/shared/group-variants";

interface ReturnProps {
    size:PizzaSize;
    type: PizzaType;
    setSize: (sizes: PizzaSize) => void;
    setType: (type: PizzaType) => void;
    selectedIngredients: Set<number>;
    addIngredient: (id: number) => void;
    availablePizzaSizes: Variant[];
    currentItemId?: number;
}

export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
    const [size, setSize] = React.useState<PizzaSize>(20)
    const [type, setType] = React.useState<PizzaType>(1)
    const [selectedIngredients, {toggle: addIngredient}] = useSet(new Set<number>([]))

    const availablePizzaSizes = getAvailablePizzaSizes(type, items)

    const currentItemId = items.find((item) => item.pizzaType === type && item.size === size)?.id


    React.useEffect(() => {
        const isAvailableSize = availablePizzaSizes.find((item) => Number(item.value) === size && !item.disabled)
        const availableSize = availablePizzaSizes?.find((item) => !item.disabled)

        if (!isAvailableSize && availableSize) {
            setSize(Number(availableSize.value) as PizzaSize)
        }
    }, [type])

    return {
        size,
        type,
        setSize,
        setType,
        selectedIngredients,
        addIngredient,
        availablePizzaSizes,
        currentItemId,
        
    }
}