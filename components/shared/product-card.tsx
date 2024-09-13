import React from 'react';
import Link from "next/link";
import {Title} from "@/components/shared/title";
import {Button} from "@/components/ui";
import {Plus} from "lucide-react";

interface Props {
    id: number
    name: string
    price: number
    className?: string;
    imageUrl: string
}

export const ProductCard: React.FC<Props> = ({
                                                 className,
                                                 imageUrl,
                                                 name,
                                                 price,
                                                 id
                                             }) => {
    return (
        <div className={className}>
            <Link href={`/product/${id}`}>
            <div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
                <img className='w-[215px] h-[215px]' src={imageUrl} alt="Logo"/>
            </div>
            <Title text={name} className='mb-1 mt-3 font-bold' size='sm'/>
            <p className='text-sm text-gray-400'>
                Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
            </p>
            <div className='flex justify-between items-center mt-4'>
                    <span className='text-[20px]'>
                        от <b>{price} BYN</b>
                    </span>
                <Button variant='secondary' className='text-base font-bold'>
                    <Plus size={20} className='mr-1'/>
                    Добавить
                </Button>
            </div>
        </Link>
</div>
)
    ;
};

