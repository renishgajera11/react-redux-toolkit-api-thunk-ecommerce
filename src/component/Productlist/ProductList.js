import React from 'react'
import './ProductList.css'
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { addwishItem } from '../../app/slice/WishListSlice';
import { addItem } from '../../app/slice/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { readApi } from '../../app/slice/apiSlice';
import SwiperBanner from '../Swiper/SwiperBanner';
import { Button } from '@mui/material';
import ContactUs from '../ContactUs/ContactUs';
import VanillaTilt from 'vanilla-tilt';

function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    return <div ref={tilt} {...rest} />;
}

const ProductList = () => {

    const dispatch = useDispatch()
    const { WishlistItems } = useSelector((state) => state.wish);
    const { cartItems } = useSelector((state) => state.cart);
    const { data, loading } = useSelector((state) => state.api)

    // console.log(data);

    // const [apiData, setapiData] = useState([]);
    // const [addedItem ,setAddedItem ] =useState(false)

    // console.log(apiData);


    // const get = async () => {
    //     await axios.get("https://641451f936020cecfda538c5.mockapi.io/products").then((r) => setapiData(r.data));
    // };


    const activeHandler = (ele) => {
        dispatch(addwishItem(ele))
    }

    const cartHandler = (ele) => {
        dispatch(addItem(ele))
    }

    // useEffect(() => {
    //     get();
    // }, []);

    const options = {
        scale: 1.2,
        speed: 1000,
        max: 30
    };

    useEffect(() => {
        dispatch(readApi());
    }, [])


    return (


        <>

            {loading ? (<div className='loading'>please wait... </div>) : (

                <>

                    <SwiperBanner />

                    <div className='productlist'>

                        <div className='product-heading'><h2>New Arrival</h2></div>

                        <div className='product-container row'>

                            {
                                data.map((element) => {
                                    return (


                                        <div className='product-card col-lg-4' key={element.id}>

                                            <span className='icon' onClick={() => activeHandler(element)}>
                                                {WishlistItems.some((i) => i.id === element.id) ? (<i className="fa-solid fa-heart red" />) : (<i className="fa-regular fa-heart red" />)}
                                            </span>
                                            <div className='product-img'><img src={window.location.origin + element.image} /></div>
                                            <div className='d-flex justify-content-between px-2'>

                                                <div className='product-price'> <span>₹ {element.price}</span></div>
                                                <div className='product-rating'> <span className='rate'>{element.rate}</span> ({element.count})</div>

                                            </div>
                                            <div className='product-title mt-3 px-2' >
                                                <span data-coreui-toggle="tooltip" data-coreui-placement="top" title={element.title}>{element.title}</span>
                                            </div>

                                            {/* <hr/> */}

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

                    <ContactUs />
                </>

            )}
        </>
    )
}

export default ProductList
