import React, { forwardRef, InputHTMLAttributes } from 'react'
import classNames from 'classnames'
import { InputGroupText } from 'nanobits-react-ui'
import Icon from 'nanobits-react-icons'

export interface SuffixPros extends InputHTMLAttributes<HTMLLabelElement>{
    icon?: string
    text?: string
    required?: boolean
}

export const Suffix = forwardRef<HTMLLabelElement, SuffixPros>((
    {
        icon,
        text,
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
        <InputGroupText ref={ref} className={_classname}>
            {icon ? <Icon type={'solid'} icon={icon}/>: (text ? text : '')}
        </InputGroupText>
    )
})