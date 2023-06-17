import React, { InputHTMLAttributes, forwardRef } from 'react'

import { FormLabel } from '@nanobits/react-ui'
import classNames from 'classnames'

export interface LabelPros extends InputHTMLAttributes<HTMLLabelElement>{
    label: string
    labelfor: string
    required?: boolean
}

export const Label = forwardRef<HTMLLabelElement, LabelPros>((
    {
        label,
        labelfor,
        required
    },
    ref
) => {
    const _classname = classNames(
        'font-weight-bolder',
        required  ? 'label-required' : '',
        'n-custom-text-input-label-class'
    )
    
    return (
        <FormLabel ref={ref} htmlFor={`for-${labelfor}`} className={_classname}>{label}</FormLabel>
    )
})