import { StrictMode } from 'react';
import { CreateRoot } from  'react-dom/client';
import Navbar from './components/navbar/Navbar';
import { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './components/Pages/Shop';
import ShopCategory from './components/Pages/ShopCategory';
import Product from './components/Pages/Product';
import Cart from './components/Pages/Cart';
import Login from './components/Pages/Login';
import Footer from './components/Footer/Footer';
import Man from './images/hunter.png';
import Woman from './images/ianr.png';
import ShopContextProvider from './context/ShopContext';



function App(){

  return(
    <ShopContextProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory category="men" banner={Man}/>}/>
        <Route path='/women' element={<ShopCategory category="women" banner={Woman}/>}/>
        <Route path='/kids' element={<ShopCategory category="kids"/>}/>
        <Route path='/product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </ShopContextProvider>
  )

  
}

export default App;