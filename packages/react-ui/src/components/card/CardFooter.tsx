import PropTypes from 'prop-types'
import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('card-footer', 'n-custom-card-footer-class', className)

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

CardFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CardFooter.displayName = 'CardFooter'
