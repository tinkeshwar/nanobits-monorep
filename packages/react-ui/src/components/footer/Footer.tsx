import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Place footer in non-static positions.
   */
  position?: 'fixed' | 'sticky'
}

export const Footer = forwardRef<HTMLDivElement, FooterProps>(
  ({ children, className, position, ...rest }, ref) => {
    const _className = classNames('footer','n-custom-footer-class', { [`footer-${position}`]: position }, className)

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  position: PropTypes.oneOf(['fixed', 'sticky']),
}

Footer.displayName = 'Footer'
