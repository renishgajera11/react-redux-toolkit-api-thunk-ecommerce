import React from 'react'
import './Services.css'
import serviceImg1 from '../../Images/free-shiping-icon.png'
import serviceImg2 from '../../Images/support-icon.png'
import serviceImg3 from '../../Images/money-return-img.png'
import { Zoom } from 'react-awesome-reveal'
import { Slide } from 'react-awesome-reveal'

const Services = () => {
  return (
    <div className='services-bg' id="Stats-output">   

       <div className='container'>

            <div className='services'>

            <Slide cascade damping={0.1}>

                <div className='service-card'>

                    <div className='service-card-img'><img src={serviceImg1}/></div>
                    <div className='service-card-heading'><h5>Free Shipping</h5></div>
                    <div className='service-card-subheading w-75'><h6>We offer Free Shipping on cart value Rs. 1000 or above</h6></div>

                </div>

                </Slide>

                

                <div className='service-card'>

                    <div className='service-card-img'><img src={serviceImg2} /></div>
                    <div className='service-card-heading'><h5>Support 24/7</h5></div>
                    <div className='service-card-subheading w-75'><h6>We give 24/7 customer support service to our valuable customers</h6></div>

                </div>

                <div className='service-card'>

                    <div className='service-card-img'><img src={serviceImg3} /></div>
                    <div className='service-card-heading'><h5>Money Return</h5></div>
                    <div className='service-card-subheading w-75'><h6>We offer 100% money back gurrenty within 7 Days of order days</h6></div>

                </div>

            </div>

       </div>
      
    </div>
  )
}

export default Services
