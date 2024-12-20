'use client'

import React from 'react';
import {Input} from "@/shared/components/ui";
import {ClearButton, ErrorText, RequiredSymbol} from "@/shared/components/shared";
import {useFormContext} from "@/node_modules/.pnpm/react-hook-form@7.53.0_react@18.3.1/node_modules/react-hook-form";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    required?: boolean;
    className?: string;
}

export const FormInput: React.FC<Props> = ({
                                               name,
                                               label,
                                               required,
                                               className,
                                               placeholder,
                                               ...props
                                           }) => {
    const {
        register,
        formState: {errors},
        watch,
        setValue
    } = useFormContext()

    const value = watch(name)
    const errorText = errors[name]?.message as string
    const onClickClear = () => {
        setValue(name, '', {
            shouldValidate: true
        })
    }

    return (
        <div className={className}>
            {
                label && (
                    <p className='font-medium mb-2'>
                        {label}{required && <RequiredSymbol/>}
                    </p>
                )
            }
            <div className='relative'>
                <Input
                    className='h-12 text-md'
                    {...props}
                    placeholder={placeholder}
                    {...register(name)}
                />
                {value && <ClearButton onClick={onClickClear}/>}
            </div>
            {
                errorText && <ErrorText text={errorText} className='mt-2'/>
            }
        </div>
    );
};


