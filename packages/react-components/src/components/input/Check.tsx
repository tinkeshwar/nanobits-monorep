import React, { forwardRef, InputHTMLAttributes, useState } from 'react';
import { FormCheck } from 'nanobits-react-ui';
import classNames from 'classnames';
import { Label } from 'nanobits-react-components';

interface CheckItems {
    value: string 
    label: string 
}

export interface CheckProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
    label?: string
    required?: boolean
    name: string
    error?: string
    items: CheckItems[]
    inline?: boolean
    checkedItems?: string[]
    disabledItems?: string[]
    onUpdate?: (value: string[]) => any
    onBoxClick?: (value: string) => any
}

export const CheckInput = forwardRef<HTMLInputElement, CheckProps>((
    {
        className,
        label,
        required,
        name,
        items,
        inline,
        checkedItems,
        disabledItems,
        onUpdate,
        onBoxClick
    },
    ref
) => {

    const [checkedItem, setCheckedItem] = useState<string[]>(checkedItems || [])

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.checked) {
            const checked = [...checkedItem]
            checked.push(event.currentTarget.value)
            setCheckedItem(checkedItem)
            const newArray = checkedItem
            if (onUpdate) return onUpdate(newArray)
        } else {
            const checked = [...checkedItem]
            const newArray = checked.filter(item => (item !== event.currentTarget.value))
            setCheckedItem(newArray)
            if (onUpdate) return onUpdate(newArray)
        }
    }

    const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
        if (event.currentTarget.value) {
            if (onBoxClick) return onBoxClick(event.currentTarget.value)
        }
    }

    const _className = classNames(
        'n-custom-check-input-class',
        className
    )

    return (
        <React.Fragment>
            {label && <Label labelfor={name} label={label} required={required}/>}
            {items && items.length && items.map((item: CheckItems, index: number) => {
                return (
                    <FormCheck 
                        onChange={disabledItems?.includes(item.value) ? () => {} : handleChange}
                        onClick={handleClick}
                        key={`for-${name}-${index}`}
                        className={_className} ref={ref}
                        inline={inline}
                        name={name}
                        id={`for-${name}-${index}`}
                        value={item.value}
                        label={item.label}
                        checked={checkedItem.includes(item.value)}
                        disabled={disabledItems?.includes(item.value)}
                    />
                )
            })}
        </React.Fragment>
    )
})