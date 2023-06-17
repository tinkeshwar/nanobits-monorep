import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface ModalContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('modal-content','n-custom-modal-content-class', className)

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)

ModalContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

ModalContent.displayName = 'ModalContent'
