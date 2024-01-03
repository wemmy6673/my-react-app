import React from 'react';
import productData from '../data';
import Items from '../Items/Items';

function Popular(){
    return(
        <>
        <div className='flex flex-col'>
            <h1 className='text-2xl font-bold py-10 px-10'>Popular in Women</h1>
            

            <div className="flex flex-col space-y-6 space-x-0 md:space-y-0 md:space-x-6 px-10 pb-20 md:flex-row">
                {productData.map((item, i)=>{
                    return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}

            </div>

        </div>
        </>
    )
}

export default Popular;