import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { ToastClose } from './ToastClose'

export interface ToastHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Automatically add a close button to the header.
   */
  closeButton?: boolean
}

export const ToastHeader = forwardRef<HTMLDivElement, ToastHeaderProps>(
  ({ children, className, closeButton, ...rest }, ref) => {
    const _className = classNames('toast-header','n-custom-toast-header-class', className)
    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
        {closeButton && <ToastClose />}
      </div>
    )
  },
)

ToastHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  closeButton: PropTypes.bool,
}

ToastHeader.displayName = 'ToastHeader'
