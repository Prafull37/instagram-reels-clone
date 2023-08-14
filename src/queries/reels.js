import {useInfiniteQuery, useQuery} from 'react-query'
import fetchAsyncReels, { fetchAsyncReelsFromTag } from '../actions/fetchReels'
import fetchAsyncProducts from '../actions/fetchProducts';

const queryKeys={
    all:['reels'],
    reels:(payload)=>[...queryKeys.all,payload],
    tags:(tagList)=>[...queryKeys.reels(),tagList],
    reelFromTags:(tagList)=>[...queryKeys.tags(tagList),'reels']
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


function useProductsFromTagQuery(tags,options){
   return useQuery(queryKeys.tags(tags),()=>{
            console.log("Invoking Product API call...")
         return fetchAsyncProducts(tags)
    },{
        ...options
    })
}

function useReelsFromTagQuery(tags,options){
    return useQuery(queryKeys.reelFromTags(tags),()=>{
             console.log("Invoking reels  API from call...")
          return fetchAsyncReelsFromTag(tags)
     },{
         ...options
     })
}

export { useGetReelsQuery,useProductsFromTagQuery,useReelsFromTagQuery};
