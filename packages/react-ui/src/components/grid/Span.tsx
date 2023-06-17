import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface SpanProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const Span = forwardRef<HTMLSpanElement, SpanProps>(
  ({ children, className, ...rest }, ref) => {

    const _className = classNames(
      'n-custom-span-class',
      className,
    )

    return (
      <span className={_className} {...rest} ref={ref}>
        {children}
      </span>
    )
  },
)

Span.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

Span.displayName = 'Span'
