'use client'
import React from 'react';
import {cn} from "@/shared/helpers/lib/utils";
import {DialogContent, Dialog} from "@/shared/components/ui/dialog";
import {ProductForm} from "@/shared/components/shared";
import {useRouter} from "next/navigation";
import {ProductWithRelations} from "@/shared/helpers/@types/prisma";


interface Props {
    product: ProductWithRelations;
    className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({className, product}) => {
    const router = useRouter()


    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent className={cn(
                'p-0  w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden', className
            )}>
                <ProductForm product={product} onSubmit={() => router.back()}/>
            </DialogContent>
        </Dialog>
    );
};


