import React, { AnchorHTMLAttributes, forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Link } from '../link/Link'

export interface CardLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * The href attribute specifies the URL of the page the link goes to.
   */
  href?: string
}

export const CardLink = forwardRef<HTMLAnchorElement, CardLinkProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('card-link','n-custom-card-link-class', className)

    return (
      <Link className={_className} {...rest} ref={ref}>
        {children}
      </Link>
    )
  },
)

CardLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CardLink.displayName = 'CardLink'
