import React, { forwardRef, HTMLAttributes, useContext } from 'react'
import PropTypes from 'prop-types'
import { ModalContext } from './Modal'
import { CloseButton } from '../close-button/CloseButton'
import classNames from 'classnames'

export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Add a close button component to the header.
   */
  closeButton?: boolean
}

export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ children, className, closeButton = true, ...rest }, ref) => {
    const { setVisible } = useContext(ModalContext)
    const _className = classNames('modal-header','n-custom-modal-header-class', className)

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
        {closeButton && <CloseButton onClick={() => setVisible(false)} />}
      </div>
    )
  },
)

ModalHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  closeButton: PropTypes.bool,
}

ModalHeader.displayName = 'ModalHeader'
