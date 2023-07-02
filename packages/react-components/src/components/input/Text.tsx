import { FormFeedback, FormInput, InputGroup } from '@nanobits/react-ui';
import { Label, Prefix, Suffix } from '../label';
import React, { InputHTMLAttributes, forwardRef, useEffect, useRef, useState } from 'react';

import { FormInputProps } from '@nanobits/react-ui/components/form/FormInput';
import classNames from 'classnames';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
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
    floatingLabel?: string
    onUpdate?: (value: any) => any
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onBlur?: (value: any) => void
    onValidation?: (value: any) => any
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps & FormInputProps>((
    {
        className,
        label,
        floatingLabel,
        type = 'text',
        required,
        iconLeft,
        textLeft,
        iconRight,
        textRight,
        placeholder = 'Enter value here...',
        value,
        name,
        error,
        requiredText,
        onUpdate,
        onChange,
        onBlur,
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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onUpdate) return onUpdate(event.target.value)
        if (onChange) return onChange(event)

        throw new Error('Provide onUpdate or onChange to input component.')
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        setErrorMessage(undefined)
        if (onValidation) {
            const validatorResponse = onValidation(event.target.value)
            if (validatorResponse && validatorResponse.error) setErrorMessage(validatorResponse.message)
        }
        if (onBlur) return onBlur(event.target.value)
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
            <InputGroup className={_inputGroup}>
                {(iconLeft || textLeft) && <Prefix icon={iconLeft} text={textLeft} />}
                <FormInput
                    floatingLabel={floatingLabel}
                    className={_className}
                    ref={ref}
                    id={`for-${name}`}
                    type={type}
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    aria-describedby={name}
                    invalid={errorMessage ? true : false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required={required}
                    feedbackInvalid={requiredText}
                    {...rest}
                />
                {(iconRight || textRight) && <Suffix icon={iconRight} text={textRight} />}
            </InputGroup>
            {errorMessage && <FormFeedback>{errorMessage}</FormFeedback>}
        </React.Fragment>
    )
})

