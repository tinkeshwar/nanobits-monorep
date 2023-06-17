import { Button, ButtonProps } from '../button/Button'
import React, { FC, useContext } from 'react'
import { Triggers, triggerPropType } from '../Types'

import { DropdownContext } from './Dropdown'
import PropTypes from 'prop-types'
import { Reference } from 'react-popper'
import classNames from 'classnames'
import { useForkedRef } from '../../utils/hooks'

export interface DropdownToggleProps extends Omit<ButtonProps, 'type'> {
  /**
   * Enables pseudo element caret on toggler.
   */
  caret?: boolean
  /**
   * Create a custom toggler which accepts any content.
   */
  custom?: boolean
  /**
   * Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of `.dropdown-toggle-split` className for proper spacing around the dropdown caret.
   */
  split?: boolean
  /**
   * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.
   *
   * @type 'hover' | 'focus' | 'click'
   */
  trigger?: Triggers | Triggers[]
}

export const DropdownToggle: FC<DropdownToggleProps> = ({
  children,
  caret = true,
  custom,
  className,
  split,
  trigger = 'click',
  ...rest
}) => {
  const { dropdownToggleRef, popper, variant, visible, setVisible } = useContext(DropdownContext)
  const _className = classNames(
    {
      'dropdown-toggle': caret,
      'dropdown-toggle-split': split,
      'nav-link': variant === 'nav-item',
    },
    'n-custom-dropdown-toggle-class',
    className,
  )

  const triggers = {
    ...((trigger === 'click' || trigger.includes('click')) && {
      onClick: (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        setVisible(!visible)
      },
    }),
    ...((trigger === 'focus' || trigger.includes('focus')) && {
      onFocus: () => setVisible(true),
      onBlur: () => setVisible(false),
    }),
  }

  const togglerProps = {
    className: _className,
    'aria-expanded': visible,
    ...(!rest.disabled && { ...triggers }),
    ...triggers,
  }

  // We use any because Toggler can be `a` as well as `button`.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Toggler = (ref?: React.Ref<any>) => {
    return custom && React.isValidElement(children) ? (
      <>
        {React.cloneElement(children, {
          'aria-expanded': visible,
          ...(!rest.disabled && { ...triggers }),
          ref: useForkedRef(ref, dropdownToggleRef),
        } as any)}
      </>
    ) : variant === 'nav-item' ? (
      <a href="#" {...togglerProps} ref={useForkedRef(ref, dropdownToggleRef)}>
        {children}
      </a>
    ) : (
      <Button
        type="button"
        {...togglerProps}
        tabIndex={0}
        {...rest}
        ref={useForkedRef(ref, dropdownToggleRef)}
      >
        {children}
        {split && <span className="visually-hidden">Toggle Dropdown</span>}
      </Button>
    )
  }

  return popper ? <Reference>{({ ref }) => Toggler(ref)}</Reference> : Toggler(dropdownToggleRef)
}

DropdownToggle.propTypes = {
  caret: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  custom: PropTypes.bool,
  split: PropTypes.bool,
  trigger: triggerPropType,
}

DropdownToggle.displayName = 'DropdownToggle'
