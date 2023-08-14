import React,{useCallback, useEffect, useRef, useState} from 'react';

import classNames from 'classnames';
import Video from "../../components/video/Video";
import { AiOutlineLike,AiFillLike, AiOutlineShopping,AiFillShopping} from "react-icons/ai";
import {FaRegCommentDots,FaCommentDots} from 'react-icons/fa'
import {BiSolidShare,BiShare,BiSolidVideos} from 'react-icons/bi'

import Modal from '../../components/Modal/Modal';

import style from './style.css'
import Icons from '../../components/Icons/Icons';
import CommentSection from '../../contents/Comments/CommentSection';
import Shopping from '../../contents/Shopping/Shopping';
import RelatedVideos from '../../contents/RelatedVideos/RelatedVideos';
import ProfileImage from '../../components/ProfileImage/ProfileImage';

const ModalEnums={
    COMMENT:"comment",
    PRODUCTS:"products",
    RELATED_VIDEOS:"relatedVideos"
}

const ModalEnums_vs_Title={
    [ModalEnums.COMMENT]:"Comment",
    [ModalEnums.PRODUCTS]:"Products",
    [ModalEnums.RELATED_VIDEOS]:"Related Videos",
}


function Reel(props){
    const [modal,setModal] = useState("");
    const videoRef = useRef()
    
    const onModalClose = useCallback(()=>{setModal("")},[setModal])
    const onModalOpen = useCallback((modalName)=>{setModal(modalName)},[setModal])


    const {id,video_src,likes,description,comments,user} = props;
    const {profile_picture,username} = user


    return( <div className={style.reelsContainer} data-test="r">   
            <div className={style.videoContainer} data-test="s">
                <Video src={video_src} ref={videoRef} />
            </div>
            <div className={style.videoDescription}>
                <ProfileImage profileImage={profile_picture} username={username}/>
                <div className={style.description}>
                    {description}
                </div>
            </div>
            <div className={style.iconContainer} data-test='ic'>
                <Icons
                    activeIcon={ <AiFillLike className={classNames(style.icons,style.active)}/>}
                    normalIcon={<AiOutlineLike className={style.icons}/>}
                    iconText={likes}
                />
                <Icons
                    activeIcon={ <FaCommentDots className={classNames(style.icons,style.active)}/>}
                    normalIcon={ <FaRegCommentDots className={style.icons}/>}
                    iconText={comments.length}
                    onClick={()=>onModalOpen(ModalEnums.COMMENT)}
                />
                <Icons
                    normalIcon={  <BiShare className={style.icons}/> }
                    activeIcon={<BiSolidShare className={classNames(style.icons,style.active)}/>}
                    iconText={"Share"}
                />
                <Icons
                    normalIcon={  <AiOutlineShopping className={style.icons}/>}
                    iconText={"Shopping"}
                    onClick={()=>onModalOpen(ModalEnums.PRODUCTS)}

                />
                <Icons
                    normalIcon={ <BiSolidVideos className={style.icons}/>}
                    iconText={"Related videos"}
                    onClick={()=>onModalOpen(ModalEnums.RELATED_VIDEOS)}
                />
                    
            </div>
            <Modal
                title={ModalEnums_vs_Title[modal]}
                onModalClose={onModalClose}
                open={!!modal}
            >
                {modal === ModalEnums.COMMENT && <CommentSection id={id} />}
                {modal === ModalEnums.RELATED_VIDEOS && <RelatedVideos id={id}/>}
                {modal === ModalEnums.PRODUCTS && <Shopping id={id}/>}
            </Modal>
        </div>
    );
}

export default Reel;