import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface CloseButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Toggle the disabled state for the component.
   */
  disabled?: boolean
  /**
   * Change the default color to white.
   */
  white?: boolean
}

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  ({ className, disabled, white, ...rest }, ref) => {
    const _className = classNames(
      'btn',
      'btn-close',
      {
        'btn-close-white': white,
      },
      'n-custom-close-button-class',
      disabled,
      className,
    )
    return (
      <button
        type="button"
        className={_className}
        aria-label="Close"
        disabled={disabled}
        {...rest}
        ref={ref}
      />
    )
  },
)

CloseButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  white: PropTypes.bool,
}

CloseButton.displayName = 'CloseButton'
