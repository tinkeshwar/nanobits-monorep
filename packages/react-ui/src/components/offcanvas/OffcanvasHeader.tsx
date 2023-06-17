import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface OffcanvasHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const OffcanvasHeader = forwardRef<HTMLDivElement, OffcanvasHeaderProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('offcanvas-header','n-custom-offcanvas-header-class', className)

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

OffcanvasHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

OffcanvasHeader.displayName = 'OffcanvasHeader'
