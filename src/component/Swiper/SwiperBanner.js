import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper';
import sliderImg1 from '../../Images/slider-img-1.png';
import sliderImg2 from '../../Images/sider-img-2.png';
import sliderImg3 from '../../Images/slider-img-3.png';
import sliderImg4 from '../../Images/slider-img-4.png';
import Services from '../Services/Services';
import './SwiperBanner.css';
import "swiper/swiper-bundle.css";
import { useNavigate } from 'react-router-dom';



const SwiperBanner = () => {

    const navigate = useNavigate();

  return (
    <div>

          <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{
                  delay: 2500,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: true
              }}
          >

              <SwiperSlide>

                  <div className='slider1'>
                      <div className='slider1-img'>
                          <img src={sliderImg1} />
                      </div>
                      <div className='slider1-content'>

                          <div className='slider1-content-header'>
                              <div className='line'><hr></hr></div>
                              <div className='slider-heading'><h3>Stylish</h3></div>
                              <div className='line'><hr></hr></div>
                          </div>

                          <div className='slider-main-heading'>
                              <h1>Male Clothes</h1>
                          </div>

                          <div className='slider-subheading'>
                              <h5>30% off Summer Vacation</h5>
                          </div>

                          <div className='slider-button'>
                              <button onClick={()=>navigate('/menfashion')}>Shop Now</button>
                          </div>

                      </div>
                  </div>

              </SwiperSlide>

              <SwiperSlide>

                  <div className='slider2'>

                      <div className='slider1-content'>

                          <div className='slider1-content-header'>
                              <div className='line'><hr></hr></div>
                              <div className='slider-heading'><h3>Stylish</h3></div>
                              <div className='line'><hr></hr></div>
                          </div>

                          <div className='slider-main-heading'>
                              <h1>Female Clothes</h1>
                          </div>

                          <div className='slider-subheading'>
                              <h5>30% off Summer Vacation</h5>
                          </div>

                          <div className='slider-button'>
                              <button onClick={()=>navigate('/womenfashion')}>Shop Now</button>
                          </div>

                      </div>

                      <div className='slider-img'>
                          <img src={sliderImg2} />
                      </div>
                  </div>

              </SwiperSlide>

              <SwiperSlide>

                  <div className='slider3'>

                      <div className='slider1-img'>
                          <img src={sliderImg3} />
                      </div>

                      <div className='slider1-content'>

                          <div className='slider1-content-header'>
                              <div className='line'><hr></hr></div>
                              <div className='slider-heading'><h3>Stylish</h3></div>
                              <div className='line'><hr></hr></div>
                          </div>

                          <div className='slider-main-heading'>
                              <h1>Jwellery Collections</h1>
                          </div>

                          <div className='slider-subheading'>
                              <h5>30% off Summer Vacation</h5>
                          </div>

                          <div className='slider-button'>
                              <button onClick={()=>navigate('/jwellery')}>Shop Now</button>
                          </div>

                      </div>

                  </div>

              </SwiperSlide>

              <SwiperSlide>

                  <div className='slider4'>


                      <div className='slider1-content'>

                          <div className='slider1-content-header'>
                              <div className='line'><hr></hr></div>
                              <div className='slider-heading'><h3>Best</h3></div>
                              <div className='line'><hr></hr></div>
                          </div>

                          <div className='slider-main-heading'>
                              <h1>Electronic Items</h1>
                          </div>

                          <div className='slider-subheading'>
                              <h5>30% off Summer Vacation</h5>
                          </div>

                          <div className='slider-button'>
                              <button onClick={()=>navigate('/electronics')}>Shop Now</button>
                          </div>

                      </div>

                      <div className='slider1-img'>
                          <img src={sliderImg4} />
                      </div>
                  </div>

              </SwiperSlide>


          </Swiper>

            <Services/>
      
    </div>
  )
}

export default SwiperBanner
