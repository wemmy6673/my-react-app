import React, {createContext, useState} from "react";
import Category from '../components/Category';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) =>{

    
    

    // const getDefaultCart = () =>{
    //     let cart ={};

    //     for (let index = 0; index < Category.length+1; index++) {
    //         cart[index] = 0;
            
    //     }
    //     return cart;
    // }

    // console.log(" category", Category)
    // const [cartItems, setCartItems] = useState(getDefaultCart())
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (itemId) =>{

        const newItem = Category.filter(eachCat => eachCat.id === itemId);
        
        const newCart = [...cartItems, ...newItem]
        
        setCartItems(newCart)

        if(itemId < 2){

            
            console.log(newCart);
            
        }
        
        
    }
    
    const removeFromCart = (itemId) =>{

        
        const filteredCart = cartItems.filter(item => item.id !== itemId);

        setCartItems(filteredCart);
    
    }
    
    const contextValue = {Category, cartItems, addToCart, removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;