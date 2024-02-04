import React from 'react';
import Category from '../Category';
import { BsX } from "react-icons/bs";
import { ShopContext } from '../../context/ShopContext';
import { useContext } from 'react';

function CartItems(){

    const {category, cartItems, removeFromCart} = useContext(ShopContext)
    
    return(
        <>
        <div className='px-10 py-20'>
            <div className='grid grid-cols-6 gap-6'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>

            </div>

            <hr />

           {cartItems.map((e) => {

            if([e.id] > 0){

            
                    
                return <div className='grid grid-cols-6 gap-6 py-7'>
                <img src={e.image} alt="" height={100} width={100} className=''/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='border border-gray-300 rounded-md w-6 h-6 '>
                     {cartItems[e.id]}
                </button>
                 <p>{e.new_price*cartItems[e.id]}</p>
                <BsX onClick={()=>{removeFromCart(e.id)}}/>


               </div>

                }
            }
                )
            }
            

        </div>
        </>
    )
}



export default CartItems;