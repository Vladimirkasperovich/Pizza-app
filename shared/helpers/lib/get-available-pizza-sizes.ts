import {pizzaSizes, PizzaType} from "@/shared/helpers/constants/pizza";
import {ProductItem} from "@prisma/client";
import {Variant} from "@/shared/components/shared/group-variants";

export const getAvailablePizzaSizes = (type: PizzaType, items: ProductItem[]): Variant[] => {
    const filteredPizzasByType = items.filter((item) => item.pizzaType === type)
   return  pizzaSizes.map((item) => ({
        name: item.name,
        value: item.value,
        disabled: !filteredPizzasByType.some((pizza) => Number(pizza.size) === Number(item.value))
    }))


}