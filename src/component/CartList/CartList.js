import React from 'react'
import './CartList.css'
import { removeItem, incrementItem, decrementItem } from '../../app/slice/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import ContactUs from '../ContactUs/ContactUs';

const CartList = () => {

  const dispatch = useDispatch()
  const { cartItems, loading } = useSelector((state) => state.cart);

  console.log(cartItems);

  const removeHandler = (id) => {
    dispatch(removeItem(id))
  }

  const handleIncrement = (itemId) => {
    dispatch(incrementItem(itemId));  
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementItem(itemId));
  };

  const cartTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  return (

    <>

      {loading ? (<div className='loading'>please wait... </div>) : (
        <>
          <div className='cartlist'>

            <div className='container p-0' >

              {
                cartItems.length === 0 ? (

                  <div className='cartlist-empty'>
                    <h1>Your Cart is Empty</h1>
                  </div>

                ) : (

                  <div className='cartlist-content-box d-flex'>

                    <div className='cartlist-container'>

                      {

                        cartItems.map((element) => {

                          const itemTotal = element.price * element.quantity;

                          return (

                            <>

                              <div>

                                <div className='cartlist-card' key={element.id}>

                                  <div className='close-button'><i className="fa-solid fa-xmark" onClick={() => removeHandler(element.id)}></i></div>
                                  <div className='cartlist-img'><img src={element.image} /></div>

                                  <div className='cartlist-content'>

                                    <div className='cartlist-title'><h5 data-coreui-toggle="tooltip" data-coreui-placement="top" title={element.title}>{element.title}</h5></div>

                                    <div className='cartlist-discription'><span data-coreui-toggle="tooltip" data-coreui-placement="top" title={element.description}>{element.description}</span></div>

                                    <div className='d-flex'>
                                      <div className='cartlist-price me-2'><h6>₹ {itemTotal}</h6></div>
                                      <div className='cartlist-rating'><span>{element.rate}</span>({element.count})</div>
                                    </div>

                                    <div className='d-flex'>

                                      <div className='cartlist-button'><Button variant="contained" className='add-quantity' onClick={() => handleDecrement(element.id)}>-</Button></div>
                                      <div className='cartlist-button'><p>{element.quantity}</p></div>
                                      <div className='cartlist-button'><Button variant="contained" className='remove-quantity' onClick={() => handleIncrement(element.id)}>+</Button></div>
                                      {/* <div className='cartlist-button'><Button variant="contained" sx={{ backgroundColor: "red" }} onClick={()=>handleDecrement(element.id)}>Remove Quantity</Button></div> */}
                                    </div>

                                  </div>

                                </div>


                              </div>



                            </>

                          )
                        })
                      }




                    </div>

                    <div className='cart-header'>

                      <h4 className='fw-bold'>Order Summery ({cartItems.length} Items)</h4>


                      <div className='total-price'><h5>Total price</h5><h5 >₹ {cartTotal}</h5></div>
                      <div className='delivery'><h5>Delivery</h5><h5 style={{ color: '#1dd10c' }}>free</h5></div>
                      <hr></hr>
                      <Button variant='contained' className="fw-medium">Check Out</Button>

                    </div>

                  </div>


                )


              }
            </div>

            <ContactUs />

          </div>
        </>
      )}

    </>
  )
}

export default CartList
