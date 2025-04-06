import React from 'react'
import Footer from '../components/Footer'

const Feedback = () => {
  return (
    <>
    
  <div className="container paddingforcon">
    <h1 className="text-center mt-5 display-3 " data-aos="fade-up" data-aos-duration="1000">Give Your Feedback</h1>
    <p className="text-center" data-aos="fade-up" data-aos-duration="1000">We value your opinion! Your feedback helps us improve our website and provide you with a
      better experience. Please take a moment to share your thoughts with us. we strive to create the best possible
      experience for our visitors. </p>
  </div>
  <div className="container formcontainer">
    <div className="row" data-aos="fade-up" data-aos-duration="1000">
      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <form action="" id="feedbackForm"/>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Name</label>
            <input type="text" className="form-control" id="username" placeholder="Enter your name" pattern="[a-zA-Z\s]{3,20}" title="Name Must Be Between 3 to 20 characters | Alphabets Only" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email address" pattern="^[^0-9].*@.*\..*$" required/>
          </div>
  
      </div>
      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
  
        <div className="mb-3">
          <label htmlFor="Phone" className="form-label">Phone</label>
          <input type="number" className="form-control" id="phonenumber" placeholder="Enter your phone number" required/>
        </div>
        <div className="mb-3 radio">
          <p className="feedbackpara"><i className="fa-regular fa-face-laugh me-2"></i>Are you satisfied by our services?</p>
          <input type="radio" name="check" id="yes"/>
          <label htmlFor="yes">Yes</label><br/>
  
          <input type="radio" name="check" id="no"/>
          <label htmlFor="no">No</label><br/>
        </div>
      </div>
    </div>
    <div className="mb-3" data-aos="fade-up" data-aos-duration="1000">
      <button type="submit" className="btn btn-famousbridge">Submit</button>
    </div>
    
    <form/>
  </div>
 <br /><br /><br />
<Footer/>
    </>
  )
}

export default Feedback