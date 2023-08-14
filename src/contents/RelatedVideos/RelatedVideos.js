import React,{useRef} from "react";
import Video from "../../components/video/Video";
import style from './style.css'

function RelatedVideo(){
    const videoRef = useRef();
    return (  <div className={style.videoContainer} data-test="rvc">
    <Video src={"https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"} ref={videoRef} />
</div>)
}

function RelatedVideos(){
    return <div className={style.relatedVideoList}>
        <RelatedVideo/>
        <RelatedVideo/>
        <RelatedVideo/>
        <RelatedVideo/>
    </div>
}

export default RelatedVideos