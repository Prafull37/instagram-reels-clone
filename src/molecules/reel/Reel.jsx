import React,{useRef} from 'react';

import classNames from 'classnames';
import Video from "../../components/video/Video";
import { AiOutlineLike,AiFillLike, AiOutlineShopping,AiFillShopping} from "react-icons/ai";
import {FaRegCommentDots,FaCommentDots} from 'react-icons/fa'
import {BiSolidShare,BiShare,BiSolidVideos} from 'react-icons/bi'



import style from './style.css'
import IconModals from '../../components/IconModals/IconModals';

function Reel(){
    const ref=useRef();

    return(
            <div className={style.reelsContainer} data-test="r">
                
                <div className={style.videoContainer} data-test="s">
                    <Video src={"https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"} ref={ref} />
                </div>
                <div className={style.iconContainer} data-test='ic'>
                    <IconModals
                        activeIcon={ <AiOutlineLike className={classNames(style.icons,style.active)}/>}
                        normalIcon={<AiFillLike className={style.icons}/>}
                        iconText={"likes"}
                        modalTitle="modal"
                        doesShowModal={false}
                    >
                        Some Random Text
                    </IconModals>
                    <IconModals
                        activeIcon={   <FaCommentDots className={classNames(style.icons,style.active)}/>}
                        normalIcon={<FaRegCommentDots className={style.icons}/>}
                        iconText={"comments"}
                        modalTitle="Comments"
                        doesShowModal={true}
                    >
                        Some Random Text
                    </IconModals>
                    <IconModals
                        activeIcon={  <BiShare className={classNames(style.icons,style.active)}/> }
                        normalIcon={<BiSolidShare className={style.icons}/>}
                        iconText={"Share"}
                        modalTitle="share"
                        doesShowModal={true}
                    >
                        Some share Text
                    </IconModals>
                    <IconModals
                        activeIcon={  <AiOutlineShopping className={style.icons}/>}
                        normalIcon={<AiOutlineShopping className={style.icons}/>}
                        iconText={"Shoppoinig"}
                        modalTitle="shippog"
                        doesShowModal={true}
                    >
                        Some shoppong Text
                    </IconModals>
                    <IconModals
                        activeIcon={ <BiSolidVideos className={style.icons}/>}
                        normalIcon={ <BiSolidVideos className={style.icons}/>}
                        iconText={"Solid videos"}
                        modalTitle="Solid vides"
                        doesShowModal={true}
                    >
                        Some Random Text
                    </IconModals> 
                </div>
            </div>
    );
}

export default Reel;