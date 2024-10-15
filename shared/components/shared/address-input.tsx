'use client'
import React from 'react';
import {AddressSuggestions} from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import {
    Controller,
    useFormContext
} from "@/node_modules/.pnpm/react-hook-form@7.53.0_react@18.3.1/node_modules/react-hook-form";
import {ErrorText} from "@/shared/components";

interface Props {
    name: string
}

export const AddressInput: React.FC<Props> = ({name}) => {
    const {control} = useFormContext();
    const API_KEY = "ce729ab2c919ffbf2c25f11c2ac636fc6b84af72"
    return (
        <Controller
            name={name}
            control={control}
            render={
                ({field, fieldState}) => (
                    <>
                        <AddressSuggestions
                            token={API_KEY}
                            onChange={(value) => field.onChange(value?.value)}
                            filterLocations={[{"country": "Беларусь"}]}
                        />
                        {fieldState.error?.message && <ErrorText text={fieldState.error.message}/>}
                    </>
                )
            }

        />
    )
};






