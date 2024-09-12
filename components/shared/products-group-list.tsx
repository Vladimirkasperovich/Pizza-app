'use client'
import React from 'react';
import {Title} from "@/components/shared/title";
import {useIntersection} from 'react-use'
import {ProductCard} from "@/components/shared/product-card";
import {useCategoryStore} from "@/store/category";

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
    const setActiveCategoryId = useCategoryStore(state => state.setActiveId)
    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    })

    React.useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId)
        }
    }, [title, categoryId, intersection?.isIntersecting])

    return (
        <div className={className} id={title} ref={intersectionRef}>
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
