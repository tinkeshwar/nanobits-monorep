import React, { forwardRef, ReactNode } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Card, CardBody, Div } from 'nanobits-react-ui'
import Icon from 'nanobits-react-icons'

export interface WButtonProps {
    className?: string
    primary?: string|number
    color?: 'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'dark'|'light'|string
    icon?: string
    icontType?: 'solid' | 'regular' | 'brands'
    title?: string | ReactNode
    value?: string | number | ReactNode,
    titleClass?: string,
    valueClass?: string,
    iconClass?: string,
    disabled?: boolean, 
    onClick?: (value: string|number) => void
}

export const WButton = forwardRef<HTMLDivElement, WButtonProps>((
    {
        className,
        primary,
        color,
        icon,
        icontType = 'solid',
        title,
        value,
        titleClass,
        valueClass,
        iconClass,
        disabled,
        onClick,
        ...rest
    },
    ref
)=>{

    const _className = classNames(
        'n-custom-widgit-button-class',
        'cursor-pointer',
        color ? `border-bottom-${color}`:'',
        disabled ? 'disabled':'',
        className
    )

    const _title = classNames(
        'text-uppercase',
        'fw-semibold',
        'fs-6',
        titleClass,
        color ? `text-${color}`:''
    )

    const _value = classNames(
        'fs-5',
        'mt-1',
        valueClass,
        color ? `text-${color}`:''
    )

    const _icon = classNames(
        'fs-3',
        'mt-1',
        iconClass,
        color ? `text-${color}`:''
    )

    const clickHandle = () => {
        if(onClick && primary) return onClick(primary)
        throw new Error('Add `onClick` handle and primary key value.')
    }

    return (
        <Card className={_className} {...rest} ref={ref} onClick={disabled? ()=>{}: clickHandle}>
            <CardBody className={'text-center'}>
            {title && ( <Div className={_title}>{title}</Div> )}
            {value && <Div className={_value}>{value}</Div>}
            {icon && <Icon className={_icon} type={icontType} icon={icon} />}
            </CardBody>
        </Card>
    )
})

WButton.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOfType([ PropTypes.oneOf(['primary','secondary','success','danger','warning','info','dark','light']), PropTypes.string]),
    icon: PropTypes.string,
    icontType: PropTypes.oneOf(['solid', 'regular', 'brands']),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.number]),
  }
  
  WButton.displayName = 'WButton'