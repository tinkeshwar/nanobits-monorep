import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface InputGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Size the component small or large.
   */
  size?: 'sm' | 'lg'
}

export const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
  ({ children, className, size, ...rest }, ref) => {
    const _className = classNames(
      'input-group',
      'n-custom-form-input-group-class',
      {
        [`input-group-${size}`]: size,
      },
      className,
    )
    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

InputGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'lg']),
}

InputGroup.displayName = 'InputGroup'
