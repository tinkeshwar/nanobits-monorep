import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CardTextProps extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}

export const CardText = forwardRef<HTMLParagraphElement, CardTextProps>(
  ({ children, component: Component = 'p', className, ...rest }, ref) => {
    const _className = classNames('card-text','n-custom-card-text-class', className)

    return (
      <Component className={_className} {...rest} ref={ref}>
        {children}
      </Component>
    )
  },
)

CardText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
}

CardText.displayName = 'CardText'
