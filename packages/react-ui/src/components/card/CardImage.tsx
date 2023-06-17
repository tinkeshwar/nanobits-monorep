import React, { ElementType, forwardRef, ImgHTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CardImageProps
  extends ImgHTMLAttributes<HTMLImageElement | HTMLOrSVGElement | HTMLOrSVGImageElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
  /**
   * Optionally orientate the image to the top, bottom, or make it overlaid across the card.
   */
  orientation?: 'top' | 'bottom'
}

export const CardImage = forwardRef<
  HTMLImageElement | HTMLOrSVGElement | HTMLOrSVGImageElement,
  CardImageProps
>(({ children, className, component: Component = 'img', orientation, ...rest }, ref) => {
  const _className = classNames(orientation ? `card-img-${orientation}` : 'card-img', 'n-custom-card-image-class', className)

  return (
    <Component className={_className} {...rest} ref={ref}>
      {children}
    </Component>
  )
})

CardImage.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
  orientation: PropTypes.oneOf(['top', 'bottom']),
}

CardImage.displayName = 'CardImage'
