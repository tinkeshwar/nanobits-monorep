import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NavProps
  extends HTMLAttributes<HTMLDivElement | HTMLUListElement | HTMLOListElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
  /**
   * Specify a layout type for component.
   */
  layout?: 'fill' | 'justified'
  /**
   * Set the nav variant to tabs or pills.
   */
  variant?: 'tabs' | 'pills'
}

export const Nav = forwardRef<HTMLDivElement | HTMLUListElement | HTMLOListElement, NavProps>(
  ({ children, className, component: Component = 'ul', layout, variant, ...rest }, ref) => {
    const _className = classNames(
      'nav',
      'n-custom-nav-class',
      {
        [`nav-${layout}`]: layout,
        [`nav-${variant}`]: variant,
      },
      className,
    )

    return (
      <Component className={_className} role="navigation" {...rest} ref={ref}>
        {children}
      </Component>
    )
  },
)

Nav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
  layout: PropTypes.oneOf(['fill', 'justified']),
  variant: PropTypes.oneOf(['tabs', 'pills']),
}

Nav.displayName = 'Nav'
