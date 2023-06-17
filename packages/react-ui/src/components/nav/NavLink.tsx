import React, { ElementType, forwardRef, useContext, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { useForkedRef } from '../../utils/hooks'
import { NavContext } from '../sidebar/SidebarNav'
import { LinkProps, Link } from '../link/Link'
export interface NavLinkProps extends Omit<LinkProps, 'idx'> {
  /**
   * Toggle the active state for the component.
   */
  active?: boolean
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
  /**
   * Toggle the disabled state for the component.
   */
  disabled?: boolean
  /**
   * @ignore
   */
  idx?: string
  /**
   * @ignore
   */
  to?: string
}

export const NavLink = forwardRef<
  HTMLButtonElement | HTMLAnchorElement | HTMLLIElement,
  NavLinkProps
>(({ children, className, idx, ...rest }, ref) => {
  const navLinkRef = useRef<HTMLAnchorElement>(null)
  const forkedRef = useForkedRef(ref, navLinkRef)

  const { setVisibleGroup } = useContext(NavContext)
  const _className = classNames('nav-link','n-custom-nav-link-class', className)

  useEffect(() => {
    rest.active = navLinkRef.current?.classList.contains('active')
    idx && rest.active && setVisibleGroup(idx)
  }, [rest.active, className])

  return (
    <Link className={_className} {...rest} ref={forkedRef}>
      {children}
    </Link>
  )
})

NavLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  idx: PropTypes.string,
}

NavLink.displayName = 'NavLink'
