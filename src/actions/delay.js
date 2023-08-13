const delay = (callback,ms) =>(...args)=> new Promise(resolve => {
    setTimeout(()=>{
       const value= callback(...args);
       resolve(value)
    }, ms)
});

export default delay