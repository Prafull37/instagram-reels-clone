import { useCallback,useMemo,useRef } from "react";


function useIntersectionObeserver(props){
    const {rootElement,callback,doesObserve} = props;
    const observerRef = useRef();
    const targetElementRef = useRef();

    const observerOptions = {
        root: rootElement,
        rootMargin: "32px",
        threshold: 1,
    };

    observerRef.current = new IntersectionObserver(useCallback((...args)=>{
        callback(...args)
    },[callback]), observerOptions);

    const startObserving= useCallback((elementToObserve)=>{
        targetElementRef.current=elementToObserve
        if(!rootElement || !targetElementRef.current || !doesObserve) return;

        observerRef.current.observe(targetElementRef.current);
    },[rootElement,doesObserve])

    const stopObserving = useCallback((elementToObserve)=>{
        if(elementToObserve || targetElementRef.current){
            observerRef.current.unobserve(elementToObserve || targetElementRef.current);
        }
    },[])

    const disconnectObserver=useCallback(()=>{
         observerRef.current.disconnect()
    },[])

    return useMemo(()=>({
        startObserving,
        stopObserving,
        disconnectObserver
    }),[startObserving,startObserving,disconnectObserver])

}

export default useIntersectionObeserver;