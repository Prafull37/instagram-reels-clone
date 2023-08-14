import React, { useCallback,useState } from 'react';
import Modal from '../Modal/Modal';

import style from './style.css'


function Icons(props){
    const [isActive,setIsActive] = useState(false);
    const {onClick,activeIcon,normalIcon,iconText} = props;

    const doesHaveActiveIcon = !!activeIcon

    const onIconClick =()=>{
        if(doesHaveActiveIcon){
            setIsActive(isActive)
        }
        onClick();
    }

    return (
        <div className={style.iconContainer} onClick={onIconClick}>
            {isActive ? activeIcon:(normalIcon||activeIcon)}
            {iconText && <div>{iconText}</div>}
        </div>
    )
}



export default Icons