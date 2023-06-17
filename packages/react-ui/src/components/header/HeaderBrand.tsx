import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface HeaderBrandProps extends HTMLAttributes<HTMLAnchorElement | HTMLSpanElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}

export const HeaderBrand = forwardRef<HTMLAnchorElement | HTMLSpanElement, HeaderBrandProps>(
  ({ children, component: Component = 'a', className, ...rest }, ref) => {
    const _className = classNames('header-brand','n-custom-header-brand-class', className)

    return (
      <Component className={_className} {...rest} ref={ref}>
        {children}
      </Component>
    )
  },
)

HeaderBrand.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
}

HeaderBrand.displayName = 'HeaderBrand'
