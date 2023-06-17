import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { AccordioButton } from './AccordionButton'

export interface AccordionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const AccordionHeader = forwardRef<HTMLDivElement, AccordionHeaderProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('accordion-header', 'n-custom-accordion-header-class', className)

    return (
      <div className={_className} {...rest} ref={ref}>
        <AccordioButton>{children}</AccordioButton>
      </div>
    )
  },
)

AccordionHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

AccordionHeader.displayName = 'AccordionHeader'
