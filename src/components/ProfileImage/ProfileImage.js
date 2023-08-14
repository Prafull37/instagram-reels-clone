import React from 'react';
import style from './style.css';

const imageStyle={
    sm:{
        height:"20px",
        width:"20px",
    }
}

function ProfileImage(props){
    const {profileImage,size="sm"}= props;
    
    return (<div className={style.profileContainer}>
        <div className={style.profileImage} style={imageStyle[size]}>
            <img src={profileImage} alt={"s"}/>
        </div>
        <div className={style.userName}>John Doe</div>
    </div>)
}

export default ProfileImage;