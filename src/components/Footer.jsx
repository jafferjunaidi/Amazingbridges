import React from 'react'

const Footer = () => {
  return (
    <>
  <div className="container-fluid footercon mt-5">
    <div className="row footer quicklinks">
      <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 footerlogo">
        <img
          src="bridgelogo.png"
          alt=""
          className="image-fluid "
        /><br />
      </div>
      <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 quicklinks mt-5">
        <h2>Quick Links</h2>
        <br />
        <a href='/'><p>Home</p></a> 
        <a href='/#gallery'><p>Gallery</p></a> 
        <a href='/travelwithus'><p>Travel With Us</p></a>
        <a href='/feedback'><p>Feedback</p></a>
        <a href='/about'><p>About</p></a> 
        <a href='/contact'><p>Contact</p></a> 
        {/* <a href='/queries'><p>Queries</p></a>  */}
      </div>
      <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 mt-5">
        <h2>Bridges</h2>
        <br />
        <a href='/pakistanbridges'><p>Pakistan Bridges</p></a> 
        <a href='/chinabridges'><p>China Bridges</p></a> 
        <a href='/ukbridges'><p>United Kingdom Bridges</p></a>
        <a href='/towerbridge'><p>Tower Bridge</p></a>
        <a href='/chainbridge'><p>Chain Bridge</p></a>
        <a href='/millauviaductbridge'><p>Millau Viaduct Bridge</p></a>
      </div>
      <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-12 col-sm-12 mt-5">
        <h2>Connect With Us</h2>
        <br />

        <div className="footercontact">
        <a href="mailto:contact@amazingbridges.com"><p><i className="fa-solid fa-envelope"></i>
          contact@amazingbridges.com</p></a>
        </div>

        <div className="footercontact">
         <a href="mailto:info@amazingbridges.com"><p><i className="fa-solid fa-envelope"></i>
          info@amazingbridges.com</p></a>
        </div>

        <div className="footercontact">
         <p> <i className="fa-solid fa-phone"></i>
         +447896985691</p>
        </div>

        <div className="footercontact">
         <p> <i className="fa-solid fa-phone"></i>
         +447111244621</p>
        </div>

        <div className="footercontact">
         <p> <i className="fa-solid fa-location-dot"></i>
         New York Street # 37, New Orleans, USA</p>
        </div>
      </div>
      <hr className="mt-3" />
      <p style={{alignItems:'center', textAlign:'center'}}>© 2025 Amazing Bridges | All Rights Reserved</p>
    </div>                                                       
  </div>
    
    </>
  )
}

export default Footer