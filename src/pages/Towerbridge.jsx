import React from 'react'
import Footer from '../components/Footer'

const Towerbridge = () => {
  return (
    <>
    
    <div className="container">
    <div className="row text-center mt-3 "  data-aos="fade-up" data-aos-duration="1000">
        <h1>TOWER BRIDGE</h1>
        <p> An iconic symbol of London, England</p>
        <center>
        <div className=" row towerbridgerow">
            <img src="towerbridge.png" alt=""/>
        </div>
    </center>
    </div>
</div>
<hr/>
<div className="container mt-4 ">
    <div className="row text-center  " data-aos="fade-up" data-aos-duration="1000">
        <h1> London's Architectural Jewel</h1>
    </div>
</div>
<div className="container mt-4 ">
    <div className="row " data-aos="fade-up" data-aos-duration="1000">
       <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 towerbridgeimg2">
        <img src="bridge7.jpg" alt=""/>
       </div>
       <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 millaubtn">
        <p>Tower Bridge, an iconic symbol of London, stands majestically over the River Thames, connecting the bustling areas of Tower Hamlets and Southwark. Constructed between 1886 and 1894, Tower Bridge represents a remarkable feat of Victorian engineering, blending practicality with architectural splendor.
            <br/><br/>
            Designed by Sir Horace Jones and Sir John Wolfe Barry, the bridge features a distinctive bascule and suspension design, allowing it to open and accommodate river traffic. Its two towers, adorned with ornate details, rise proudly above the water, connected by elevated walkways offering panoramic views of the city.
            <br/>
            <br/> <a href="assets/wordfiles/tower bridge.docx"><button >Download History</button></a>
        </p>
       </div>
    </div>
</div>

<Footer/>
    </>
  )
}

export default Towerbridge