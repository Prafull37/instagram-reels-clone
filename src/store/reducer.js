// import { createSlice } from "@reduxjs/toolkit";

export const initialState={
    reels:[]
}

const reducer=(state,action)=>{
    const {type,payload}= action;

    switch(type){
        case "INIT_REELS":{
           return {...state,reels:[...state.reels,...action.payload.reels]}
        }
        case "UPDATE_LIKES":{
            const updatedReels= state.reels.map((reel)=>{
                if(reel.id ===action.payload.id){
                    const {isAlreadyLiked=false,likes}= reel;
                    return {
                        ...reel,
                        isAlreadyLiked:!isAlreadyLiked,
                        likes:isAlreadyLiked?likes-1:likes+1
                    }
                }
                return reel;    
            });

            return {...state,reels:updatedReels}
        }
        case "ADD_COMMENT":{
            const updatedReels= state.reels.map((reel)=>{
                if(reel.id ===action.payload.id){
                    const {isAlreadyLiked=false,likes}= reel;
                    return {
                        ...reel,
                        comments:[...reel.comments,action.payload.comment]
                    }
                }
                return reel;    
            });

            return {...state,reels:updatedReels}
        }
        default:
            return state;
    }
}


export const initializeReels=(reels)=>{
    return {
        type:"INIT_REELS",
        payload:{
            ...reels
        }
    }
}

export const updateLike=(args)=>{
    return {
        type:"UPDATE_LIKES",
        payload:{
            ...args
        }
    }
}

export const addComment=(args)=>{
    return {
        type:"ADD_COMMENT",
        payload:{
            ...args
        }
    }
}

export default reducer;