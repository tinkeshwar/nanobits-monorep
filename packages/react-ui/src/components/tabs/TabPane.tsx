import React, { HTMLAttributes, forwardRef, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Transition } from 'react-transition-group'

import { useForkedRef } from '../../utils/hooks'
export interface TabPaneProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Callback fired when the component requests to be hidden.
   */
  onHide?: () => void
  /**
   * Callback fired when the component requests to be shown.
   */
  onShow?: () => void
  /**
   * Toggle the visibility of component.
   */
  visible?: boolean
}

export const TabPane = forwardRef<HTMLDivElement, TabPaneProps>(
  ({ children, className, onHide, onShow, visible, ...rest }, ref) => {
    const tabPaneRef = useRef()
    const forkedRef = useForkedRef(ref, tabPaneRef)

    const getTransitionClass = (state: string) => {
      return state === 'entered' && 'show'
    }

    const _className = classNames(
      'tab-pane',
      'fade',
      {
        active: visible,
      },
      'n-custom-tab-pane-class',
      className,
    )
    return (
      <Transition in={visible} nodeRef={tabPaneRef} onEnter={onShow} onExit={onHide} timeout={150}>
        {(state) => {
          const transitionClass = getTransitionClass(state)
          return (
            <div className={classNames(_className, transitionClass)} {...rest} ref={forkedRef}>
              {children}
            </div>
          )
        }}
      </Transition>
    )
  },
)

TabPane.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onHide: PropTypes.func,
  onShow: PropTypes.func,
  visible: PropTypes.bool,
}

TabPane.displayName = 'TabPane'
