import { FormFeedback, FormSelect, InputGroup } from "@nanobits/react-ui";
import { Label, Prefix, Suffix } from "../label";
import React, { InputHTMLAttributes, forwardRef, useEffect, useRef, useState } from "react";

import { FormSelectProps } from "@nanobits/react-ui/components/form/FormSelect";
import classNames from "classnames";

export interface SelectOptionProps {
    value: string
    label: string
    disabled?: boolean
}

export interface SearchOptionProps {
    icon?: string,
    text?: string
}

export interface SelectInputProps extends InputHTMLAttributes<HTMLSelectElement> {
    className?: string
    label?: string
    required?: boolean
    iconLeft?: string
    textLeft?: string
    iconRight?: string
    textRight?: string
    placeholder?: string
    value?: string
    name: string
    error?: string
    requiredText?: string
    disabled?: boolean
    onUpdate?: (value: string) => void
    options: SelectOptionProps[]
}

export const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps & FormSelectProps>((
    {
        className,
        label,
        options,
        required,
        iconLeft,
        textLeft,
        iconRight,
        textRight,
        placeholder = 'Select one here...',
        value,
        name,
        error,
        requiredText,
        disabled,
        onUpdate,
        ...rest
    },
    ref
) => {

    const _className = classNames(
        'n-custom-select-input-class',
        className
    )

    const [errorMessage, setErrorMessage] = useState<string | undefined>(error)

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (onUpdate) return onUpdate(event.target.value)
        throw new Error('Provide `onUpdate` to input component')
    }

    const errorExecuted = useRef(true)
    useEffect(() => {
        if (errorExecuted.current) {
            errorExecuted.current = false
            error ? setErrorMessage(error) : setErrorMessage(undefined)
        }
    }, [error])

    return (
        <React.Fragment>
            {label && <Label labelfor={name} required={required} label={label} />}
            <InputGroup>
                {(iconLeft || textLeft) && <Prefix icon={iconLeft} text={textLeft} required={required} />}
                <FormSelect
                    className={_className}
                    ref={ref}
                    id={`for-${name}`}
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    aria-describedby={name}
                    required={required}
                    disabled={disabled}
                    feedbackInvalid={requiredText}
                    invalid={errorMessage ? true : false}
                    onChange={handleChange}
                    options={[{ label: placeholder || 'Select here...', disabled: true }, ...options]}
                    {...rest}
                />
                {errorMessage && <FormFeedback>{errorMessage}</FormFeedback>}
                {(iconRight || textRight) && <Suffix icon={iconRight} text={textRight} required={required} />}
            </InputGroup>
        </React.Fragment>
    )
})