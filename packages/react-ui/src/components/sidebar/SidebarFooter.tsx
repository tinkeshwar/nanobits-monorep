import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface SidebarFooterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
}

export const SidebarFooter = forwardRef<HTMLDivElement, SidebarFooterProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('sidebar-footer','n-custom-sidebar-footer-class', className)
    return (
      <div className={_className} ref={ref} {...rest}>
        {children}
      </div>
    )
  },
)

SidebarFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

SidebarFooter.displayName = 'SidebarFooter'
