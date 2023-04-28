import React from 'react'
import './ContactUs.css'
import customerSupport from '../../Images/customer-support.jpg'

const ContactUs = () => {

  

   
  return (
    <div className='contactus'>

        <div className="container">

        <div className='text-center'><div className='contactus-heading'><h2>Contact Us</h2></div></div>

        <div className="row justify-content-center contactus-content">

            <div className="col-lg-6 col-md-12 col-sm-12">

                <div className="founder-detail aos-init aos-animate" data-aos="slide-right">

                    <div className="d-flex founder">

                        <img src={customerSupport} alt="" />
                        <div className="my-auto mx-3">
                            <p className="lh-sm white text-uppercase fs-4 fw-semibold">customer support</p>
                            <p className="lh-sm white text-capitalize fw-semibold">Open 24/7</p>
                        </div>

                    </div>

                    <div className="company-email my-4">

                        <div className="my-auto lh-1 me-2 "><i className="fa-solid fa-envelope email fs-3"></i></div>
                        <div className="my-auto lh-base mx-3 get-in-touch-box">
                            <p className="text-uppercase fw-semibold">email</p>
                            <p className="fw-semibold ">info@purchase.com</p>
                        </div>

                    </div>

                    <div className="company-call my-4 ">

                        <div className="my-auto  lh-1 me-2 "><i className="fa-solid fa-phone fs-3 call"></i></div>
                        <div className="my-auto lh-base mx-3 get-in-touch-box">
                            <p className="text-uppercase fw-semibold">call or WhatsApp</p>
                            <p className="fw-semibold ">(+91) 992 452 3136</p>
                        </div>

                    </div>

                    <div className="company-skype my-4">

                        <div className="my-auto  lh-1 me-2 "><i className="fa-brands fa-skype fs-3 skype"></i></div>
                        <div className="my-auto lh-base mx-3 get-in-touch-box">
                            <p className="text-uppercase fw-semibold">skype</p>
                            <p className="fw-semibold ">purchase.company</p>
                        </div>

                    </div>

                </div>

            
            </div>

            <div className="col-lg-5 col-md-12 col-sm-12">
            
                <form className="get-in-touch-from white mt-md-4 aos-init" data-aos="slide-left" >

                    <div className="name-section">

                        <label className="form-label fw-semibold">Your Name<sup className="fw-semibold">*</sup></label>
                        <input type="text" className="form-control rounded-pill fw-medium placeholder-text" placeholder="Enter your name" />
            
                    </div>
                
                    <div className="email-section">

                        <label className="form-label fw-semibold">Email Address<sup className="fw-semibold">*</sup></label>
                        <input type="email" className="form-control rounded-pill fw-medium placeholder-text " placeholder="Enter your email" />

                    </div>

                    <div className="phone-section">

                        <label className="form-label fw-semibold">Phone Number<sup className="fw-semibold">*</sup></label>
                        <input type="text" className="form-control rounded-pill fw-medium placeholder-text" placeholder="Enter phone number" />

                    </div>
            
                    <div className="message-section">
            
                        <label className="form-label fw-semibold">Message<sup className="fw-semibold">*</sup></label>
                        <textarea className="form-control placeholder-text rounded-4" placeholder="Enter your message" id="exampleFormControlTextarea1" rows="4"></textarea>
            
                    </div>
            
                    <div className="enquiry-button">
            
                        <button type="submit" className="btn get-in-touch-btn rounded-pill w-100 placeholder-text white" >Send Your
                            Enquiry <i className="fa-solid fa-angle-right"></i></button>
            
                    </div>
            
            
                </form>
            
            </div>

        </div>

        </div>
      
    </div>
  )
}

export default ContactUs
