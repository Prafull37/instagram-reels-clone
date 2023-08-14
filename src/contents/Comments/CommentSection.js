import React, { useState,memo, useCallback } from 'react'
import style from './style.css'
import { AiOutlineSend } from 'react-icons/ai';
import { useGetReelsQuery } from '../../queries/reels';

function Comment(props){
    const {user,comment} = props;
    return <div className={style.comment}>
        <div className={style.commentHeader}>
            <div className={style.commentUserName}>{user}</div>
        </div>
        <div className={style.commentValue}>
          {comment}
        </div>
    </div>
}


function CommentSection(props){
    const {onSend,id} = props;
    const [newComment,setComment]= useState("");

    const {data:comments=[]} = useGetReelsQuery({
        select:useCallback((data)=>{
            const reel = data.reels.filter(({id:reelId})=>reelId === id);
            return reel.comments;
        },[id]),
        enabled:false
    })

    const onCommentChange=(e)=>{
        setComment(e.target.value)
    }

    const onSendComment=()=>{
        onSend(newComment);
        setComment("")
    }

    return <div className={style.comentSection}>
        <div className={style.allCommentSection}>
            {comments.map((comment)=>(<Comment {...comment}/>))}
        </div>
        <div className={style.commentAddSection}>
            <input type="text" value={newComment} onChange={onCommentChange}/>
            <div className={style.commentSend} onClick={onSendComment}><AiOutlineSend/></div>
        </div>
    </div>
}

export default memo(CommentSection);


