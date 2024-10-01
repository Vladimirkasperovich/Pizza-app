import qs from "qs";
import {useRouter} from "next/navigation";
import {Filters} from "@/shared/helpers/hooks/use-filters";
import React from "react";

export const useQueryFilters = (filters: Filters) => {
    const router = useRouter()
    React.useEffect(() => {
        const params = {
            ...filters.prices,
            pizzaTypes: Array.from(filters.pizzaTypes),
            sizes: Array.from(filters.sizes),
            ingredients: Array.from(filters.selectedIngredients),
        }
        const query = qs.stringify(params, {
            arrayFormat: 'comma'
        })
        router.push(`?${query}`, {scroll: false});

    }, [filters])
}