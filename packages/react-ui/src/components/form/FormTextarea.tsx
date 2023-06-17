import React, { ChangeEventHandler, forwardRef, TextareaHTMLAttributes } from 'react'

import classNames from 'classnames'
import PropTypes from 'prop-types'

import { FormControlWrapper, FormControlWrapperProps } from './FormControlWrapper'

export interface FormTextareaProps
  extends FormControlWrapperProps,
    TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Toggle the disabled state for the component.
   */
  disabled?: boolean
  /**
   * Method called immediately after the `value` prop changes.
   */
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
  /**
   * Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use only along side `readonly`.
   */
  plainText?: boolean
  /**
   * Toggle the readonly state for the component.
   */
  readOnly?: boolean
  /**
   * The `value` attribute of component.
   *
   * @controllable onChange
   * */
  value?: string | string[] | number
}

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  (
    {
      children,
      className,
      feedback,
      feedbackInvalid,
      feedbackValid,
      floatingLabel,
      id,
      invalid,
      label,
      plainText,
      text,
      tooltipFeedback,
      valid,
      ...rest
    },
    ref,
  ) => {
    const _className = classNames(
      plainText ? 'form-control-plaintext' : 'form-control',
      {
        'is-invalid': invalid,
        'is-valid': valid,
      },
      'n-custom-form-textarea-class',
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
        <textarea className={_className} id={id} {...rest} ref={ref}>
          {children}
        </textarea>
      </FormControlWrapper>
    )
  },
)

FormTextarea.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  plainText: PropTypes.bool,
  ...FormControlWrapper.propTypes,
}

FormTextarea.displayName = 'FormTextarea'
