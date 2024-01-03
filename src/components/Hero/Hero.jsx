import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import lady from '../../images/lady.jpg';

function Hero(){
    
    return(
        <>
        <div className="flex flex-col space-y-16 md:flex-row md:justify-between py-16 px-10">
            <div className='flex flex-col space-y-5'>
                <h3>NEW ARRIVALS ONLY!</h3>
                <h1 className='text-2xl md:text-6xl font-bold'>New collections <br></br> for everyone</h1>
                <button className='bg-red-600 items-center flex flex-row space-x-0 rounded-3xl p-3 w-3/5 md:w-2/4 text-white'><div className='mx-auto'>Latest Collections</div> <div className=''><BsArrowRight /></div> </button>

            </div>
            <img src={lady} alt="" width="400" height="400" />

        </div>
        </>
    )
}

export default Hero;