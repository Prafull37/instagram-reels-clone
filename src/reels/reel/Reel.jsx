import React,{useCallback, lazy, useRef, useState, Suspense} from 'react';

import classNames from 'classnames';
import Video from "../../components/video/Video";
import { AiOutlineLike,AiFillLike, AiOutlineShopping,AiFillShopping} from "react-icons/ai";
import {FaRegCommentDots,FaCommentDots} from 'react-icons/fa'
import {BiSolidShare,BiShare,BiSolidVideos} from 'react-icons/bi'

import Modal from '../../components/Modal/Modal';

import style from './style.css'
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import { updateLike } from '../../store/reducer';
import { useDispatch } from '../../store/storeContext';

const CommentSection = lazy(()=>import( '../../contents/Comments'));
const Shopping = lazy(()=>import( '../../contents/Shopping'));
const RelatedVideos = lazy(()=>import( '../../contents/RelatedVideos'));

const ACTION_ENUMS ={
    LIKE:"LIKE",
    COMMENT:"COMMENT",
    SHARE:"SHARE",
    PRODUCT:"PRODUCT",
    RELATED_VIDEOS:"RELATED_VIDEOS"
}

const ACTION_VS_MODAL={
    [ACTION_ENUMS.COMMENT]:ACTION_ENUMS.COMMENT,
    [ ACTION_ENUMS.PRODUCT]:ACTION_ENUMS.PRODUCT,
    [ ACTION_ENUMS.RELATED_VIDEOS]:ACTION_ENUMS.RELATED_VIDEOS
}

const modals = Object.keys(ACTION_VS_MODAL)



const MODAL_VS_TITLE={
    [ACTION_ENUMS.COMMENT]:"Comment",
    [ACTION_ENUMS.PRODUCT]:"Products",
    [ACTION_ENUMS.RELATED_VIDEOS]:"Related Videos",
}


function Reel(props){
    const [action,setAction] = useState("");
    const videoRef = useRef()
    const dispatch= useDispatch();

    const onActionClose = useCallback(()=>{setAction("")},[setAction])
    const onAction = useCallback((actionName)=>{setAction(actionName)},[setAction])


    const {id,video_src,likes,description,comments,user} = props;
    const {profile_picture,username} = user||{}

    const isLikeIconActive = action === ACTION_ENUMS.LIKE;
    const isCommentIconActive = action === ACTION_ENUMS.COMMENT;
    const isShareIconActive = action === ACTION_ENUMS.SHARE;
    const isProductIconActive = action === ACTION_ENUMS.PRODUCT;
    const isRelatedVideosIconActive = action === ACTION_ENUMS.RELATED_VIDEOS;

    const onPressLike=()=>{
        if(isLikeIconActive){
            onActionClose();
        }else{
            onAction(ACTION_ENUMS.LIKE)
        }
        dispatch(updateLike({id}))
    }

    const onPressComment=()=>{
        if(isCommentIconActive){
            onActionClose();
        }else{
            onAction(ACTION_ENUMS.COMMENT)
        }
    }

    const onPressShare=()=>{
        if(isShareIconActive){
            onActionClose();
        }else{
            onAction(ACTION_ENUMS.SHARE)
        }

    }

    const onPressProducts=()=>{
        if(isProductIconActive){
            onActionClose();
        }else{
            onAction(ACTION_ENUMS.PRODUCT)
        }
    }

    
    const onPressRelatedVideos=()=>{
        if(isRelatedVideosIconActive){
            onActionClose();
        }else{
            onAction(ACTION_ENUMS.RELATED_VIDEOS)
        }
    }

    return( <div className={style.reelsContainer} data-test="r">   
            <div className={style.videoContainer} data-test="s">
                <Video src={video_src} ref={videoRef} />
                <div className={style.videoDescription}>
                    <ProfileImage profileImage={profile_picture} username={username}/>
                    <div className={style.description}>
                        {description}
                    </div>
                </div>
            </div>
            <div className={style.allIconContainer} data-test='ic'>
                <div className={style.iconContainer} onClick={onPressLike}>
                    {action === ACTION_ENUMS.LIKE ?  <AiFillLike className={classNames(style.icons,style.active)}/>:<AiOutlineLike className={style.icons}/>}
                    <div>{likes}</div>
                </div>
                <div className={style.iconContainer} onClick={onPressComment}>
                    {action === ACTION_ENUMS.COMMENT ?  <FaCommentDots className={classNames(style.icons,style.active)}/>:<FaRegCommentDots className={style.icons}/>}
                     <div>{comments.length}</div>
                </div>
                <div className={style.iconContainer} onClick={onPressShare}>
                    {action === ACTION_ENUMS.SHARE ? <BiSolidShare className={classNames(style.icons,style.active)}/>:<BiShare className={style.icons}/>}
                    <div>Share</div>
                </div>
                <div className={style.iconContainer} onClick={onPressProducts}>
                     <AiOutlineShopping className={style.icons}/>
                </div>
                <div className={style.iconContainer} onClick={onPressRelatedVideos}>
                        <BiSolidVideos className={style.icons}/>
                </div>       
            </div>
            <Modal
                title={MODAL_VS_TITLE[action]}
                onModalClose={onActionClose}
                open={!!modals.includes(action)}
            >
                {action === ACTION_ENUMS.COMMENT && <Suspense fallback={"Loading..."}><CommentSection id={id} username={username} /></Suspense>}
                {action === ACTION_ENUMS.RELATED_VIDEOS && <Suspense fallback={"Loading..."}><RelatedVideos id={id}/></Suspense>}
                {action === ACTION_ENUMS.PRODUCT  && <Suspense fallback={"Loading..."}><Shopping id={id}/></Suspense>}
            </Modal>
        </div>
    );
}

export default Reel;