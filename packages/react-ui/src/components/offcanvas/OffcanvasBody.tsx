import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface OffcanvasBodyProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const OffcanvasBody = forwardRef<HTMLDivElement, OffcanvasBodyProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('offcanvas-body','n-custom-offcanvas-body-class', className)

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

OffcanvasBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

OffcanvasBody.displayName = 'OffcanvasBody'
