import generateReels from "../../fakers/generateReels";
import { faker } from '@faker-js/faker';

import delay from "./delay";

let totalGeneratedCount = 0;

const newReels=(count)=>{
    const reels=[];
    for(let i=0;i<count;i++){
        reels.push(generateReels())
    }
    totalGeneratedCount+=count
    return {totalCount:60,reels,nextPageToken:totalGeneratedCount >=60?null:faker.string.uuid()};
}

const newReelsFromTag=(tags)=>{
    const reels=[];
    const totalTags = tags.length*4;
    for(let i=0;i<totalTags;i++){
        reels.push(generateReels())
    }
   
    return {reels};
}


const delayedReels = delay(newReels,200);
const delayedReelsFromTag = delay(newReelsFromTag,200);


function fetchAsyncReels({count}){
    console.log(`Fetching ${count} more reels, total count will be ${totalGeneratedCount+count}`)
    return delayedReels(count).then((data)=>data)
}

export function fetchAsyncReelsFromTag(tags){
    console.log(`Fetching ${tags} more reels from tag`)
    return delayedReelsFromTag(tags).then((data)=>data)
}

export default fetchAsyncReels
