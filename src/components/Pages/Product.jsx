import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import Category from '../Category';
import Description from '../Description/Description';
import Related from '../Related/Related';



function Product(){

    const {productId} = useParams();
    const product = Category.find((e)=> e.id === Number(productId))
    return(
        
       <>
        <div className='flex flex-col space-y-6 px-10 py-10'>
           <Breadcrumbs product={product} />
           <ProductDisplay product={product} />
           <Description />
           <Related />

        </div>
        </>
    )
}

export default Product;