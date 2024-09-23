import {mapPizzaType, PizzaSize, PizzaType} from "@/shared/helpers/constants/pizza";
import {
    Ingredient,
    ProductItem
} from "@/node_modules/.pnpm/@prisma+client@5.19.0_prisma@5.19.0/node_modules/@prisma/client";
import {calcTotalPizzaPrice} from "@/shared/helpers/lib/calc-total-pizza-price";

export const getPizzaDetails = (
    type: PizzaType,
    size: PizzaSize,
    items: ProductItem[],
    ingredients: Ingredient[],
    selectedIngredients: Set<number>
) => {
    const totalPrice = `Добавить в корзину за ${calcTotalPizzaPrice(type, size, items, ingredients, selectedIngredients)} BYN`
    const textDetails = `${size} см, ${mapPizzaType[type]} пицца`

    return {totalPrice, textDetails}
}