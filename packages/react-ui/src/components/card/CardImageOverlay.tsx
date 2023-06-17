import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CardImageOverlayProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const CardImageOverlay = forwardRef<HTMLDivElement, CardImageOverlayProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('card-img-overlay','n-custom-card-image-overlay-class', className)

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

CardImageOverlay.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CardImageOverlay.displayName = 'CardImageOverlay'
