
import {Ingredient} from "@prisma/client";
import React from 'react'
import {Api} from "@/services/api-client";
import {useSet} from "react-use";

interface ReturnProps {
    ingredients: Ingredient[]
    loading: boolean
    selectedIds: Set<string>
    onAddId: (id:string) => void
}

export const useFilterIngredients = (): ReturnProps => {

    const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [selectedIds, { toggle}] = useSet(new Set<string>([]))

    React.useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const items = await Api.ingredients.getAllIngredients()
                setIngredients(items);
            } catch (error) {
                console.log(error)
            }finally {
                setLoading(false)
            }
        })()
    }, [setIngredients])

    return {ingredients, loading, onAddId: toggle, selectedIds}
}