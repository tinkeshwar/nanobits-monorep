import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface HeaderDividerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
}

export const HeaderDivider = forwardRef<HTMLDivElement, HeaderDividerProps>(
  ({ className, ...rest }, ref) => {
    const _className = classNames('header-divider','n-custom-header-divider-class', className)

    return <div className={_className} {...rest} ref={ref} />
  },
)

HeaderDivider.propTypes = {
  className: PropTypes.string,
}

HeaderDivider.displayName = 'HeaderDivider'
