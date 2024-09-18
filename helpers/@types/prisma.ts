import {Ingredient, Product, ProductItem} from "@prisma/client";

export interface ProductWithRelations extends Product {
    items: ProductItem[];
    ingredient: Ingredient[]
}