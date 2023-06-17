import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface FormFloatingProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
}

export const FormFloating = forwardRef<HTMLDivElement, FormFloatingProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('form-floating','n-custom-form-floating-class', className)
    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

FormFloating.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

FormFloating.displayName = 'FormFloating'
