import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NavbarTogglerProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const NavbarToggler = forwardRef<HTMLButtonElement, NavbarTogglerProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('navbar-toggler','n-custom-navbar-toggler-class', className)

    return (
      <button type="button" className={_className} {...rest} ref={ref}>
        {children ? children : <span className="navbar-toggler-icon"></span>}
      </button>
    )
  },
)

NavbarToggler.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

NavbarToggler.displayName = 'NavbarToggler'
