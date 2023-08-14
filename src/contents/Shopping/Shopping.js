import React from 'react';
import { BiLinkExternal} from 'react-icons/bi'

import style from './style.css'


function Product(props){
    const {tags} = props;

    return <div className={style.productContainer}>
        <a className={style.externalLink} href='https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fproduct&psig=AOvVaw1go2xIWMQFniZlRfpRr7BQ&ust=1692107251653000&source=images&cd=vfe&opi=89978449&ved=0CAQQjB1qFwoTCKCrhO6k3IADFQAAAAAdAAAAABAE' target="_blank">
            <BiLinkExternal/>
        </a>
        <div className={style.imageContainer} >
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80"  alt="product text"/>
        </div>
        <div className={style.productDescription}> 
            <div>Headphone</div>
            <div>200</div>
        </div>
    </div>
}

function ProductList(props){
    const {tags} = props;
    return <div className={style.products}>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
    </div>
}



export default ProductList;