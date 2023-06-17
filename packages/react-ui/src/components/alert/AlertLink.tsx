import React, { AnchorHTMLAttributes, forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Link } from '../link/Link'

export interface AlertLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const AlertLink = forwardRef<HTMLAnchorElement, AlertLinkProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('alert-link', 'n-custom-alert-link-class', className)

    return (
      <Link className={_className} {...rest} ref={ref}>
        {children}
      </Link>
    )
  },
)

AlertLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

AlertLink.displayName = 'AlertLink'
