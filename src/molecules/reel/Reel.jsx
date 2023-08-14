import React,{useCallback, useRef, useState} from 'react';

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
import RelatedVideo from '../../contents/RelatedVideos/RelatedVideos';

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


function Reel(){
    const [modal,setModal] = useState("");
    const videoRef = useRef()
    
    const onModalClose = useCallback(()=>{setModal("")},[])
    const onModalOpen = useCallback((modalName)=>{setModal(modalName)},[])



    return(
            <div className={style.reelsContainer} data-test="r">
                
                <div className={style.videoContainer} data-test="s">
                    <Video src={"https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"} ref={videoRef} />
                </div>
                <div className={style.iconContainer} data-test='ic'>
                    <Icons
                        activeIcon={ <AiOutlineLike className={classNames(style.icons,style.active)}/>}
                        normalIcon={<AiFillLike className={style.icons}/>}
                        iconText={"likes"}
                    />
                    <Icons
                        activeIcon={   <FaCommentDots className={classNames(style.icons,style.active)}/>}
                        normalIcon={<FaRegCommentDots className={style.icons}/>}
                        iconText={"comments"}
                        onClick={()=>onModalOpen(ModalEnums.COMMENT)}
                    />
                    <Icons
                        activeIcon={  <BiShare className={classNames(style.icons,style.active)}/> }
                        normalIcon={<BiSolidShare className={style.icons}/>}
                        iconText={"Share"}
                    />
                    <Icons
                        activeIcon={  <AiOutlineShopping className={style.icons}/>}
                        normalIcon={<AiOutlineShopping className={style.icons}/>}
                        iconText={"Shoppoinig"}
                        onClick={()=>onModalOpen(ModalEnums.PRODUCTS)}

                    />
                    <Icons
                        activeIcon={ <BiSolidVideos className={style.icons}/>}
                        normalIcon={ <BiSolidVideos className={style.icons}/>}
                        iconText={"Solid videos"}
                        onClick={()=>onModalOpen(ModalEnums.RELATED_VIDEOS)}
                    />
                        
                </div>
                <Modal
                    title={ModalEnums_vs_Title[modal]}
                    onModalClose={onModalClose}
                    open={!!modal}
                >
                    <RelatedVideo/>
                </Modal>
            </div>
    );
}

export default Reel;