import React from 'react'
import Footer from '../components/Footer'
const About = () => {
  
  return (
    <>
    
    <div className="  aboutcon" data-aos="fade-up" data-aos-duration="1000">
        <h1 className="text-center display-1" data-aos="fade-up" data-aos-duration="1000">About Us</h1>
        <p className="text-center" data-aos="fade-up" data-aos-duration="1000">Welcome to Amazing Bridges, your ultimate guide to the most iconic and breathtaking
            bridges around the globe.</p>
    </div>
    <div className="container p-3 aboutmodel">
        <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-up" data-aos-duration="1000">
                <img src="men.png" className="img-fluid" alt="" />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-up" data-aos-duration="1000">
                <h3>Hey I'm</h3>
                <h1 className="fw-bold">Jaffer Junaidi</h1>
                <p>Welcome to Amazing Bridges, founded by the visionary bridge engineer, Jaffer Junaidi. With a passion for
                    creating iconic structures that connect people and places, Jaffer Junaidi has built famous bridges across the
                    globe. Amazing Bridges is his platform to share the stories and marvels of these architectural
                    wonders. From the Golden Gate Bridge to the Tower Bridge, each structure reflects Jaffer Junaidi's dedication
                    to excellence collection of the world's most famous bridges, where every span tells a tale of
                    ingenuity and human achievement. Join us as we celebrate the beauty and significance of these
                    remarkable feats of engineering. Thank you for being part of the Amazing Bridges community.</p>
            </div>
        </div>
    </div>

    <div className="container-fluid mt-3">
        <div className="row ">
            <div className="col display-3 text-center " id="gallery" data-aos="fade-up" data-aos-duration="1000">
                <h1>Achievements</h1>
            </div>
        </div>
        <div className="row text-center " data-aos="fade-up" data-aos-duration="1000">
            <p>Jaffer Junaidi achievements in bridge engineering have reshaped skylines and connected communities worldwide
            </p>
        </div>
    </div>

    <div className="container-fluid">
        <center>
            <div className="row sliderimg mt-3" data-aos="fade-up" data-aos-duration="1000">
                <div className="col">
                    <div className="card" style={{width: '18rem'}}>
                        <div className="galleryimg">
                            <img src="bridge11.jpg" className="card-img-top image-fluid" alt="..."/>
                        </div>
                        <div className="card-body">
                            <p className="card-text">GOLDEN GATE BRIDGE</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: '18rem'}}>
                        <div className="galleryimg">
                            <img src="bridge4.jpg" className="card-img-top" alt="..."/>
                        </div>
                        <div className="card-body">
                            <p className="card-text">CHAPEL BRIDGE</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: '18rem'}}>
                        <div className="galleryimg">
                            <img src="bridge8.jpg" className="card-img-top" alt="..."/>
                        </div>
                        <div className="card-body">
                            <p className="card-text">CHAIN BRIDGE</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: '18rem'}}>
                        <div className="galleryimg">
                            <img src="bridge2.jpg" className="card-img-top" alt="..."/>
                        </div>
                        <div className="card-body">
                            <p className="card-text">SUSPENSION BRIDGE</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: '18rem'}}>
                        <div className="galleryimg">
                            <img src="bridge7.jpg" className="card-img-top" alt="..."/>
                        </div>
                        <div className="card-body">
                            <p className="card-text">TOWER BRIDGE</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: '18rem'}}>
                        <div className="galleryimg">
                            <img src="bridge6.jpg" className="card-img-top" alt="..."/>
                        </div>
                        <div className="card-body">
                            <p className="card-text">HARBOUR BRIDGE</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: '18rem'}}>
                        <div className="galleryimg">
                            <img src="bridge3.jpg" className="card-img-top" alt="..."/>
                        </div>
                        <div className="card-body">
                            <p className="card-text">HELIX BRIDGE</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: '18rem'}}>
                        <div className="galleryimg">
                            <img src="uklongst1.jpg" className="card-img-top" alt="..."/>
                        </div>
                        <div className="card-body">
                            <p className="card-text">HELON BRIDGE</p>
                        </div>
                    </div>
                </div>

            </div>
        </center>
    </div>



    <Footer/>
    </>
  )
}

export default About