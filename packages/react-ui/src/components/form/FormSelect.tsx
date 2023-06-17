import React, { ChangeEventHandler, forwardRef, InputHTMLAttributes } from 'react'

import classNames from 'classnames'
import PropTypes from 'prop-types'

import { FormControlWrapper, FormControlWrapperProps } from './FormControlWrapper'

type Option = {
  disabled?: boolean
  label?: string
  value?: string
}
export interface FormSelectProps
  extends FormControlWrapperProps,
  Omit<InputHTMLAttributes<HTMLSelectElement>, 'size'> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Specifies the number of visible options in a drop-down list.
   */
  htmlSize?: number
  /**
   * Method called immediately after the `value` prop changes.
   */
  onChange?: ChangeEventHandler<HTMLSelectElement>
  /**
   * Options list of the select component. Available keys: `label`, `value`, `disabled`.
   * Examples:
   * - `options={[{ value: 'js', label: 'JavaScript' }, { value: 'html', label: 'HTML', disabled: true }]}`
   * - `options={['js', 'html']}`
   */
  options?: Option[] | string[]
  /**
   * Size the component small or large.
   */
  size?: 'sm' | 'lg'
  /**
   * The `value` attribute of component.
   *
   * @controllable onChange
   */
  value?: string | string[] | number
}

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  (
    {
      children,
      className,
      feedback,
      feedbackInvalid,
      feedbackValid,
      floatingLabel,
      htmlSize,
      id,
      invalid,
      label,
      options,
      size,
      text,
      tooltipFeedback,
      valid,
      ...rest
    },
    ref,
  ) => {
    const _className = classNames(
      'form-select',
      'n-custom-form-select-class',
      {
        [`form-select-${size}`]: size,
        'is-invalid': invalid,
        'is-valid': valid,
      },
      className,
    )
    return (
      <FormControlWrapper
        describedby={rest['aria-describedby']}
        feedback={feedback}
        feedbackInvalid={feedbackInvalid}
        feedbackValid={feedbackValid}
        floatingLabel={floatingLabel}
        id={id}
        invalid={invalid}
        label={label}
        text={text}
        tooltipFeedback={tooltipFeedback}
        valid={valid}
      >
        <select id={id} className={_className} size={htmlSize} {...rest} ref={ref}>
          {options
            ? options.map((option, index) => {
              return (
                <option
                  {...(typeof option === 'object' && option.disabled && { disabled: option.disabled })}
                  {...(typeof option === 'object' && option.value && { value: option.value })}
                  key={index}
                >
                  {typeof option === 'string' ? option : option.label}
                </option>
              )
            })
            : children}
        </select>
      </FormControlWrapper>
    )
  },
)

FormSelect.propTypes = {
  className: PropTypes.string,
  htmlSize: PropTypes.number,
  options: PropTypes.array,
  ...FormControlWrapper.propTypes,
}

FormSelect.displayName = 'FormSelect'
