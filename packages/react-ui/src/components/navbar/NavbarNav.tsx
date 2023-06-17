import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NavbarNavProps extends HTMLAttributes<HTMLDivElement | HTMLUListElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}

export const NavbarNav = forwardRef<HTMLDivElement | HTMLUListElement, NavbarNavProps>(
  ({ children, component: Component = 'ul', className, ...rest }, ref) => {
    const _className = classNames('navbar-nav','n-custom-navbar-nav-class', className)

    return (
      <Component className={_className} role="navigation" {...rest} ref={ref}>
        {children}
      </Component>
    )
  },
)

NavbarNav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
}

NavbarNav.displayName = 'NavbarNav'
