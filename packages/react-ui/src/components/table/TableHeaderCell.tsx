import React, { forwardRef, ThHTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Colors, colorPropType } from '../Types'

export interface TableHeaderCellProps extends ThHTMLAttributes<HTMLTableCellElement> {
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

export const TableHeaderCell = forwardRef<HTMLTableCellElement, TableHeaderCellProps>(
  ({ children, className, color, ...rest }, ref) => {
    const _className = classNames(
      {
        [`table-${color}`]: color,
      },
      'n-custom-table-header-cell-class',
      className,
    )

    return (
      <th className={_className ? _className : undefined} {...rest} ref={ref}>
        {children}
      </th>
    )
  },
)

TableHeaderCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType,
}

TableHeaderCell.displayName = 'TableHeaderCell'
