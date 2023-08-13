import {useInfiniteQuery} from 'react-query'
import fetchAsyncReels from '../actions/fetchReels'

const queryKeys={
    all:['reels'],
    reels:(payload)=>[...queryKeys.all,payload]
}

const MAX_COUNT = 5;
const defaultPageParam ={count:MAX_COUNT}

function useGetReelsQuery(options){
    const results= useInfiniteQuery({
       queryKey: queryKeys.reels(),
       queryFn:({pageParam=defaultPageParam})=>{
        console.log("Invoking API call...")
         return fetchAsyncReels(pageParam)
        },
        select:(data)=>{
            const {pages=[]}=data;
            const totalCount = pages[0].totalCount;
            const allReels = pages.reduce((acc,{reels})=>{
                return [...acc,...reels];
            },[])
            return {totalCount,reels:allReels,reelCounts:allReels.length,pages,pageCount:pages.length}
        },
       getNextPageParam:(lastPage,allPages)=>{
        return lastPage.nextPageToken!==null ? {count:MAX_COUNT} :undefined
       },
    }
    );
    return results;
}
export { useGetReelsQuery};
