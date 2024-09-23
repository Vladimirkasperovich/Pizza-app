import React from 'react';
import {cn} from "@/shared/helpers/lib/utils";
import {CircleCheck} from "@/node_modules/.pnpm/lucide-react@0.427.0_react@18.3.1/node_modules/lucide-react";

interface Props {
    className?: string;
    imageUrl: string;
    name: string;
    price: number;
    active?: boolean;
    onClick: () => void
}

export const IngredientItem: React.FC<Props> = ({
                                                    className,
                                                    onClick,
                                                    active,
                                                    name,
                                                    price,
                                                    imageUrl,
                                                }) => {


    return (
        <div className={cn(
                'flex items-center flex-col p-1 rounded-md w-32 text-center relative cursor-pointer shadow-md bg-white',
                {'border border-primary': active}, className)}
             onClick={onClick}
        >
            {active && <CircleCheck className='absolute top-2 right-2 text-primary'/>}
            <img
                src={imageUrl}
                alt={name}
                width={110}
                height={110}
            />
            <span className='text-xs mb-1'>{name}</span>
            <span className='font-bold'>{`${price} BYN`}</span>
        </div>
    );
};


