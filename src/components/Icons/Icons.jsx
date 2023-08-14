import React, { useCallback,useState } from 'react';
import Modal from '../Modal/Modal';

import style from './style.css'


function Icons(props){
    const {onClick,isActive,activeIcon,normalIcon,iconText} = props;
    return (
        <div className={style.iconContainer} onClick={onClick}>
            {isActive ? normalIcon:activeIcon}
            {iconText && <div>{iconText}</div>}
        </div>
    )
}



export default Icons