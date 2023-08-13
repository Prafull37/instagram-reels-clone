import React from 'react';
import ReelContainer from './reels/ReelContainer';
import style from './index.css'


export default function App(){
    return <div className={style.mainContainer}>
            <ReelContainer/>
        </div>
}