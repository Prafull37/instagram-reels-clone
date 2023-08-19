import React,{memo, useCallback, useEffect, useRef, useState} from 'react'

import Reel from "./reel/Reel";
import style from './style.css';
import { useGetReelsQuery } from '../queries/reels';
import InfiniteScroll from '../components/InfinitScroll/InfiniteScroll';
import { initializeReels } from '../store/reducer';
import { useDispatch,useSelector } from '../store/storeContext';
import { debounce } from '../utils/utils';

const height= screen.width > 425 ? window.innerHeight *0.8 :window.innerHeight;

function ReelContainer(){
    const [isVideoMuted,setIsVideoMuted] = useState(true)
    const parentRef= useRef();
    const currentActiveReelRef= useRef(0)
    const prevScrollRef= useRef()
    const reelRef= useRef([]);

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
    
    const onVideoMute= useCallback(()=>{
        const currentActiveReel = currentActiveReelRef.current;
        
        setIsVideoMuted((isVideoMuted)=>{
            if(isVideoMuted){
                reelRef.current[currentActiveReel].onSoundOn()
            }else{
                reelRef.current[currentActiveReel].onSoundOff()
            }

            return !isVideoMuted;
        })
    },[])

    

    const onScroll=(e)=>{
        const currentScrollPosition = parentRef.current.scrollTop;

        if(currentScrollPosition === prevScrollRef.current) return;

        if(prevScrollRef.current === 0){
            prevScrollRef.current=currentScrollPosition;
            return;
        }

        const isUpward = currentScrollPosition > prevScrollRef.current ;

        let currentActiveReel = currentActiveReelRef.current;
        reelRef.current[currentActiveReel].handlerForPrevVideo()
        reelRef.current[currentActiveReel].onPause()
        reelRef.current[currentActiveReel].onSoundOff()

        currentActiveReelRef.current = isUpward? currentActiveReel+1:currentActiveReel===0?0:currentActiveReel-1;

        reelRef.current[ currentActiveReelRef.current ].onPlay()

        if(!isVideoMuted){
            reelRef.current[ currentActiveReelRef.current ].onSoundOn()
        }

        prevScrollRef.current=currentScrollPosition

    }

    return <div className={style.allReels} data-test="rc" ref={parentRef}  onScroll={debounce(onScroll,1000)}>
        <div className={style.reelsWidthContainer}  >
        {reels.map((reel,index)=>{ 
            return (
            <InfiniteScroll key={reel.id}  className={style.reelsContainer} parentRef={parentRef} doesObserve={index === reels.length-2} fetchNextPage={fetchNextPage} style={{height}}>
                <Reel {...reel} isVideoMuted={isVideoMuted} isActiveVideo={index===currentActiveReelRef.current} ref={(node)=>{reelRef.current[index]=node}} onVideoMute={onVideoMute} />
            </InfiniteScroll>
            )})}
        </div>
    </div>
}

export default memo(ReelContainer);