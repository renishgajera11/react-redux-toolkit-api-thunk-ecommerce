import React from 'react'
import './Header.css'
import {Link, useNavigate} from 'react-router-dom';
import ProductList from '../Productlist/ProductList';
import MenFashion from '../MenFashion/MenFashion';
import WomenFashion from '../WomenFashion/WomenFashion'
import Jwellery from '../Jwellery/Jwellery';
import Electronics from '../Electronics/Electronics';
import { useDispatch, useSelector } from 'react-redux';
import WishList from '../WishList/WishList';
import CartList from '../CartList/CartList';
import AdminPanel from '../Admin/AdminPanel';
import { removeItem } from '../../app/slice/loginSlice';




const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { WishlistItems } = useSelector((state) => state.wish);
    const { cartItems } = useSelector((state) => state.cart);
    const { loginData} = useSelector((state) =>state.login)

    console.log(loginData[0][0].name);

    const wishQuantity = WishlistItems.length;
    const cartQuantity = cartItems.length;

    const logOutHandler = () =>{
        dispatch(removeItem())
        navigate('/login')
    }

      

  return (
    <div>

              <nav className="navbar navbar-expand-lg">

                  <div className="container-fluid">

                      <span className='logo ms-5'><p>Purchase.com</p></span>


                      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>


                      <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                          <div className="offcanvas-header">
                              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Purchase.com</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                          </div>

                          <div className="offcanvas-body menu">

                              <ul className="navbar-nav ms-auto me-5">

                                  <li className="nav-item mx-4">
                                      <Link to="/" className="nav-link menu-item" href="#"><b>Home</b></Link>
                                  </li>


                                  <li className="nav-item dropdown mx-4">

                                      <Link  className="nav-link menu-item dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <b>Collections</b>
                                      </Link>

                                      <ul className="dropdown-menu">
                                          <li><Link to="/menfashion" className="dropdown-item my-2" href="#">Men Fashion</Link></li>
                                          <li><Link to="/womenfashion" className="dropdown-item my-2" href="#">Women Fashion</Link></li>
                                          <li><Link to="/jwellery" className="dropdown-item my-2" href="#">Jwellery</Link></li>
                                          <li><Link to="/electronics" className="dropdown-item my-2" href="#">Electronics</Link></li>
                                      </ul>
                                  </li>

                                  <li className="nav-item mx-4">
                                      <Link  className="nav-link menu-item" href="#"><b>Contact Us</b></Link>
                                  </li>

                                  <li className="nav-item dropdown mx-4">
                                      <Link  className="nav-link menu-item" role='button' data-bs-toggle="dropdown" aria-expanded="false" href="#" ><b>Hi, {loginData[0][0].name}</b></Link>

                                      <ul className="dropdown-menu">
                                          <li><Link to="/admin" className="dropdown-item my-2" href="#">Admin Pannel</Link></li>
                                          <li><Link  to='/login' className="dropdown-item my-2" href="#" onClick={logOutHandler}>logout</Link></li>
                                          {/* <li><Link to="/jwellery" className="dropdown-item my-2" href="#">Jwellery</Link></li>
                                          <li><Link to="/electronics" className="dropdown-item my-2" href="#">Electronics</Link></li>  */}
                                      </ul>
                                  </li>

                                  <li className="nav-item">

                                      <Link to='/wishlist' className='mx-3 heart-icon'>
                                          <i className="fa-solid fa-heart heart"></i>
                                          <span className='heartCount'>{wishQuantity}</span>
                                      </Link>

                                      <Link to='/cartlist' className='mx-3 cart-icon'>
                                          <i className="fa-solid fa-cart-shopping cart"></i>
                                          <span className='cartCount'>{cartQuantity}</span>
                                      </Link>

                                  </li>


                              </ul>

                          </div>

                      </div>

                  </div>

              </nav>


            
             


       
    </div>
  )
}

export default Header
