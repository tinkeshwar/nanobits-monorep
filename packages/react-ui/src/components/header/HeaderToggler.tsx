import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface HeaderTogglerProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const HeaderToggler = forwardRef<HTMLButtonElement, HeaderTogglerProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('header-toggler','n-custom-header-toggle-class', className)

    return (
      <button type="button" className={_className} {...rest} ref={ref}>
        {children ? children : <span className="header-toggler-icon"></span>}
      </button>
    )
  },
)

HeaderToggler.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

HeaderToggler.displayName = 'HeaderToggler'
