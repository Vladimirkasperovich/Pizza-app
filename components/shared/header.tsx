import React from 'react';
import {cn} from "@/lib/utils";
import Image from "next/image";
import {Button} from "@/components/ui";
import {Container} from "@/components/shared";


interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({className}) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className='flex items-center justify-between py-8'>
                {/*Левая часть*/}
                <div className='flex items-center gap-4'>
                    <Image alt='logo' src='/logo.png' width={35} height={35}/>
                    <div>
                        <h1 className='text-2xl uppercase font-black'>Kasper Pizza</h1>
                        <p className='text-sm text-gray-400 leading-3'>вкусней уже некуда</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    {/*<AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)}/>*/}

                    {/*<ProfileButton onClickSignIn={() => setOpenAuthModal(true)}/>*/}

                    {/*{hasCart && <CartButton/>}*/}
                    <Button variant='outline'>Войти</Button>
                </div>
            </Container>
        </header>
    );
};
