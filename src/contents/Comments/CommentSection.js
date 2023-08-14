import React, { useState } from 'react'
import style from './style.css'
import { AiOutlineSend } from 'react-icons/ai';

function Comments(){
    return <div className={style.comment}>
        <div className={style.commentHeader}>
            <div className={style.commentUserName}>John Doe</div>
        </div>
        <div className={style.commentValue}>
            This is the commentss...
        </div>
    </div>
}


function CommentSection(props){
    const {onSend} = props;
    const [comment,setComment]= useState("");

    const onCommentChange=(e)=>{
        setComment(e.target.value)
    }

    const onSendComment=()=>{
        onSend(comment);
        setComment("")
    }

    return <div className={style.comentSection}>
        <div className={style.allCommentSection}>
             <Comments/>
             <Comments/>
             <Comments/>
             <Comments/>
             <Comments/>
             <Comments/>
             <Comments/>
             <Comments/>
             <Comments/>
             <Comments/>
        </div>
        <div className={style.commentAddSection}>
            <input type="text" value={comment} onChange={onCommentChange}/>
            <div className={style.commentSend} onClick={onSendComment}><AiOutlineSend/></div>
        </div>
    </div>
}

export default CommentSection;


