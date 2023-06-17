import React, { FC, ReactNode } from 'react'

import PropTypes from 'prop-types'

import { FormControlValidation, FormControlValidationProps } from './FormControlValidation'
import { FormFloating } from './FormFloating'
import { FormLabel } from './FormLabel'
import { FormText } from './FormText'

export interface FormControlWrapperProps extends FormControlValidationProps {
  /**
   * @ignore
   */
  children?: ReactNode
  /**
   * Provide valuable, actionable valid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`.
   *
   * @since 4.2.0
   */
  floatingLabel?: ReactNode | string
  /**
   * @ignore
   */
  id?: string
  /**
   * Add a caption for a component.
   *
   * @since 4.2.0
   */
  label?: ReactNode | string
  /**
   * Add helper text to the component.
   *
   * @since 4.2.0
   */
  text?: ReactNode | string
}

export const FormControlWrapper: FC<FormControlWrapperProps> = ({
  children,
  describedby,
  feedback,
  feedbackInvalid,
  feedbackValid,
  floatingLabel,
  id,
  invalid,
  label,
  text,
  tooltipFeedback,
  valid,
}) => {
  return floatingLabel ? (
    <FormFloating>
      {children}
      <FormLabel htmlFor={id}>{label || floatingLabel}</FormLabel>
    </FormFloating>
  ) : (
    <>
      {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
      {children}
      {text && <FormText id={describedby}>{text}</FormText>}
      <FormControlValidation
        describedby={describedby}
        feedback={feedback}
        feedbackInvalid={feedbackInvalid}
        feedbackValid={feedbackValid}
        floatingLabel={floatingLabel}
        invalid={invalid}
        tooltipFeedback={tooltipFeedback}
        valid={valid}
      />
    </>
  )
}

FormControlWrapper.propTypes = {
  children: PropTypes.node,
  floatingLabel: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  text: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  ...FormControlValidation.propTypes,
}

FormControlWrapper.displayName = 'FormControlWrapper'
