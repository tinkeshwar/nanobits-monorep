import React, { ChangeEventHandler, forwardRef, InputHTMLAttributes, useState } from 'react'

import classNames from 'classnames'
import PropTypes from 'prop-types'

import { FormControlWrapper, FormControlWrapperProps } from './FormControlWrapper'
import { useEffect } from 'react'

export interface FormInputProps
  extends FormControlWrapperProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Delay onChange event while typing. If set to true onChange event will be delayed 500ms, you can also provide the number of milliseconds you want to delay the onChange event.
   */
  delay?: boolean | number
  /**
   * Toggle the disabled state for the component.
   */
  disabled?: boolean
  /**
   * Method called immediately after the `value` prop changes.
   */
  onChange?: ChangeEventHandler<HTMLInputElement>
  /**
   * Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use only along side `readonly` [docs]
   */
  plainText?: boolean
  /**
   * Toggle the readonly state for the component.
   */
  readOnly?: boolean
  /**
   * Size the component small or large.
   */
  size?: 'sm' | 'lg'
  /**
   * Specifies the type of component.
   */
  type?: 'color' | 'file' | 'text' | string
  /**
   * The `value` attribute of component.
   *
   * @controllable onChange
   * */
  value?: string | string[] | number
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      children,
      className,
      delay = false,
      feedback,
      feedbackInvalid,
      feedbackValid,
      floatingLabel,
      id,
      invalid,
      label,
      onChange,
      plainText,
      size,
      text,
      tooltipFeedback,
      type = 'text',
      valid,
      ...rest
    },
    ref,
  ) => {
    const [value, setValue] = useState<React.ChangeEvent<HTMLInputElement>>()

    useEffect(() => {
      const timeOutId = setTimeout(
        () => value && onChange && onChange(value),
        typeof delay === 'number' ? delay : 500,
      )

      return () => clearTimeout(timeOutId)
    }, [value])

    const _className = classNames(
      plainText ? 'form-control-plaintext' : 'form-control',
      {
        [`form-control-${size}`]: size,
        'form-control-color': type === 'color',
        'is-invalid': invalid,
        'is-valid': valid,
      },
      'n-custom-form-input-class',
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
        <input
          className={_className}
          id={id}
          type={type}
          onChange={(event) => (delay ? setValue(event) : onChange && onChange(event))}
          {...rest}
          ref={ref}
        >
          {children}
        </input>
      </FormControlWrapper>
    )
  },
)

FormInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  delay: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  plainText: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'lg']),
  type: PropTypes.oneOfType([PropTypes.oneOf(['color', 'file', 'text']), PropTypes.string]),
  ...FormControlWrapper.propTypes,
}

FormInput.displayName = 'FormInput'
