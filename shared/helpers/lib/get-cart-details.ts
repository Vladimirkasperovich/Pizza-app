import {calcCartItemTotalPrice} from "@/shared/helpers/lib/calc-cart-item-total-price";


export type CartStateItem = {
    id: number;
    quantity: number;
    name: string;
    imageUrl: string;
    price: number;
    pizzaSize?: number | null;
    pizzaType?: number | null;
    ingredients: Array<{ name: string; price: number }>;
};

interface ReturnProps {
    items: CartStateItem[];
    totalAmount: number;
}

export const getCartDetails = (data: any): ReturnProps => {
    // console.log('Data passed to getCartDetails:', data);
    debugger; // Точка останова для дебага

    const items = data[0].items.map((item: any) => ({
        id: item.id,
        quantity: item.quantity,
        name: item.productItem.product.name,
        imageUrl: item.productItem.product.imageUrl,
        price: calcCartItemTotalPrice(item),
        pizzaSize: item.productItem.size,
        pizzaType: item.productItem.pizzaType,
        ingredients: item.ingredients.map((ingredient:any) => ({
            name: ingredient.name,
            price: ingredient.price,
        }))
    }));

    return {
        items,
        totalAmount: data.totalAmount,
    }
}