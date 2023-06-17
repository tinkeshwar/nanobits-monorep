import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from '../link/Link'

export interface PaginationItemProps extends HTMLAttributes<HTMLAnchorElement> {
  /**
   * Toggle the active state for the component.
   */
  active?: boolean
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
  /**
   * Toggle the disabled state for the component.
   */
  disabled?: boolean
}

export const PaginationItem = forwardRef<HTMLAnchorElement, PaginationItemProps>(
  ({ children, className, component, ...rest }, ref) => {
    const _className = classNames(
      'page-item',
      'n-custom-pagination-item-class',
      {
        active: rest.active,
        disabled: rest.disabled,
      },
      className,
    )

    const Component = component ? component : rest.active ? 'span' : 'a'

    return (
      <li className={_className} {...(rest.active && { 'aria-current': 'page' })}>
        {Component === 'a' ? (
          <Link className="page-link" component={Component} {...rest} ref={ref}>
            {children}
          </Link>
        ) : (
          <Component className="page-link" ref={ref}>
            {children}
          </Component>
        )}
      </li>
    )
  },
)

PaginationItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
}

PaginationItem.displayName = 'PaginationItem'
