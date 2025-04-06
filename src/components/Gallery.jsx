import React from 'react'

const Gallery = () => {
  return (
    <>
    
  <div className="container-fluid mt-4">
    <h1 className="text-center elevateh1" data-aos="fade-up" data-aos-duration="1000">Elevate Your Knowledge</h1>
    <p className="text-center" data-aos="fade-up" data-aos-duration="1000">Explore Famous Bridges Of the Earth!</p>
    <div className="row elevateknowlegderow">
      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <center>
          <div className="famousbridge1 mb-2" data-aos="fade-up" id="chain">
            <h3>Chain Bridge</h3>
            <a className='btn btn-famousbridge' href='/chainbridge'>View More</a>
          </div>
        </center>
      </div>
      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <center>
          <div className="famousbridge2" data-aos="fade-up" id="tower">
            <h3>Tower Bridge</h3>
            <a className='btn btn-famousbridge' href='/towerbridge'>View More</a>
          </div>
        </center>
      </div>
    </div>
  </div>

  <div className="container-fluid text-center mt-4 p-4 ">
    <h1 data-aos="fade-up" data-aos-duration="1000">Bridge With A Guinness World Record </h1>
    <p data-aos="fade-up" data-aos-duration="1000">The Millau Viaduct Bridge in millau holds the Guinness World Record
      as the <br/>longest bridge in the world,
      spanning an astonishing 164.8 kilometers (102.4 miles).</p>
    <div className="container-fluid guinness mt-3 text-light" data-aos="zoom-in-right">
      <h1>Millau Viaduct </h1>
      <p>Millau viaduct holds the world record for the tallest bridge,The Millau Viaduct,<br/> an architectural
        masterpiece located in southern France, spans the Tarn Valley near the town of Millau. <br/> Designed by the
        renowned architect Norman Foster and structural engineer Michel Virlogeux,<br/> this cable-stayed bridge holds
        the title of the tallest in the world. <br/> </p>
      <a className='btn btn-famousbridge' href='/millauviaductbridge'>View More</a>
    </div>
  </div>


  <div className="container-fluid mt-3">
    <div className="row ">
      <div className="col display-3 text-center " id="gallery">
        <h1 data-aos="fade-up" data-aos-duration="1000">Gallery</h1>
      </div>
    </div>
    <div className="row text-center ">
      <p data-aos="fade-up" data-aos-duration="1000">Explore Iconic Bridges Around the Globe</p>
    </div>
  </div>



  <div className="container-fluid">
    <center>
      <div className="row sliderimg mt-3 ">
        <div className="col-md-4 col-sm-6 col-12">
          <div className="card" style={{width: "18rem"}} data-aos="fade-up" data-aos-duration="1000">
            <div className="galleryimg">
              <img src="bridge11.jpg" className="card-img-top image-fluid" alt="..."/>
            </div>
            <div className="card-body">
              <p className="card-text">GOLDEN GATE BRIDGE</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-12">
          <div className="card" style={{width: "18rem"}} data-aos="fade-up" data-aos-duration="1000">
            <div className="galleryimg">
              <img src="bridge4.jpg" className="card-img-top" alt="..."/>
            </div>
            <div className="card-body">
              <p className="card-text">CHAPEL BRIDGE</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-12">
          <div className="card" style={{width: "18rem"}} data-aos="fade-up" data-aos-duration="1000">
            <div className="galleryimg">
              <img src="bridge8.jpg" className="card-img-top" alt="..."/>
            </div>
            <div className="card-body">
              <p className="card-text">CHAIN BRIDGE</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-12">
          <div className="card" style={{width: "18rem"}} data-aos="fade-up" data-aos-duration="1000">
            <div className="galleryimg">
              <img src="bridge2.jpg" className="card-img-top" alt="..."/>
            </div>
            <div className="card-body">
              <p className="card-text">SUSPENSION BRIDGE</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-12">
          <div className="card" style={{width: "18rem"}} data-aos="fade-up" data-aos-duration="1000">
            <div className="galleryimg">
              <img src="bridge7.jpg" className="card-img-top" alt="..."/>
            </div>
            <div className="card-body">
              <p className="card-text">TOWER BRIDGE</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-12">
          <div className="card" style={{width: "18rem"}} data-aos="fade-up" data-aos-duration="1000">
            <div className="galleryimg">
              <img src="bridge6.jpg" className="card-img-top" alt="..."/>
            </div>
            <div className="card-body">
              <p className="card-text">HARBOUR BRIDGE</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-12">
          <div className="card" style={{width: "18rem"}} data-aos="fade-up" data-aos-duration="1000">
            <div className="galleryimg">
              <img src="bridge3.jpg" className="card-img-top" alt="..."/>
            </div>
            <div className="card-body">
              <p className="card-text">HELIX BRIDGE</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 col-12">
          <div className="card" style={{width: "18rem"}} data-aos="fade-up" data-aos-duration="1000">
            <div className="galleryimg">
              <img src="bridge12.png" className="card-img-top" alt="..."/>
            </div>
            <div className="card-body">
              <p className="card-text">MILLAU VIADUCT BRIDGE</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 col-12">
          <div className="card" style={{width: "18rem"}} data-aos="fade-up" data-aos-duration="1000">
            <div className="galleryimg">
              <img src="bridge10.jpeg" className="card-img-top" alt="..."/>
            </div>
            <div className="card-body">
              <p className="card-text">ROYAL BRIDGE</p>
            </div>
          </div>
        </div>
      </div>
    </center>
  </div>




  <div className="container-fluid mt-5 px-5">
    <div className="row"  data-aos="fade-up" data-aos-duration="1000">
      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 beijing mb-4">
        <img src="Chinabridge5.jpg" className="img-fluid" alt=""/>
      </div>
      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <h1>Beijing Grand Bridge</h1>
        <p>The Beijing Grand Bridge, also known as the Beijing–Tianjin Intercity Railway, stands as a monumental feat of
          modern engineering in China. Stretching over 48 kilometers (30 miles), it is recognized as one of the longest
          bridges in the world, connecting the bustling metropolises of Beijing and Tianjin. This impressive structure
          spans across diverse terrains, including rivers, highways, and urban areas, showcasing innovative design and
          construction techniques. Completed in 2010, the bridge serves as a vital link in China's high-speed rail
          network, facilitating rapid transit between two major economic hubs and significantly reducing travel time for
          commuters and travelers alike impressive feat of engineering, stretching 48.15 kilometers (29.92 miles). It is a railway viaduct on the Beijing–Shanghai High-Speed Railway, located in Beijing, China. Completed in 2010 and opened in 2011, it is one of the longest bridges in the world
          Part of China’s high-speed rail network, facilitating rapid transit between Beijing and Shanghai  A viaduct structure, built to traverse diverse terrain efficiently
          Completed in 2011 alongside other major bridges on the Beijing–Shanghai line, specific engineering details are less documented Danyang Kunshan Bridge.
          </p>
      </div>
    </div>
  </div>

    </>
  )
}

export default Gallery