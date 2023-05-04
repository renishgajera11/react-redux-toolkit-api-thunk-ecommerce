import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import { Routes, Route } from 'react-router-dom';
import ContactUs from './component/ContactUs/ContactUs';
import ProductList from './component/Productlist/ProductList';
import MenFashion from './component/MenFashion/MenFashion';
import WomenFashion from './component/WomenFashion/WomenFashion';
import Jwellery from './component/Jwellery/Jwellery';
import Electronics from './component/Electronics/Electronics';
import WishList from './component/WishList/WishList';
import CartList from './component/CartList/CartList';
import AdminPanel from './component/Admin/AdminPanel';
import { useEffect } from 'react';
import Register from './component/Register/Register';
import Login from './component/Login/Login';

function App() {


  return (
    <div className="App">

      {/* <Header/> */}
      
      <Routes>
                  <Route path="/" element={<ProductList />} />
                  <Route path="/menfashion" element={<MenFashion/>} />/
                  <Route path="/womenfashion" element={<WomenFashion/>} />
                  <Route path="/jwellery" element={<Jwellery/>} />
                  <Route path="/electronics" element={<Electronics/>} />
                  <Route path="/wishlist" element={<WishList/>} />
                  <Route path="/cartlist" element={<CartList/>} />
                  <Route path="/admin" element={<AdminPanel/>} />
                  <Route path="/register" element={<Register/>} />
                  <Route path="/login" element={<Login/>} />
        </Routes>

        

    </div>
  );
}

export default App;
