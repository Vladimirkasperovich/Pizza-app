'use client'
import React from 'react';
import {FilterCheckbox, FilterCheckboxProps} from "@/components/shared/filter-checkbox";
import {Input} from "@/components/ui";

type Item = FilterCheckboxProps

interface Props {
    title: string
    className?: string
    items: Item[]
    defaultItems: Item[]
    limit?: number
    searchInputPlaceholder?: string
    onChange?: (value: string[]) => void
    defaultValue?: string[]
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
                                                          className,
                                                          defaultItems,
                                                          items,
                                                          limit = 5,
                                                          searchInputPlaceholder = 'Поиск...',
                                                          onChange,
                                                          defaultValue,
                                                          title
                                                      }) => {

    const [showAll, setShowAll] = React.useState(false)
    const list = showAll ? items : defaultItems.slice(0, limit)

    return (
        <div className={className}>
            <p className='font-bold mb-3'>{title}</p>
            {
                showAll && (
                    <div className='mb-5'>
                        <Input placeholder={searchInputPlaceholder} className='bg-gray-50 border-none'/>
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
                            onCheckedChange={(value) => console.log(value)}
                            checked={false}
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
