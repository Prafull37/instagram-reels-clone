import React, { memo } from 'react';
import cx from 'classnames'
import style from './style.css'

import {RxCross1} from 'react-icons/rx'


const Modal = (props)=>{
    const {title,children,open,onModalClose} = props;

    return <div className={cx(style.modalContainer,{[style.hidden]:!open})} data-test="modalc" >
        <div className={style.modalBackdrop} onClick={onModalClose}/>
        <div className={style.modalWrapper} data-test="modalw">
            <div className={style.modalHeader} data-test="modalH">
                <div className={style.modalTitle} data-test="modalT">{title}</div>
                <div className={style.modalCloseButton} data-test="modalCb" onClick={onModalClose}><RxCross1/></div>
            </div>
            <div className={style.modalBody} data-test="modalb">
              {children}
            </div>
        </div>
    </div>
}

export default memo(Modal);