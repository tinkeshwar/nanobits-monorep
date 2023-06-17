import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { ProgressBar, ProgressBarProps } from './ProgressBar'

export interface ProgressProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    ProgressBarProps {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Sets the height of the component. If you set that value the inner `<ProgressBar>` will automatically resize accordingly.
   */
  height?: number
  /**
   * Makes progress bar thinner.
   */
  thin?: boolean
  /**
   * The percent to progress the ProgressBar (out of 100).
   */
  value?: number
  /**
   * Change the default color to white.
   */
  white?: boolean
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ children, className, height, thin, value = 0, white, ...rest }, ref) => {
    const _className = classNames(
      'progress',
      'n-custom-progress-class',
      {
        'progress-thin': thin,
        'progress-white': white,
      },
      className,
    )

    return (
      <div className={_className} style={height ? { height: `${height}px` } : {}} ref={ref}>
        {value ? (
          <ProgressBar value={value} {...rest}>
            {children}
          </ProgressBar>
        ) : (
          children
        )}
      </div>
    )
  },
)

Progress.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  height: PropTypes.number,
  thin: PropTypes.bool,
  value: PropTypes.number,
  white: PropTypes.bool,
}

Progress.displayName = 'Progress'
