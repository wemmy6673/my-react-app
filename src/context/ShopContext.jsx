import React, {createContext, useState} from "react";
import Category from '../components/Category';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) =>{

        
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (itemId) =>{

        const newItem = Category.filter(eachCat => eachCat.id === itemId);
       
        if( cartItems.find((v)=> v.id === itemId) ){


            return
        }

        else{
            
            const newCart = [...cartItems, ...newItem]
            
             setCartItems(newCart);
            
        }
        
        
    }
    
    const removeFromCart = (itemId) =>{

        
        const filteredCart = cartItems.filter(item => item.id !== itemId);

        setCartItems(filteredCart);
    
    }

    const getTotalCartAmount = (itemPrice) => {

        // for (const item in cartItems){

        //     if(cartItems[item] > 0){
        //         let itemInfo = Category.find((product)=>product.id===Number(item))
        //         totalAmount += itemInfo.new_price * cartItems[item];

        //     }
            
        // }
        let cost = 0;

        cartItems.forEach(item=> cost += item.new_price)


        return cost;
        

    }

    const getTotalCartItems = () => {
        

        return cartItems.length;

    }
    
    const contextValue = {getTotalCartItems, getTotalCartAmount, Category, cartItems, addToCart, removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;