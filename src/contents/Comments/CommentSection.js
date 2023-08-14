import React, { useState } from 'react'
import style from './style.css'
import { AiOutlineSend } from 'react-icons/ai';

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
    const {onSend,comments} = props;
    const [newComment,setComment]= useState("");

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

export default CommentSection;


