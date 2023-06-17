import React, { forwardRef, HTMLAttributes, useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Collapse } from '../collapse/Collapse'
import { AccordionItemContext } from './AccordionItem'

export interface AccordionBodyProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const AccordionBody = forwardRef<HTMLDivElement, AccordionBodyProps>(
  ({ children, className, ...rest }, ref) => {
    const { visible } = useContext(AccordionItemContext)
    const _className = classNames('accordion-body', 'n-custom-accordion-body-class', className)

    return (
      <Collapse className="accordion-collpase" visible={visible}>
        <div className={_className} {...rest} ref={ref}>
          {children}
        </div>
      </Collapse>
    )
  },
)

AccordionBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

AccordionBody.displayName = 'AccordionBody'
