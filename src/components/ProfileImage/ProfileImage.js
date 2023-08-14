import React from 'react';
import style from './style.css';

const imageStyle={
    sm:{
        height:"20px",
        width:"20px",
    }
}

function ProfileImage(props){
    const {profileImage,username,size="sm",imageProps}= props;

    return (<div className={style.profileContainer}>
        <div className={style.profileImage} style={imageStyle[size]}>
            <img src={profileImage} alt={username} {...imageProps}/>
        </div>
        <div className={style.userName}>{username}</div>
    </div>)
}

export default memo(ProfileImage);