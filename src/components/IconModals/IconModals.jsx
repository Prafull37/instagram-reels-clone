import React, { useCallback,useState } from 'react';
import Modal from '../Modal/Modal';

import style from './style.css'


function IconModals(props){
    const [isActive, setIsActive] = useState(false);
    const {activeIcon,normalIcon,iconText,children,modalTitle,doesShowModal} = props

    const onIconClick = useCallback(()=>{
        setIsActive((prev)=>!prev)
    },[setIsActive])

    return <>
        <div className={style.iconContainer} onClick={onIconClick}>
            {isActive ? normalIcon:activeIcon}
            {iconText && <div>{iconText}</div>}
        </div>
       {doesShowModal &&<Modal
        open={isActive}
        title={modalTitle}
        onModalClose={onIconClick}
        >
            {children}
        </Modal>}
    </>
}



export default IconModals