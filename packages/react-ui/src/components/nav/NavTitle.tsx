import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NavTitleProps extends HTMLAttributes<HTMLLIElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
}

export const NavTitle = forwardRef<HTMLLIElement, NavTitleProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('nav-title','n-custom-nav-title-class', className)
    return (
      <li className={_className} {...rest} ref={ref}>
        {children}
      </li>
    )
  },
)

NavTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

NavTitle.displayName = 'NavTitle'
