import React from 'react';
import {Title} from "@/components/shared/title";
import {cn} from "@/lib/utils";
import {ProductCard} from "@/components/shared/product-card";

interface Props {
    className?: string;
    title: string;
    items: any[]
    listClassName?: string;
    categoryId: number
}

export const ProductsGroupList: React.FC<Props> = ({
                                                       className,
                                                       categoryId,
                                                       title,
                                                       items
                                                   }) => {
    return (
        <div className={className}>
            <Title text={title} size="lg" className="font-extrabold mb-5"/>
            <div className="grid grid-cols-3 gap-[50px]">
                {items.map((product, i) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        price={product.items[0].price}
                    />
                ))}
            </div>
        </div>
    );
};
