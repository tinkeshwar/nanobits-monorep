import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ children, className, ...rest }, ref) => {

    const _className = classNames(
      'n-custom-paragraph-class',
      className,
    )

    return (
      <p className={_className} {...rest} ref={ref}>
        {children}
      </p>
    )
  },
)

Paragraph.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

Paragraph.displayName = 'Paragraph'
