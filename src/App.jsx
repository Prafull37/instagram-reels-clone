import React from 'react';
import ReelContainer from './reels/ReelContainer';
import style from './index.css'
import Modal from './components/Modal/Modal';


export default function App(){
    return <div className={style.mainContainer}>
            <ReelContainer/>
        </div>
}