import React, { FC, ReactNode } from 'react'

import PropTypes from 'prop-types'

import { FormFeedback } from './FormFeedback'

export interface FormControlValidationProps {
  /**
   * @ignore
   */
  describedby?: string
  /**
   * Provide valuable, actionable feedback.
   *
   * @since 4.2.0
   */
  feedback?: ReactNode | string
  /**
   * Provide valuable, actionable feedback.
   *
   * @since 4.2.0
   */
  feedbackInvalid?: ReactNode | string
  /**
   * Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`.
   *
   * @since 4.2.0
   */
  feedbackValid?: ReactNode | string
  /**
   * Provide valuable, actionable valid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`.
   *
   * @since 4.2.0
   */
  floatingLabel?: ReactNode | string
  /**
   * Set component validation state to invalid.
   */
  invalid?: boolean
  /**
   * Display validation feedback in a styled tooltip.
   *
   * @since 4.2.0
   */
  tooltipFeedback?: boolean
  /**
   * Set component validation state to valid.
   */
  valid?: boolean
}

export const FormControlValidation: FC<FormControlValidationProps> = ({
  describedby,
  feedback,
  feedbackInvalid,
  feedbackValid,
  invalid,
  tooltipFeedback,
  valid,
}) => {
  return (
    <>
      {feedback && (valid || invalid) && (
        <FormFeedback
          {...(invalid && { id: describedby })}
          invalid={invalid}
          tooltip={tooltipFeedback}
          valid={valid}
        >
          {feedback}
        </FormFeedback>
      )}
      {feedbackInvalid && (
        <FormFeedback id={describedby} invalid tooltip={tooltipFeedback}>
          {feedbackInvalid}
        </FormFeedback>
      )}
      {feedbackValid && (
        <FormFeedback valid tooltip={tooltipFeedback}>
          {feedbackValid}
        </FormFeedback>
      )}
    </>
  )
}

FormControlValidation.propTypes = {
  describedby: PropTypes.string,
  feedback: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  feedbackValid: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  feedbackInvalid: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  invalid: PropTypes.bool,
  tooltipFeedback: PropTypes.bool,
  valid: PropTypes.bool,
}

FormControlValidation.displayName = 'FormControlValidation'
