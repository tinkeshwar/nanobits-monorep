import React, { ChangeEventHandler, forwardRef, InputHTMLAttributes, ReactNode } from 'react'

import classNames from 'classnames'
import PropTypes from 'prop-types'

import { FormLabel } from './FormLabel'
export interface FormRangeProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Toggle the disabled state for the component.
   */
  disabled?: boolean
  /**
   * Add a caption for a component.
   *
   * @since 4.2.0
   */
  label?: ReactNode | string
  /**
   * Specifies the maximum value for the component.
   */
  max?: number
  /**
   * Specifies the minimum value for the component.
   */
  min?: number
  /**
   * Method called immediately after the `value` prop changes.
   */
  onChange?: ChangeEventHandler<HTMLInputElement>
  /**
   * Toggle the readonly state for the component.
   */
  readOnly?: boolean
  /**
   * Specifies the interval between legal numbers in the component.
   */
  steps: number
  /**
   * The `value` attribute of component.
   *
   * @controllable onChange
   * */
  value?: string | string[] | number
}

export const FormRange = forwardRef<HTMLInputElement, FormRangeProps>(
  ({ className, label, ...rest }, ref) => {
    const _className = classNames('form-range','n-custom-form-range-class', className)
    return (
      <>
        {label && <FormLabel htmlFor={rest.id}>{label}</FormLabel>}
        <input type="range" className={_className} {...rest} ref={ref} />
      </>
    )
  },
)

FormRange.propTypes = {
  className: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
}

FormRange.displayName = 'FormRange'
