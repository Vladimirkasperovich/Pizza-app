'use client'
import React from 'react';
import {Product} from "@prisma/client";
import {cn} from "@/lib/utils";
import {DialogContent, Dialog} from "@/components/ui/dialog";
import {ChoosePizzaForm, Title} from "@/components/shared";
import {useRouter} from "next/navigation";

interface Props {
    product: Product;
    className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({className, product}) => {
    const router = useRouter();
    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent className={cn('p-0 max-w-[1060px] min-h-[500px] bg-white overflow-hidden', className)}>
                <ChoosePizzaForm imageUrl={product.imageUrl} name={product.name} ingredients={[]}/>
            </DialogContent>
        </Dialog>
    );
};


