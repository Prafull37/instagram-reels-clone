export const identity=(data)=>data;

export const noop=()=>{};

export function debounce(fn,delay){
    let timerId;
    return function (...args){
        clearTimeout(timerId);
        timerId=setTimeout(()=>{
            fn(...args)
        },delay)
    }
}