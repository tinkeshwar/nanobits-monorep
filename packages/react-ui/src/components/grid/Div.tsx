import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface DivProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const Div = forwardRef<HTMLDivElement, DivProps>(
  ({ children, className, ...rest }, ref) => {

    const _className = classNames(
      'n-custom-div-class',
      className,
    )

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

Div.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

Div.displayName = 'Div'
