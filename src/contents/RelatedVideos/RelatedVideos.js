import React,{useRef} from "react";
import Video from "../../components/video/Video";
import style from './style.css'
import { useReelsFromTagQuery } from "../../queries/reels";

function RelatedVideo(props){
    const {video_src} = props
    const videoRef = useRef();
    return (  <div className={style.videoContainer} data-test="rvc">
    <Video src={video_src} ref={videoRef} />
</div>)
}

function RelatedVideos(props){
    const {tags}= props;

    const {data=[]} = useReelsFromTagQuery(tags,{
        enabled:tags.length>0,
        select:(data)=>data.reels
    });

    return <div className={style.relatedVideoList}>
       {data.map((reels)=> <RelatedVideo key={reels.id} {...reels}/>)}
    </div>
}

export default RelatedVideos