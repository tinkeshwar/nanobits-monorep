import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NavbarTextProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const NavbarText = forwardRef<HTMLSpanElement, NavbarTextProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('navbar-text','n-custom-navbar-text-class', className)

    return (
      <span className={_className} {...rest} ref={ref}>
        {children}
      </span>
    )
  },
)

NavbarText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

NavbarText.displayName = 'NavbarText'
