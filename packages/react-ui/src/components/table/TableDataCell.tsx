import React, { forwardRef, TdHTMLAttributes, ThHTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Colors, colorPropType } from '../Types'

export interface TableDataCellProps
  extends Omit<TdHTMLAttributes<HTMLTableCellElement>, 'align'>,
    Omit<ThHTMLAttributes<HTMLTableCellElement>, 'align'> {
  /**
   * Highlight a table row or cell.
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

export const TableDataCell = forwardRef<HTMLTableCellElement, TableDataCellProps>(
  ({ children, active, align, className, color, ...rest }, ref) => {
    const _className = classNames(
      {
        [`align-${align}`]: align,
        'table-active': active,
        [`table-${color}`]: color,
      },
      'n-custom-table-data-cell-class',
      className,
    )

    const Component = rest.scope ? 'th' : 'td'

    return (
      <Component className={_className ? _className : undefined} {...rest} ref={ref}>
        {children}
      </Component>
    )
  },
)

TableDataCell.propTypes = {
  active: PropTypes.bool,
  align: PropTypes.oneOf(['bottom', 'middle', 'top']),
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType,
}

TableDataCell.displayName = 'TableDataCell'
