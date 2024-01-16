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
            <div className='flex flex-row justify-between'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>

            </div>

            <hr />

           {cartItems.map((e) => {
                    
                return <div key={e.id} className=''>
                <img src={e.image} alt="" />
                <p>${e.new_price}</p>
                <button>
                    {e.id}
                </button>
                <p>{e.new_price}</p>
                <BsX onClick={()=>{removeFromCart(e.id)}}/>


               </div>

                }
                )
            }
            

        </div>
        </>
    )
}



export default CartItems;