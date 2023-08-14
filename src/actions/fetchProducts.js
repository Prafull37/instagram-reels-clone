import delay from "./delay";
import generateProduct from "../../fakers/generateProdcts";


const newProducts=(tags)=>{
    console.log("tags",tags)
    const products=[];
    const totalTags = tags.length*4;

    for(let i=0;i<totalTags;i++){
       products.push(generateProduct())
    }
    return {products};
}

const delayedProducts = delay(newProducts,200);

function fetchAsyncProducts(tags){
    console.log(`Fetching products for ${tags}`)
    return delayedProducts(tags).then((data)=>data)
}

export default fetchAsyncProducts
