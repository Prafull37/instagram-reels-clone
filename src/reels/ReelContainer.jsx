import React,{memo, useRef} from 'react'

import Reel from "./reel/Reel";
import style from './style.css';
import { useGetReelsQuery } from '../queries/reels';
import InfiniteScroll from '../components/InfinitScroll/InfiniteScroll';
import { initializeReels } from '../store/reducer';
import { useDispatch,useSelector } from '../store/storeContext';

function ReelContainer(){
    const parentRef= useRef();

    const reels = useSelector((state)=>{
         return state.reels
    }) ||[];

    const dispatch = useDispatch();

    const {fetchNextPage}= useGetReelsQuery({
        onSuccess:(data)=>{
            const {pages,pageCount} = data;
            dispatch(initializeReels({reels:pages[pageCount-1].reels}))
        },
    });    

    return <div className={style.allReels} data-test="rc" ref={parentRef}>
        <div className={style.reelsWidthContainer}  >
        {reels.map((reel,index)=>{ 
            return (
            <InfiniteScroll key={reel.id} className={style.reelsContainer} parentRef={parentRef} doesObserve={index === reels.length-2} fetchNextPage={fetchNextPage}>
                <Reel {...reel}/>
            </InfiniteScroll>
            )})}
        </div>
    </div>
}

export default memo(ReelContainer);