import React from "react";
import {Ingredient} from "@prisma/client";
import {Api} from "@/shared/services/api-client";

export const useIngredients = () => {
    const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const items = await Api.ingredients.getAllIngredients()
                setIngredients(items);
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        })()
    }, [setIngredients])
    return {ingredients, loading}
}