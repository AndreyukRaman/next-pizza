'use client';

import React from 'react';

import {FilterCheckbox, FilterCheckboxProps} from "@/components/shared/filter-checkbox";
import {Input} from "@/components/ui/input";
import {Filters} from "@/components/shared/filters";
import {log} from "node:util";

type Item =  FilterCheckboxProps;

interface Props {
    title: string;
    items: Item[];
    defaultItems?: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange: (value: string[]) => void;
    defaultValue?: string[];
    className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = (
    {
        title,
        items,
        defaultItems,
limit =5,
searchInputPlaceholder = 'Поиск',
onChange,
defaultValue,
className,
}
) => {
    return <div className={className}>
        <p className="font-bold mb-3">{title}</p>
        <div className="mb-5">
            <Input placeholder={searchInputPlaceholder} className="bg-gray-50 border-none"/>
        </div>
        <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
            {items.map((item, index) => (
                <FilterCheckbox onCheckedChange={(ids)=> console.log(ids)} checked={false} key={index} value={item.value} text={item.text} endAdornment={item.endAdornment} />
            ))}
        </div>
    </div>;
};
