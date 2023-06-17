import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface DropdownItemPlainProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}

export const DropdownItemPlain = forwardRef<HTMLSpanElement, DropdownItemPlainProps>(
  ({ children, className, component: Component = 'span', ...rest }, ref) => {
    const _className = classNames('dropdown-item-text','n-custom-dropdown-item-plain-class', className)

    return (
      <Component className={_className} {...rest} ref={ref}>
        {children}
      </Component>
    )
  },
)

DropdownItemPlain.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
}

DropdownItemPlain.displayName = 'DropdownItemPlain'
