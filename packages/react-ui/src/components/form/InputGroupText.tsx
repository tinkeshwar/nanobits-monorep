import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface InputGroupTextProps extends HTMLAttributes<HTMLLabelElement | HTMLSpanElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}

export const InputGroupText = forwardRef<HTMLLabelElement | HTMLSpanElement, InputGroupTextProps>(
  ({ children, className, component: Component = 'span', ...rest }, ref) => {
    const _className = classNames('input-group-text','n-custom-form-input-group-text-class', className)
    return (
      <Component className={_className} {...rest} ref={ref}>
        {children}
      </Component>
    )
  },
)

InputGroupText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
}

InputGroupText.displayName = 'InputGroupText'
