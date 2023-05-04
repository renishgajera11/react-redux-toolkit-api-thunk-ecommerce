import React from 'react'
import './WishList.css'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../app/slice/cartSlice';
import { removeItem } from '../../app/slice/WishListSlice';
import { Button } from '@mui/material';
import { Delete } from '@mui/icons-material';
import ContactUs from '../ContactUs/ContactUs';
import Header from '../Header/Header';


const WishList = () => {
    const dispatch = useDispatch()
    const { WishlistItems } = useSelector((state) => state.wish);
    const { cartItems } = useSelector((state) => state.cart);

    const removeHandler = (id) =>{
            dispatch(removeItem(id))
    }

    const cartHandler = (ele) =>{
        dispatch(addItem(ele))
    }


  return (

    <>

    <Header/>
    
    <div className='wishlist'>

        <div className='container pt-3'>

        {
            WishlistItems.length === 0 ? (

                <div className='wishlist-empty'>
                    <h1>Your Wishlist is Empty</h1>
                </div>

            ) : (

            WishlistItems.map((element) =>(

            <div className='wishlist-card mt-5'>

                <div className='wishlist-img'><img src={element.image}/></div>

                <div className='wishlist-content'>

                    <div className='wishlist-title'><h5 data-coreui-toggle="tooltip" data-coreui-placement="top" title={element.title}>{element.title}</h5></div>

                    <div className='wishlist-discription'><span data-coreui-toggle="tooltip" data-coreui-placement="top" title={element.description}>{element.description}</span></div>

                    <div className='d-flex'>
                        <div className='wishlist-price me-2'><h6>₹ {element.price}</h6></div>
                        <div className='wishlist-rating'><span>{element.rate}</span>({element.count})</div>
                    </div>

                    <div className='d-flex'>
                            {cartItems.some((i) => i.id === element.id) ? <div className='add-to-cart me-2'><Button variant="contained" className='add-to-cart-btn' onClick={() => cartHandler(element)}>
                                Added</Button></div> :
                                <div className='add-to-cart me-2'><Button variant="contained" className='add-to-cart-btn' onClick={() => cartHandler(element)}>
                                    Add to Cart</Button></div>
                            }
                        <div className='wishlist-button'><Button variant="contained" className='remove-item' startIcon={<Delete />} onClick={()=>removeHandler(element.id)}>Remove Item</Button></div>
                    </div>

                </div>

            </div>

            ))
            )
        }



        </div>

        <ContactUs/>
      
    </div>

    </>
  )
}

export default WishList
