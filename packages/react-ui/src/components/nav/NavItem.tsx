import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { NavLink, NavLinkProps } from './NavLink'

export const NavItem = forwardRef<HTMLLIElement, NavLinkProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('nav-item','n-custom-nav-item-class', className)
    if (rest.href || rest.to) {
      children = (
        <NavLink className={className} {...rest}>
          {children}
        </NavLink>
      )
    }
    return (
      <li className={_className} ref={ref}>
        {children}
      </li>
    )
  },
)

NavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

NavItem.displayName = 'NavItem'
