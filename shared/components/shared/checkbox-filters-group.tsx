'use client'
import React from 'react';
import {FilterCheckbox, FilterCheckboxProps} from "@/shared/components/shared/filter-checkbox";
import {Input, Skeleton} from "@/shared/components/ui";

type Item = FilterCheckboxProps

interface Props {
    title: string
    className?: string
    items: Item[]
    defaultItems?: Item[]
    limit?: number
    loading?: boolean
    searchInputPlaceholder?: string
    onClickCheckbox?: (id: string) => void
    selected?: Set<string>
    defaultValue?: string[]
    name?: string
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
                                                          className,
                                                          defaultItems,
                                                          items,
                                                          limit = 5,
                                                          searchInputPlaceholder = 'Поиск...',
                                                          onClickCheckbox,
                                                          selected,
                                                          defaultValue,
                                                          title,
                                                          loading,
                                                          name
                                                      }) => {

    const [showAll, setShowAll] = React.useState(false)
    const [searchValue, setSearchValue] = React.useState('')

    const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }
    if (loading) {
        return (
            <div className={className}>
                <p className='font-bold mb-3'>{title}</p>
                {
                    Array(limit)
                        .fill(0)
                        .map((_, index) => (
                            <Skeleton key={index} className='h-6 mb-4 rounded-[8px]'/>

                        ))

                }
                <Skeleton className='w-28 mb-4 rounded-[8px]'/>
            </div>
        )
    }
    const list = showAll ? items.filter(item => item.text.toLowerCase().includes(searchValue.toLowerCase())) : (defaultItems || items).slice(0, limit)

    return (
        <div className={className}>
            <p className='font-bold mb-3'>{title}</p>
            {
                showAll && (
                    <div className='mb-5'>
                        <Input
                            placeholder={searchInputPlaceholder}
                            value={searchValue}
                            onChange={onChangeSearchInput}
                            className='bg-gray-50 border-none'/>
                    </div>
                )
            }
            <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
                {
                    list.map((item, index) => (
                        <FilterCheckbox
                            key={index}
                            text={item.text}
                            value={item.value}
                            endAdornment={item.endAdornment}
                            onCheckedChange={() => onClickCheckbox?.(item.value)}
                            checked={selected?.has(item.value)}
                            name={name}
                        />
                    ))
                }
            </div>
            {
                items.length > limit && (
                    <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
                        <button onClick={() => setShowAll(!showAll)}
                                className='text-primary mt-3'>{showAll ? 'Скрыть' : '+ Показать все'}
                        </button>
                    </div>
                )
            }
        </div>
    );
};
