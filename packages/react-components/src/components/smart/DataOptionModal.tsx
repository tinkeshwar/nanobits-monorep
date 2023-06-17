import React, { forwardRef } from "react";
import { Col, Modal, ModalBody, Row } from "nanobits-react-ui";
import { ModalProps } from "nanobits-react-ui/components/modal/Modal";
import PropTypes from 'prop-types';
import classNames from "classnames";
import { WButton } from "../button";

export interface DataOptionModalProps extends ModalProps{
    visible: boolean
    className?: string
    color?: 'primary' | 'danger' | 'info' | 'success' | 'warning' | 'dark'
    icon?: string
    backdrop?: 'static' | boolean
    setVisible: (value: boolean) => void
    primary: string|number,
    options: any
}

export const DataOptionModal = forwardRef<HTMLDivElement, DataOptionModalProps&ModalProps>((
    {
        visible,
        className,
        color,
        icon,
        backdrop,
        setVisible,
        primary,
        options,
        ...rest
    },
    ref
)=>{

    const _className = classNames(
        'n-custom-data-option-modal-class',
        color ? `bg-${color} text-white` : '',
        className,
    )

    return (
        <Modal
            ref={ref}
            className={_className}
            visible={visible}
            onClose={() => setVisible(!visible)}
            backdrop={backdrop}
            {...rest}
        >
            <ModalBody>
            {(options && options.length) && options.map((rowItem: any, index: number) => {
                const _rowClass = classNames(
                    'gx-3',
                    index> 0 ? 'mt-3':''
                )
                return(
                    <Row key={`option-modal-row-${index}`} className={_rowClass}>
                        {(rowItem && rowItem.length) && rowItem.map((colItem: any, index: number) => {
                            return (
                                <Col key={`option-modal-col-${index}`} className={index > 0 ? 'pl-0' : ''}>
                                    <WButton
                                        className={'shadow'}
                                        primary={primary}
                                        title={colItem.title}
                                        color={colItem.color}
                                        icon={colItem.icon}
                                        value={colItem.value}
                                        onClick={colItem.onClick}
                                        disabled={colItem.disabled}
                                    />
                                </Col>
                            )
                        })}
                    </Row>
                )
            })}
            </ModalBody>
        </Modal>
    )
})

DataOptionModal.prototype = {
    options: PropTypes.any,
    visible: PropTypes.bool,
    classNames: PropTypes.string,
    setVisible: PropTypes.func.isRequired,
    color: PropTypes.string,
    icon: PropTypes.string,
    backdrop: PropTypes.any
}

DataOptionModal.displayName = 'DataOptionModal'