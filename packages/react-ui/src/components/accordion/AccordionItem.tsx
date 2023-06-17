import React, {
  createContext,
  forwardRef,
  HTMLAttributes,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { AccordionContext } from './Accordion'

export interface AccordionItemContextProps {
  setVisible: (a: boolean) => void
  visible?: boolean
}

export const AccordionItemContext = createContext({} as AccordionItemContextProps)

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Item key.
   */
  itemKey?: number | string
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, className, itemKey, ...rest }, ref) => {
    const _itemKey = useRef(itemKey ? itemKey : Math.random().toString(36).substr(2, 9))

    const { _activeItemKey, alwaysOpen, setActiveKey } = useContext(AccordionContext)
    const [visible, setVisible] = useState(Boolean(_activeItemKey === _itemKey.current))

    useEffect(() => {
      !alwaysOpen && visible && setActiveKey(_itemKey.current)
    }, [visible])

    useEffect(() => {
      setVisible(Boolean(_activeItemKey === _itemKey.current))
    }, [_activeItemKey])

    const _className = classNames('accordion-item', 'n-custom-accordion-item-class', className)

    return (
      <div className={_className} {...rest} ref={ref}>
        <AccordionItemContext.Provider value={{ setVisible, visible }}>
          {children}
        </AccordionItemContext.Provider>
      </div>
    )
  },
)

AccordionItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  itemKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

AccordionItem.displayName = 'AccordionItem'
