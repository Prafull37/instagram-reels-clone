import React,{useCallback, useEffect, useRef, useState} from 'react';
import useIntersectionObeserver from '../../hooks/useIntersectionObserver';


function InfiniteScroll(props){
    const {parentRef,fetchNextPage,doesObserve,children,...restProps}= props;
    const childRef = useRef();
    let isVisible=false

    const {startObserving,stopObserving} = useIntersectionObeserver({
            rootElement:parentRef.current,
            callback:useCallback((...args)=>{
               const [IntersectionObserverEntry] = args;
               const observerDetails = IntersectionObserverEntry[0];
               if(observerDetails.isIntersecting && !isVisible){
                fetchNextPage()
                isVisible=true;
               }
            },[fetchNextPage]),
            doesObserve:doesObserve
        })

    useEffect(()=>{
        if(!!childRef.current){
            startObserving(childRef.current)
        }
        return ()=>stopObserving(childRef.current)
    },[])

    if(!doesObserve) return <div {...restProps}>{children}</div>;

    return (<div ref={childRef} {...restProps}>{children}</div>)
}

export default InfiniteScroll