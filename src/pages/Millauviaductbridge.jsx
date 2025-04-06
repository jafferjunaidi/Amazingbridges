import React from 'react'
import Footer from '../components/Footer'

const Millauviaductbridge = () => {
  return (
    <>
   
   <div className="container">
    <div className="row text-center mt-3"  data-aos="fade-up" data-aos-duration="1000">
        <h1>Millau Viaduct</h1>
        <p className="text-center">Guinness World Record Holder</p>
    </div>
</div>
<div className="container">
    <div className="row"  data-aos="fade-up" data-aos-duration="1000">
     <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <p><i className="fa-solid fa-calendar-days"></i> Today In History</p>
        <h1>Millau Viaduct was made 20 Year's Ago!</h1>
        <p>The Millau Viaduct is a cable-stayed bridge that spans the Tarn Valley in southern France. Construction of the bridge began in October 2001 and it was officially opened to traffic on December 16, 2004. Designed by the French structural engineer Michel Virlogeux and British architect Norman Foster, the Millau Viaduct is renowned for its innovative design and is one of the tallest bridges in the world.As of March 2024, the Millau Viaduct has been operational for nearly 20 years. It opened to traffic on December 16, 2004. Therefore, it has been approximately 19 years and a few months since its inauguration.</p>
     </div>
     <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <div className="row"  data-aos="fade-up" data-aos-duration="1000">
        <div className="mb-3 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 millauimg">
            <img src="bridge12.png" alt=""/>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 millauimg ">
            <img src="millau-viaduct2.jpg" alt=""/>
        </div>
    </div>
        <div className="row mt-3 millauimg2"  data-aos="fade-up" data-aos-duration="1000">
            <img src="millau-viaduct.jpg" alt=""/>
        </div>
     </div>
    </div>
    <div className="row millaubtn ">
        <a href="assets/wordfiles/millau.docx"><button>Download History</button></a>
    </div>
</div>

<Footer/>

    </>
  )
}

export default Millauviaductbridge