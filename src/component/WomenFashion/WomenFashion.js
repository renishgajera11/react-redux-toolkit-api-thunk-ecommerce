import React from 'react'
import '../Productlist/ProductList.css'
import { useEffect } from 'react';
import { addwishItem } from '../../app/slice/WishListSlice';
import { addItem } from '../../app/slice/cartSlice';
import { useDispatch , useSelector } from 'react-redux';
import SwiperBanner from '../Swiper/SwiperBanner';
import { readApi } from '../../app/slice/apiSlice';
import ContactUs from '../ContactUs/ContactUs';
import { Button } from '@mui/material';
import Header from '../Header/Header';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



const WomenFashion = () => {

    const dispatch = useDispatch()
    const { WishlistItems } = useSelector((state) => state.wish);
    const { cartItems } = useSelector((state) => state.cart);
    const {data , loading} = useSelector((state) => state.api)

    const activeHandler = (ele) => {
        dispatch(addwishItem(ele))
        
    }   

    const cartHandler = (ele) =>{
        dispatch(addItem(ele))
    }
    useEffect(() =>{
        dispatch(readApi());
    },[])

  return (
    <div>

    <Header/>

        <SwiperBanner/>

          <div className='productlist'>

              <div className='product-heading'><h2>Women fashion</h2></div>

              <div className='product-container row'>

                  { loading? (<Box className='loading' sx={{ display: 'flex' }}> <CircularProgress /> </Box>):
                      data.filter(element=>element.category == "women's clothing").map((element) => {
                          return (


                              <div className='product-card col-lg-4'>

                                  <span className='icon' onClick={() => activeHandler(element)}>
                                      {WishlistItems.some((i) => i.id === element.id) ? (<i className="fa-solid fa-heart red" />) : (<i className="fa-regular fa-heart red" />)}
                                  </span>
                                  <div className='product-img'><img src={element.image} /></div>
                                  <div className='d-flex justify-content-between px-2'>

                                      <div className='product-price'> <span>₹ {element.price}</span></div>
                                      <div className='product-rating'> <span className='rate'>{element.rate}</span> ({element.count})</div>

                                  </div>
                                  <div className='product-title mt-3' >
                                      <span data-coreui-toggle="tooltip" data-coreui-placement="top" title={element.title}>{element.title}</span>
                                  </div>

                                  {cartItems.some((i) => i.id === element.id) ? <div className='add-to-cart'><Button variant="contained" className='add-to-cart-btn' onClick={() => cartHandler(element)}>
                                      Added</Button></div> :
                                      <div className='add-to-cart'><Button variant="contained" className='add-to-cart-btn' onClick={() => cartHandler(element)}>
                                          Add to Cart</Button></div>
                                  }

                              </div>

                          )
                      })
                  }

              </div>

          </div>

          <ContactUs/>
      
    </div>
  )
}

export default WomenFashion