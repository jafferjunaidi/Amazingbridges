import React from 'react'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
    
    <div className="container paddingforcon">
    <h1 className="text-center mt-5 " data-aos="fade-up" data-aos-duration="1000">Contact Us</h1>
    <p className="text-center" data-aos="fade-up" data-aos-duration="1000">Have a question about a bridge, want to share a story, or perhaps collaborate on a project?
      We'd love to hear from you! Our team is passionate about bridges and eager to connect with fellow enthusiasts,
      researchers and adventurers. </p>
  </div>
  <div className="container formcontainer">
    <div className="row"  data-aos="fade-up" data-aos-duration="1000">
      <div className="col">
      <form action=""  id="contactForm">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Name</label>
          <input type="text" className="form-control" id="username" placeholder="Enter your name" pattern="[a-zA-Z\s]{3,20}" title="Name Must Be Between 3 to 20 characters | Alphabets Only" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email address"  required/>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="3" placeholder="Enter your message" required></textarea>
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-famousbridge">Submit</button>
        </div>
      </form>
      </div>
      <div className="col infosection">
      <br /><br />
        <div className="emailinfo">
          <i className="fa-solid fa-envelope"></i>
          <h6 className="m-2">info@amazingbridges.com</h6>
        </div>
        <div className="emailinfo">
          <i className="fa-solid fa-phone"></i>
          <h6 className="m-2">+447896985694</h6>
        </div>
        <div className="emailinfo">
          <i className="fa-solid fa-location-dot"></i>
          <h6 className="m-2">New York Street #  37, New Orleans, USA</h6>
        </div>
      </div>
    </div>
  </div>

<Footer/>
    </>
  )
}

export default Contact