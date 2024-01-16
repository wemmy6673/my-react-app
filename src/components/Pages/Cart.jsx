import React from 'react';

import { ShopContext } from '../../context/ShopContext';
import { useContext } from 'react';
import CartItems from './CartItems';

function Cart(){


     const {category , removeFromCart,} = useContext(ShopContext);

    return(
        <>
        <div>
            <CartItems />

        </div>
        </>
    )
}

export default Cart;