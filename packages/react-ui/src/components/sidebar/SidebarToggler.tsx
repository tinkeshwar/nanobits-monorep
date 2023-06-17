import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface SidebarTogglerProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
}

export const SidebarToggler = forwardRef<HTMLButtonElement, SidebarTogglerProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('sidebar-toggler','n-custom-sidebar-toggler-class', className)
    return (
      <button className={_className} ref={ref} {...rest}>
        {children}
      </button>
    )
  },
)

SidebarToggler.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

SidebarToggler.displayName = 'SidebarToggler'
