import React, {useContext} from 'react';
import { ShopContext } from '../../context/ShopContext';
import { BsChevronDown } from "react-icons/bs";
import Items from '../Items/Items';



function ShopCategory(props){
    const {Category} = useContext(ShopContext);
    return(
        <>
        <div className='py-10 md:px-10 flex flex-col md:flex-row md:justify-between'>
            <div>
                <h1 className='text-4xl md:text-6xl text-red-600 font-extrabold'>Flat 50% Off</h1>
                <p className='text-xl md:text-2xl'><span className='text-red-600'>12</span> Hours<span className='text-red-600'>20</span> Minutes</p>

            </div>
            <img src={props.banner} alt="" width="500" height="500" />
            

        </div>

        <div className=''>
                <p>
                    <span className='text-red-600'>Showing 1-12</span> out of 36 products
                </p>

                <div className='flex flex-row justify-between'>
                    Sort by <BsChevronDown />


                </div>

                <div className='flex flex-col space-y-6 space-x-0 md:space-y-0 md:space-x-6 px-10 pb-20 md:flex-row'>
                    {Category.map((item, i)=>{
                        if(props.category === item.category){

                            return <Items key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />

                        }
                        else{
                            return null;
                        }

                    })}

                </div>

            </div>
        </>
    )
}

export default ShopCategory;