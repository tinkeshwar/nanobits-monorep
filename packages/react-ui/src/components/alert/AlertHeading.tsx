import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface AlertHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}

export const AlertHeading = forwardRef<HTMLHeadingElement, AlertHeadingProps>(
  ({ children, className, component: Component = 'h4', ...rest }, ref) => {
    const _className = classNames('alert-heading', 'n-custom-alert-heading-class', className)

    return (
      <Component className={_className} {...rest} ref={ref}>
        {children}
      </Component>
    )
  },
)

AlertHeading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
}

AlertHeading.displayName = 'AlertHeading'
