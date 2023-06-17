import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface SidebarBrandProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
}

export const SidebarBrand = forwardRef<HTMLDivElement, SidebarBrandProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('sidebar-brand','n-custom-sidebar-brand-class', className)
    return (
      <div className={_className} ref={ref} {...rest}>
        {children}
      </div>
    )
  },
)

SidebarBrand.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

SidebarBrand.displayName = 'SidebarBrand'
