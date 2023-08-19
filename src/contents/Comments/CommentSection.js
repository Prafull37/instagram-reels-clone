import React, { useState,memo } from 'react'
import style from './style.css'
import { AiOutlineSend } from 'react-icons/ai';
import { addComment } from '../../store/reducer';
import { useDispatch,useSelector } from '../../store/storeContext';

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
    const {id,username} = props;
    const [newComment,setComment]= useState("");
    const dispatch = useDispatch();

    const comments = useSelector((state)=>{
            const reel = state.reels.find(({id:reelId})=>reelId === id);
            return reel.comments;
        }
    ) ||[];

    const onCommentChange=(e)=>{
        setComment(e.target.value)
    }

    const onSendComment=()=>{
        dispatch(addComment({id,comment:{id:Date.now().toString("16"),user:username,comment:newComment}}));
        setComment("")
    }

    return <div className={style.comentSection}>
        <div className={style.allCommentSection}>
            {comments.map((comment)=>(<Comment key={comment.id} {...comment}/>))}
        </div>
        <div className={style.commentAddSection}>
            <input type="text" value={newComment} onChange={onCommentChange}/>
            <div className={style.commentSend} onClick={onSendComment}><AiOutlineSend/></div>
        </div>
    </div>
}

export default memo(CommentSection);


