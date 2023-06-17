import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NavGroupItemsProps extends HTMLAttributes<HTMLUListElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
}

export const NavGroupItems = forwardRef<HTMLUListElement, NavGroupItemsProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('nav-group-items','n-custom-nav-group-item-class', className)
    return (
      <ul className={_className} {...rest} ref={ref}>
        {children}
      </ul>
    )
  },
)

NavGroupItems.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

NavGroupItems.displayName = 'NavGroupItems'
