import React from 'react'

const Banner = () => {
  return (
    <>
      <div className="container-fluid bannercontainer">
    <div className="row">
      <h1 className="bannerheading" data-aos="fade-up" data-aos-duration="1000">AMAZING BRIDGES <br/> ACROSS THE WORLD</h1>
      <p className="text-light" data-aos="fade-up" data-aos-duration="1000">Discover the extraordinary with Amazing Bridges
        <br/> your ultimate destination for
        architectural marvels. Explore iconic structures that <br/> redefine connectivity and inspire wonder.
        Join us
        on a journey across the globe's most breathtaking bridges.
      </p>
      <center><a className='btn btn-banner' data-aos='fade-up' href='/ukbridges'>Get Started &rarr;</a></center>
    </div>
  </div>
    </>
  )
}

export default Banner