import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface HeaderTextProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const HeaderText = forwardRef<HTMLSpanElement, HeaderTextProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('header-text','n-custom-header-text-class', className)

    return (
      <span className={_className} {...rest} ref={ref}>
        {children}
      </span>
    )
  },
)

HeaderText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

HeaderText.displayName = 'HeaderText'
