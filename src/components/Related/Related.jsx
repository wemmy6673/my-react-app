import React from 'react';
import productData   from '../data';
import Items from '../Items/Items';

function Related(){
    
    return(
        <>
        <div className='py-10'>
            <h1 className='text-center py-10 text-2xl'>Related Products</h1>
            

            <div className='flex flex-col space-y-6 space-x-0 md:space-y-0 md:space-x-6 px-10 pb-20 md:flex-row'>
                {productData.map((item, i)=>{
                    return <Items key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
                })}

            </div>
            

        </div>
        </>
    )
}

export default Related;