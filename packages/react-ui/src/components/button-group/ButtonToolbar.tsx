import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface ButtonToolbarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const ButtonToolbar = forwardRef<HTMLDivElement, ButtonToolbarProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('btn-toolbar', 'n-custom-button-toolbar-class', className)

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

ButtonToolbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

ButtonToolbar.displayName = 'ButtonToolbar'
