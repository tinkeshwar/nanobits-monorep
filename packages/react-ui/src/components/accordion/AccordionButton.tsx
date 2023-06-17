import React, { forwardRef, HTMLAttributes, useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { AccordionItemContext } from './AccordionItem'

export interface AccordioButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const AccordioButton = forwardRef<HTMLButtonElement, AccordioButtonProps>(
  ({ children, className, ...rest }, ref) => {
    const { visible, setVisible } = useContext(AccordionItemContext)

    const _className = classNames('accordion-button', 'n-custom-accordion-button-class', { collapsed: !visible }, className)

    return (
      <button
        type="button"
        className={_className}
        aria-expanded={!visible}
        onClick={() => setVisible(!visible)}
        {...rest}
        ref={ref}
      >
        {children}
      </button>
    )
  },
)

AccordioButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

AccordioButton.displayName = 'AccordioButton'
