import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CardSubtitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}
export const CardSubtitle = forwardRef<HTMLHeadingElement, CardSubtitleProps>(
  ({ children, component: Component = 'h6', className, ...rest }, ref) => {
    const _className = classNames('card-subtitle','n-custom-card-subtitle-class', className)

    return (
      <Component className={_className} {...rest} ref={ref}>
        {children}
      </Component>
    )
  },
)

CardSubtitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
}

CardSubtitle.displayName = 'CardSubtitle'
