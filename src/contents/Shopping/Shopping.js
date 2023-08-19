import React ,{memo} from 'react';
import { BiLinkExternal} from 'react-icons/bi'

import style from './style.css'
import { useProductsFromTagQuery } from '../../queries/reels';
import { useSelector } from '../../store/storeContext';


function Product(props){

    const {name,image,external_link,price} = props;
    
    return <div className={style.productContainer}>
        <a className={style.externalLink} href={external_link} target="_blank">
            <BiLinkExternal/>
        </a>
        <div className={style.imageContainer} >
            <img src={image}  alt={name}/>
        </div>
        <div className={style.productDescription}> 
            <div>{name}</div>
            <div>{price}</div>
        </div>
    </div>
}

function ProductList(props){
    const {id} = props;

    const tags = useSelector((state)=>{
            const reel = state.reels.find(({id:reelId})=>reelId === id);
            return reel.tags;
    }) || [];


    const {data=[]} = useProductsFromTagQuery(tags,{enabled:tags.length>0,select:(data)=>data.products});


    return <div className={style.products}>
       {data.map((product)=> <Product key={product.id} {...product}/>)}
    </div>
}



export default memo(ProductList);