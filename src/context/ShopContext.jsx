import React, {createContext, useState} from "react";
import Category from '../components/Category';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) =>{

    
    

    const getDefaultCart = () =>{
        let cart ={};

        for (let index = 0; index < Category.length+1; index++) {
            cart[index] = 0;
            
        }
        return cart;
    }
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const contextValue = {Category, cartItems, addToCart, removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;