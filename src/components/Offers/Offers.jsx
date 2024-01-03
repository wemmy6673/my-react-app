import React from 'react';
import Ian from '../../images/ian.jpg';

function Offers(){
    return(
        <>
        <div className='flex flex-col space-y-6 md:flex-row container md:justify-between mx-auto bg-pink-200 p-20'>
            <div className='flex flex-col space-y-2 justify-center'>
                <h1 className='font-bold text-2xl md:text-5xl'>Exclusive</h1>
                <h1 className='font-bold text-2xl md:text-5xl'>Offers For You</h1>
                <h1 className=''>ONLY ON BESTSELLER'S PRODUCTS</h1>

                <button className='bg-red-600 text-white rounded-full pointer py-4 w-3/5'>Check Now</button>

            </div>

            <div>
            <img src={Ian} alt="" width="500" height="500" className=''/>
            </div>

        </div>
        </>
    )
}

export default Offers;