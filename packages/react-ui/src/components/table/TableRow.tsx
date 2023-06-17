import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Colors, colorPropType } from '../Types'

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  /**
   * Highlight a table row or cell..
   */
  active?: boolean
  /**
   * Set the vertical aligment.
   */
  align?: 'bottom' | 'middle' | 'top' | string
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
   */
  color?: Colors
}

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, active, align, className, color, ...rest }, ref) => {
    const _className = classNames(
      {
        [`align-${align}`]: align,
        'table-active': active,
        [`table-${color}`]: color,
      },
      'n-custom-table-row-class',
      className,
    )

    return (
      <tr className={_className ? _className : undefined} {...rest} ref={ref}>
        {children}
      </tr>
    )
  },
)

TableRow.propTypes = {
  active: PropTypes.bool,
  align: PropTypes.oneOf(['bottom', 'middle', 'top']),
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType,
}

TableRow.displayName = 'TableRow'
