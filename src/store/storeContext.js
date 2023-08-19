import React,{ createContext,useReducer,useMemo, useContext } from "react";
import reducer,{initialState} from "./reducer";
import { identity } from "../utils/utils";

const StoreContext = createContext();


function StoreProvider(props){
    const [state,dispatch]= useReducer(reducer,initialState);

    const value = useMemo(()=>({state,dispatch}),[state,dispatch])

    return <StoreContext.Provider value={value}>
        {props.children}
    </StoreContext.Provider>
}


export const useSelector=(callback=identity)=>{
    const {state} = useContext(StoreContext);
    return callback(state)
}

export const useDispatch=()=>{
    const {dispatch} = useContext(StoreContext);
    return dispatch
}




export default StoreProvider