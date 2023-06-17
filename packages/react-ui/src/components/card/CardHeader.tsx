import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, component: Component = 'div', className, ...rest }, ref) => {
    const _className = classNames('card-header','n-custom-card-group-class', className)

    return (
      <Component className={_className} {...rest} ref={ref}>
        {children}
      </Component>
    )
  },
)

CardHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
}

CardHeader.displayName = 'CardHeader'
