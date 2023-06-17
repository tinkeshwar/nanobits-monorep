import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('card-body', 'n-custom-card-body-class', className)

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

CardBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CardBody.displayName = 'CardBody'
