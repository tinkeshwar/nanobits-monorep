import React, { ElementType, forwardRef, useContext } from 'react'
import PropTypes from 'prop-types'
import { ToastContext } from './Toast'
import { CloseButton, CloseButtonProps } from '../close-button/CloseButton'

export interface ToastCloseProps extends CloseButtonProps {
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}

export const ToastClose = forwardRef<HTMLButtonElement, ToastCloseProps>(
  ({ children, component: Component, ...rest }, ref) => {
    const { setVisible } = useContext(ToastContext)
    return Component ? (
      <Component onClick={() => setVisible(false)} {...rest} ref={ref}>
        {children}
      </Component>
    ) : (
      <CloseButton onClick={() => setVisible(false)} {...rest} ref={ref} />
    )
  },
)

ToastClose.propTypes = {
  ...CloseButton.propTypes,
  component: PropTypes.elementType,
}

ToastClose.displayName = 'ToastClose'
