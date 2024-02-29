import React from 'react'; 
import sliklogo from '../../images/sliklogo.png';
import { BsCart } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import {useState} from 'react';
import {useContext} from 'react';
import {Link} from 'react-router-dom';
import {ShopContext} from '../../context/ShopContext';
import CartItems from '../Pages/CartItems';


function Navbar(){
    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    

    return(
        <>
        <div className="flex flex-row justify-between py-5 px-10">
            <img src={sliklogo} alt=""/>

            <ul className="hidden md:flex space-x-4 items-center">
                <li onClick={()=>{setMenu("shop")}}><Link to='./'>Shop</Link>{menu==="shop"?<div><hr className="bg-red-600 h-1 "></hr></div>:<></>}</li>
                <li onClick={()=>{setMenu("men")}}><Link to='./men'>Men</Link>{menu==="men"?<div><hr className="bg-red-600 h-1"></hr></div>:<></>}</li>
                <li onClick={()=>{setMenu("women")}}><Link to='./women'>Women</Link>{menu==="women"?<div><hr className="bg-red-600 h-1 "></hr></div>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link to='./kids'>Kids</Link>{menu==="kids"?<div><hr className="bg-red-600 h-1 "></hr></div>:<></>}</li>
            </ul>

            <div className="flex flex-row space-x-3 md:space-x-5 md:space-y-0">
                <Link to='./login'><button className="bg-red-600 text-white py-3 self-center px-3 rounded-md">Login</button></Link>

                <Link to='/cart'><div className="text-2xl relative hidden md:flex md:self-center">
                    <BsCart/>
                <div className="bg-red-600 text-white absolute left-4 bottom-2 text-xs rounded-full px-[6px] self-center py-[2px]">{getTotalCartItems()}</div>
                </div>
                </Link>
                <div className="text-red-600 text-3xl flex md:hidden self-center"><BsList/></div>


            </div>


        </div>
        </>
    )
}

export default Navbar;