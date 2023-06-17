import { Collapse, CollapseProps } from '../collapse/Collapse'
import React, { forwardRef } from 'react'

import PropTypes from 'prop-types'
import classNames from 'classnames'

export const AccordioCollapse = forwardRef<HTMLDivElement, Omit<CollapseProps, 'horizontal'>>(
  ({ className, children, ...props }, ref) => {

    const _className = classNames('accordion-collapse', 'n-custom-accordion-collapse-class', className)

    return (
      <Collapse className={_className} {...props} ref={ref}>
        {children}
      </Collapse>
    )
  },
)

AccordioCollapse.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

AccordioCollapse.displayName = 'AccordioCollapse'
