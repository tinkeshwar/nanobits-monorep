import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface FormTextProps extends HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}

export const FormText = forwardRef<HTMLDivElement | HTMLSpanElement, FormTextProps>(
  ({ children, className, component: Component = 'div', ...rest }, ref) => {
    const _className = classNames('form-text','n-custom-form-text-class', className)
    return (
      <Component className={_className} {...rest} ref={ref}>
        {children}
      </Component>
    )
  },
)

FormText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
}

FormText.displayName = 'FormText'
