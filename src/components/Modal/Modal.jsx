import React from 'react';
import style from './style.css'

import RsuiteModal from 'rsuite/Modal'

const Modal = (props)=>{
    const {title,children,open,onModalClose} = props;
    return <RsuiteModal open={open} onClose={onModalClose}>
            <RsuiteModal.Header className={style.modalHeader}>
                <RsuiteModal.Title >{title}</RsuiteModal.Title>
            </RsuiteModal.Header>
            <RsuiteModal.Body>
                {children}
            </RsuiteModal.Body>
    </RsuiteModal>
}

export default Modal;