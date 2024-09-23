'use client'
import React from 'react';
import {cn} from "@/shared/helpers/lib/utils";
import {useCategoryStore} from "@/shared/store/category";
import {Category} from '@prisma/client'


interface Props {
    className?: string;
    items: Category[]
}


export const Categories: React.FC<Props> = ({className, items}) => {
    const {activeId} = useCategoryStore()
    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {
                items.map(cat => (
                    <a key={cat.id} href={`/#${cat.name}`}
                       className={cn('flex items-center font-bold h-11 rounded-2xl px-5', activeId === cat.id && 'bg-white shadow-md shadow-gray-200 text-primary')}>
                        <button>{cat.name}</button>
                    </a>
                ))
            }
        </div>
    );
};
