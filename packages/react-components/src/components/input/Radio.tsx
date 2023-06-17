import React, { forwardRef, InputHTMLAttributes } from 'react';
import { FormCheck } from 'nanobits-react-ui';
import classNames from 'classnames';
import { Label } from 'nanobits-react-components';

interface RadioItems {
    value: string 
    label: string 
}

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
    label?: string
    required?: boolean
    name: string
    error?: string
    items: RadioItems[]
    inline?: boolean
    checkedItem?: string
    disabledItems?: string[]
    onUpdate?: (value: string) => any
}

export const RadioInput = forwardRef<HTMLInputElement, RadioProps>((
    {
        className,
        label,
        required,
        name,
        items,
        inline,
        checkedItem,
        disabledItems,
        onUpdate
    },
    ref
) => {

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onUpdate) return onUpdate(event.currentTarget.value)
    }

    const _className = classNames(
        'n-custom-radio-input-class',
        className
    )

    return (
        <React.Fragment>
            {label && <Label labelfor={name} label={label} required={required}/>}
            {items && items.length && items.map((item: RadioItems, index: number) => {
                return (
                    <FormCheck 
                        type={'radio'}
                        onChange={disabledItems?.includes(item.value) ? () => {} : handleChange}
                        key={`for-${name}-${index}`}
                        className={_className} ref={ref}
                        inline={inline}
                        id={`for-${name}-${index}`}
                        value={item.value}
                        label={item.label}
                        checked={checkedItem === item.value}
                        disabled={disabledItems?.includes(item.value)}
                    />
                )
            })}
        </React.Fragment>
    )
})