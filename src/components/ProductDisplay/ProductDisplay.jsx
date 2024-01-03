import React, { useContext } from 'react';
import { BsStar } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf} from "react-icons/bs";
import { ShopContext } from '../../context/ShopContext';

function ProductDisplay(props){
    const {product} = props;
    const {addtoCart} = useContext(ShopContext);
    return(
        <>
        <div className='flex flex-col md:flex-row md:space-x-8 justify-start'>
                

                <div className= " max-w-[600px]">
                    <img src={product.image} alt="" className=''/>

                </div>

            <div className='flex flex-col space-y-6  w-full'>
                <h1 className='text-3xl'>{product.name}</h1>
                <div className='flex flex-row'>
                    <div className='text-yellow-400'><BsStarFill /></div>
                    <div className='text-yellow-400'><BsStarFill /></div>
                    <div className='text-yellow-400'><BsStarFill /></div>
                    <div className='text-yellow-400'><BsStarHalf /></div>
                    <div className='text-yellow-400'><BsStar /></div>

                </div>
                <div className=''><strike>${product.old_price}</strike> ${product.new_price}
                </div>

                <div className='text-gray-600 text-sm'>
                    <p>A light-weight usually knitted blouse, wine colored, soft and silky and pretty much affordable</p>

                </div>

                <h1>Select Sizes</h1>

                <div className='flex flex-row space-x-2'>
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                    <button>XXL</button>


                </div>

                <div className=''>
                    <button className='bg-red-600 text-white p-3' onClick={()=>{addtoCart(product.id)}}>Add to cart</button>

                </div>
            </div>
        </div>
        </>
    )
}

export default ProductDisplay;