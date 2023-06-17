import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface DropdownHeaderProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}

export const DropdownHeader = forwardRef<HTMLHeadingElement, DropdownHeaderProps>(
  ({ children, className, component: Component = 'h6', ...rest }, ref) => {
    const _className = classNames('dropdown-header','n-custom-dropdown-header-class', className)

    return (
      <Component className={_className} {...rest} ref={ref}>
        {children}
      </Component>
    )
  },
)

DropdownHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
}

DropdownHeader.displayName = 'DropdownHeader'
