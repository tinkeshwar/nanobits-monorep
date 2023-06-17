import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  size?: number
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ 
    children, 
    className, 
    size=1, 
    ...rest 
}, ref) => {

    const _className = classNames(
      'n-custom-heading-class',
      className,
    )

    switch (size) {
        case 1:
            return <h1 className={_className} {...rest} ref={ref}> {children} </h1>
        case 2:
            return <h2 className={_className} {...rest} ref={ref}> {children} </h2>
        case 3:
            return <h3 className={_className} {...rest} ref={ref}> {children} </h3>
        case 4:
            return <h4 className={_className} {...rest} ref={ref}> {children} </h4>
        case 5:
            return <h5 className={_className} {...rest} ref={ref}> {children} </h5>
        case 6:
            return <h6 className={_className} {...rest} ref={ref}> {children} </h6>
        default:
            return <h1 className={_className} {...rest} ref={ref}> {children} </h1>
      }
  },
)

Heading.propTypes = {
  children: PropTypes.node,
  size: PropTypes.number,
  className: PropTypes.string
}

Heading.displayName = 'Heading'
