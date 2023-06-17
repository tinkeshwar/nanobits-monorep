import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'

export const TableCaption = forwardRef<
  HTMLTableCaptionElement,
  HTMLAttributes<HTMLTableCaptionElement>
>(({ children, ...props }, ref) => {
  return (
    <caption {...props} ref={ref}>
      {children}
    </caption>
  )
})

TableCaption.propTypes = {
  children: PropTypes.node,
}

TableCaption.displayName = 'TableCaption'
