import PropTypes from 'prop-types'
import React, { forwardRef, HTMLAttributes } from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'

export interface IconProps extends HTMLAttributes<SVGSVGElement | FontAwesomeIconProps> {
    className?: string
    type: 'solid' | 'regular' | 'brands'
    size?: string | undefined
    icon: any
}

export const Icon = forwardRef<SVGSVGElement, IconProps & FontAwesomeIconProps>((
    {
        className,
        type,
        size,
        icon
    },
    ref
) => {
    const ic = `fa-${type} ${icon}` as any
    const _classname = classNames(
        'n-custom-icon-class',
        className,
    )
    
    return (
        <FontAwesomeIcon
            className={_classname}
            icon={ic}
            size={size} 
            ref={ref}
        />)
})

Icon.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.any,
    type: PropTypes.any,
    size: PropTypes.any
}

Icon.displayName = 'Icon'