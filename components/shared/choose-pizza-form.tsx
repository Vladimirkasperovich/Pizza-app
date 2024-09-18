import React from 'react';
import {cn} from "@/lib/utils";
import {ProductImage} from "@/components/shared/product-image";
import {Title} from "@/components/shared/title";
import {Button} from "@/components/ui";


interface Props {
    imageUrl: string;
    name: string;
    className?: string;
    ingredients: any[];
    items?: any[];
    onClickAdd?: VoidFunction;
}

export const ChoosePizzaForm: React.FC<Props> = ({
                                                     className,
                                                     ingredients,
                                                     onClickAdd,
                                                     name,
                                                     items,
                                                     imageUrl,
                                                 }) => {
    const textDetails = '30 см, традиционное тесто 30'
    const totalPrice = 'Добавить в корзину за 350 BYN'
    return (
        <div className={cn(className, 'flex flex-1')}>
            <ProductImage src={imageUrl} alt={name} size={30}/>
            <div className='w-[490px] bg-[#f7f6f5] p-7'>
                <Title text={name} className='font-extrabold mb-1' size='md'/>
                <p className='text-gray-400'>{textDetails}</p>
                <Button className='h-[55px] px-10 text-base rounded-[18px] w-full'>{totalPrice}</Button>
            </div>
        </div>
    );
};


