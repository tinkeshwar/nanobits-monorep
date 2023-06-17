import React, { ElementType, forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { LinkProps } from '../link/Link'
import { Link } from '../link/Link'

export interface DropdownItemProps extends LinkProps {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}

export const DropdownItem = forwardRef<HTMLButtonElement | HTMLAnchorElement, DropdownItemProps>(
  ({ children, className, component = 'a', ...rest }, ref) => {
    const _className = classNames('dropdown-item','n-custom-dropdown-item-class', className)

    return (
      <Link className={_className} component={component} {...rest} ref={ref}>
        {children}
      </Link>
    )
  },
)

DropdownItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
}

DropdownItem.displayName = 'DropdownItem'
