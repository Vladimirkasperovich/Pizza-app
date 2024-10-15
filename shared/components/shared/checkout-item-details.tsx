import React from 'react';
import {cn} from "@/shared/helpers/lib/utils";
import {Skeleton} from "@/shared/components";

interface Props {
    title?: React.ReactNode;
    value?: number;
    className?: string;
    loading?: boolean;
}

export const CheckoutItemDetails: React.FC<Props> = ({
                                                         value,
                                                         title,
                                                         className,
                                                         loading
                                                     }) => {
    return (
        <div className={cn('flex my-4', className)}>
             <span className='flex-1 text-lg text-neutral-500'>
                          {title}
                 <div
                     className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2'/>
             </span>
            {
                loading ? <Skeleton className='h-6 w-20'/> : <span className='font-bold text-lg'>{value} BYN</span>
            }
        </div>
    );
};


