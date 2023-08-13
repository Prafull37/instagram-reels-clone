import React,{useRef} from 'react'

import Reel from "../molecules/reel/Reel";
import style from './style.css';
import { useGetReelsQuery } from '../queries/reels';
import InfiniteScroll from '../components/InfinitScroll/InfiniteScroll';

function ReelContainer(){
   const {data={},fetchNextPage}= useGetReelsQuery();

   const parentRef =  useRef();

   const {reels = [],} = data;

    return <div className={style.allReels} data-test="rc" ref={parentRef}>
        <div className={style.reelsWidthContainer}  >
           {reels.map((reel,index)=>{ 
               return <InfiniteScroll key={reel.id} className={style.reelsContainer} parentRef={parentRef} doesObserve={index === reels.length-2} fetchNextPage={fetchNextPage}>
                  <Reel/>
                </InfiniteScroll>
            })}
        </div>
    </div>
    
}

export default ReelContainer