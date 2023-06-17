import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CardGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const CardGroup = forwardRef<HTMLDivElement, CardGroupProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('card-group','n-custom-card-group-class', className)

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

CardGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CardGroup.displayName = 'CardGroup'
