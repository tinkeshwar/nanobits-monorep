import React, { createContext, forwardRef, HTMLAttributes, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The active item key.
   */
  activeItemKey?: number | string
  /**
   * Make accordion items stay open when another item is opened
   */
  alwaysOpen?: boolean
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Removes the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.
   */
  flush?: boolean
}

export interface AccordionContextProps {
  _activeItemKey?: number | string
  alwaysOpen?: boolean
  setActiveKey: React.Dispatch<React.SetStateAction<number | string | undefined>>
}

export const AccordionContext = createContext({} as AccordionContextProps)

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, activeItemKey = undefined, alwaysOpen = false, className, flush, ...rest }, ref) => {
    const [_activeItemKey, setActiveKey] = useState(activeItemKey)
    const _className = classNames('accordion', { 'accordion-flush': flush }, 'n-custom-accordion-context-class', className)
    return (
      <div className={_className} {...rest} ref={ref}>
        <AccordionContext.Provider value={{ _activeItemKey, alwaysOpen, setActiveKey }}>
          {children}
        </AccordionContext.Provider>
      </div>
    )
  },
)

Accordion.propTypes = {
  alwaysOpen: PropTypes.bool,
  activeItemKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  flush: PropTypes.bool,
}

Accordion.displayName = 'Accordion'
