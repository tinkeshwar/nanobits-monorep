import { FormTextarea, InputGroup } from '@nanobits/react-ui';
import { Label, Prefix, Suffix } from '../label';
import React, { InputHTMLAttributes, forwardRef, useEffect, useState } from 'react';

import { FormInputProps } from '@nanobits/react-ui/components/form/FormInput';
import classNames from 'classnames';

export interface DescriptionInputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
    className?: string,
    label?: string
    type?: 'text' | 'email' | 'password' | 'color'
    required?: boolean
    iconLeft?: string
    textLeft?: string
    iconRight?: string
    textRight?: string
    placeholder?: string
    value?: any
    name: string
    error?: string
    requiredText?: string
    rows?: number
    floatingLabel?: string
    onUpdate?: (value: any) => any
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    onValidation?: (value: any) => any
}

export const DescriptionInput = forwardRef<HTMLTextAreaElement, DescriptionInputProps & FormInputProps>((
    {
        className,
        label,
        type = 'text',
        required,
        iconLeft,
        textLeft,
        iconRight,
        textRight,
        placeholder,
        value,
        name,
        error,
        requiredText,
        rows = 3,
        floatingLabel,
        onUpdate,
        onChange,
        onValidation,
        ...rest
    },
    ref
) => {

    const _className = classNames(
        'n-custom-text-input-class',
        className
    )

    const _inputGroup = classNames(
        required ? 'has-validation' : ''
    )


    const [errorMessage, setErrorMessage] = useState<string | undefined>(error)

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (onUpdate) return onUpdate(event.target.value)
        if (onChange) return onChange(event)

        throw new Error('Provide onUpdate or onChange to input component.')
    }

    useEffect(() => {
        error ? setErrorMessage(error) : setErrorMessage(undefined)
    }, [error])

    return (
        <React.Fragment>
            {label && <Label labelfor={name} required={required} label={label} />}
            <InputGroup className={_inputGroup}>
                {(iconLeft || textLeft) && <Prefix icon={iconLeft} text={textLeft} required={required} />}
                <FormTextarea
                    floatingLabel={floatingLabel}
                    className={_className}
                    ref={ref}
                    id={`for-${name}`}
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    aria-describedby={name}
                    invalid={errorMessage ? true : false}
                    onChange={handleChange}
                    required={required}
                    feedbackInvalid={requiredText || errorMessage}
                    {...rest}
                />
                {(iconRight || textRight) && <Suffix icon={iconRight} text={textRight} required={required} />}
            </InputGroup>
        </React.Fragment>
    )
})

