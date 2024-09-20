'use client'
import React from 'react';
import {cn} from "@/shared/lib/utils";

type Variant = {
    name: string;
    value: string;
    disabled?: boolean
}

interface Props {
    items: readonly Variant[]
    onClick?: (value: Variant['value']) => void
    selectedValue?: Variant['value']
    className?: string;
}

export const GroupVariants: React.FC<Props> = ({
                                                   className,
                                                   onClick,
                                                   selectedValue,
                                                   items,
                                               }) => {


    return (
        <div className={cn('flex justify-between bg-[#F3F3f3] rounded-3xl p-1 select-none ', className)}>
            {
                items.map((variant) => (
                    <button
                        key={variant.name}
                        onClick={() => onClick?.(variant.value)}
                        className={cn(
                            'flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400 text-sm',
                            {
                                'bg-white shadow': variant.value === selectedValue,
                                'text-gray-500 opacity-50 pointer-events-none': variant.disabled,
                            }
                        )}
                    >
                        {variant.name}
                    </button>
                ))
            }
        </div>
    );
};


