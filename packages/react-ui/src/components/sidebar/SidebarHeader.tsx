import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface SidebarHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
}

export const SidebarHeader = forwardRef<HTMLDivElement, SidebarHeaderProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('sidebar-header','n-custom-sidebar-header-class', className)
    return (
      <div className={_className} ref={ref} {...rest}>
        {children}
      </div>
    )
  },
)

SidebarHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

SidebarHeader.displayName = 'SidebarHeader'
