'use client'
import React from 'react';
import {Title} from "./title"
import {FilterCheckbox, FilterCheckboxProps} from "./filter-checkbox";
import {RangeSlider} from "./range-slider";
import {Input} from "@/components/ui";
import {CheckboxFiltersGroup} from "@/components/shared/checkbox-filters-group";
import {useFilterIngredients} from "@/helpers/hooks/useFilterIngredients";


interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({className}) => {
    const {ingredients, loading, onAddId, selectedIds} = useFilterIngredients()
    const items = ingredients.map((item => ({value: String(item.id), text: item.name})))

    return (
        <div className={className}>
            <Title text='Фильтрация' size='sm' className='mb-5 font-bold'/>
            {/*Верхние чекбоксы*/}
            <div className='flex flex-col gap-4'>
                <FilterCheckbox text='Можно собирать' value='1'/>
                <FilterCheckbox text='Новинки' value='2'/>
            </div>
            {/*Фильтр цен*/}
            <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
                <p className='font-bold mb-3'>Цена от и до:</p>
                <div className='flex gap-3 mb-5'>
                    <Input type='number' placeholder='0' min={0} max={1000} defaultValue={0}/>
                    <Input type='number' placeholder='1000' min={100} max={1000}/>
                </div>
                <RangeSlider min={0} max={5000} step={10} value={[0, 500]}/>
            </div>
            <CheckboxFiltersGroup
                title='Ингредиенты:'
                items={items}
                defaultItems={items.slice(0, 6)}
                className='mt-5'
                limit={6}
                loading={loading}
                onClickCheckbox={onAddId}
                selectedIds={selectedIds}
            />

        </div>
    );
};
