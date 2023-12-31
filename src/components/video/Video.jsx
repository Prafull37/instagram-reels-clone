import React, { useCallback, useRef,useState,forwardRef ,useImperativeHandle, useEffect} from "react";
import style from './style.css'

function Video(props,ref){
    const {src,isVideoPlaying,isVideoMuted,...restProps} = props;
    const [isPlaying,setIsPlaying] = useState(isVideoPlaying);

    const videoRef = useRef();

    const onPlay=useCallback(()=>{
        videoRef.current.play()
        setIsPlaying(true)
    },[setIsPlaying])

    const onPause=useCallback(()=>{
        videoRef.current.pause()
        setIsPlaying(false)
    },[setIsPlaying])

    const onPlayAndPause=useCallback(()=>{
        if(isPlaying){
            onPause();
        }else{
            onPlay();
        }
    },[isPlaying,onPause,onPlay]);

    const onSoundOn=useCallback(()=>{
        videoRef.current.muted = false;
    },[])

    const onSoundOff=useCallback(()=>{
        videoRef.current.muted = true;
    },[])

    useImperativeHandle(ref,()=>{
        return {
            video:videoRef.current,
            onPause,
            onPlay,
            onSoundOn,
            onSoundOff,
        }
    },[onPause,onPlay,onSoundOn,onSoundOff])


    return <div className={style.videoMainContainer} onClick={onPlayAndPause}  data-test="vm">
        <div className={style.videoWrapper} data-test="vw">
            <div className={style.videoContainer} data-test="vc">
                <video ref={videoRef} className={style.video} autoPlay={isVideoPlaying} muted loop {...restProps}>
                    <source src={src} type="video/mp4" />
                </video>
            </div>
        </div>
    </div>
}

export default forwardRef(Video);