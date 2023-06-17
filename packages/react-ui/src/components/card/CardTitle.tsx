import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ children, component: Component = 'h5', className, ...rest }, ref) => {
    const _className = classNames('card-title','n-custom-card-title-class', className)

    return (
      <Component className={_className} {...rest} ref={ref}>
        {children}
      </Component>
    )
  },
)

CardTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
}

CardTitle.displayName = 'CardTitle'
