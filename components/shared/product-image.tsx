import React from 'react';
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
    src: string;
    alt: string;
    size: number;
}

export const ProductImage: React.FC<Props> = ({ className, src, alt, size }) => {
    return (
        <div className={cn('flex items-center justify-center flex-1 relative w-full', className)}>
            <img
                src={src}
                alt={alt}
                className={cn('transition-all z-10 duration-300', {
                    'w-[300px] h-[300px]': size === 20,
                    'w-[400px] h-[400px]': size === 30,
                    'w-[500px] h-[500px]': size === 40,
                })}
            />
            {/*<div className='absolute left-1/2 top-1/2 -translate-x-[52%] -translate-y-[48%] border-dashed border-2 rounded-full border-gray-200 w-[450px] h-[450px]'></div>*/}
            {/*<div className='absolute left-1/2 top-1/2 -translate-x-[52%] -translate-y-[48%] border-dotted border-2 rounded-full border-gray-100 w-[370px] h-[370px]'></div>*/}
        </div>
    );
};
