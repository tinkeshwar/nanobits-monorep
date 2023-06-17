import React, { HTMLAttributes, createContext, forwardRef, useState } from 'react'

import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface SidebarNavProps extends HTMLAttributes<HTMLUListElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
}

interface ContextProps {
  visibleGroup: string
  setVisibleGroup: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const NavContext = createContext({} as ContextProps)

export const SidebarNav = forwardRef<HTMLUListElement, SidebarNavProps>(
  ({ children, className, ...rest }, ref) => {
    const [visibleGroup, setVisibleGroup] = useState('')
    const NavContextValues = {
      visibleGroup,
      setVisibleGroup,
    }
    const classes = classNames('sidebar-nav','n-custom-sidebar-nav-class', className)
    return (
      <ul className={classes} ref={ref} {...rest}>
        <NavContext.Provider value={NavContextValues}>
          {React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, { key: index, idx: `${index}` } as any)
            }
            return
          })}
        </NavContext.Provider>
      </ul>
    )
  },
)

SidebarNav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

SidebarNav.displayName = 'SidebarNav'
