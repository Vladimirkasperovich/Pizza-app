import {mapPizzaType, PizzaSize, PizzaType} from "@/shared/helpers/constants/pizza";
import {CartStateItem} from "@/shared/helpers/lib/get-cart-details";

export const getCartItemDetails = (
    ingredients: CartStateItem['ingredients'],
    pizzaType?: PizzaType,
    pizzaSize?: PizzaSize,
): string  => {
    const details = [];

    if (pizzaSize && pizzaType) {
        const typeName = mapPizzaType[pizzaType];
        details.push(`${typeName} ${pizzaSize} см`);
    }

    if (ingredients) {
        details.push(...ingredients.map((ingredient) => ingredient.name));
    }
    return details.join(', ')
}