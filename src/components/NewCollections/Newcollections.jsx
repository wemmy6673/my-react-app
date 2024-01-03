import React from 'react';
import newCollections from '../Newcollections';
import Items from '../Items/Items';

function Newcollections(){
    return(
        <>
        <div className='pt-20'>
            <h1 className='font-bold text-2xl pl-10 py-10'>NEW COLLECTIONS</h1>
            <div className="flex flex-col space-y-6 space-x-0 md:space-y-0 md:space-x-6 px-10 pb-20 md:flex-row">
                {newCollections.map((item, i)=>{
                    return(
                        <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    )

                })}

            </div>

            <div className="flex flex-col space-y-6 space-x-0 md:space-y-0 md:space-x-6 px-10 pb-20 md:flex-row">
                {newCollections.map((item, i)=>{
                    return(
                        <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    )

                })}

            </div>

        </div>
        </>
    )
}

export default Newcollections;