import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface DropdownDividerProps extends HTMLAttributes<HTMLHRElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
}

export const DropdownDivider = forwardRef<HTMLHRElement, DropdownDividerProps>(
  ({ className, ...rest }, ref) => {
    const _className = classNames('dropdown-divider','n-custom-dropdown-divider-class', className)

    return <hr className={_className} {...rest} ref={ref} />
  },
)

DropdownDivider.propTypes = {
  className: PropTypes.string,
}

DropdownDivider.displayName = 'DropdownDivider'
