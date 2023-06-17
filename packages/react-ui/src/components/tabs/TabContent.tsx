import React, { HTMLAttributes, forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface TabContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const TabContent = forwardRef<HTMLDivElement, TabContentProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('tab-content','n-custom-tab-content-class', className)
    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

TabContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

TabContent.displayName = 'TabContent'
