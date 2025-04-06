import React from 'react'
import Footer from '../components/Footer'

const UKbridges = () => {
  return (
    <>
    
    <div className="container" >
        <div className="row display-1 text-center mt-2" data-aos="fade-up" data-aos-duration="1000">
  <h1 className="mt-5"><b>BRIDGES OF UNITED KINGDOM</b></h1>
</div>
<div className="row   mt-5">
  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-up" data-aos-duration="1000">
    <div className="row">
      <h2><b>FAMOUS BRIDGES</b></h2>
    </div>
    <div className="row">
      <p>These famous bridges of UK's not only serve as vital transportation links but also stand as enduring symbols of
        the country's rich cultural heritage and architectural excellence. Each bridge tells a unique story and offers
        visitors a glimpse into UK's storied past and vibrant present. hese famous bridges of UK's not only serve as
        essential transportation links but also embody the rich history, culture. Each bridge has its own unique charm
        and significance, contributing to the beauty and allure of UK's architectural landscape.</p>
      <a href='/ukfamousbridge'> <button id="explore" className="mb-2">Explore More</button></a>
    </div>
  </div>
  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 famouscol" data-aos="fade-up" data-aos-duration="1000">
    <img src="bridge7.jpg" alt=""/>
  </div>
</div>
</div>

<div className="container">
  <div className="row mt-5 ">
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 famouscol" data-aos="fade-up" data-aos-duration="1000">
      <img src="UKbridge.jpg" alt=""/>
    </div>
    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-up" data-aos-duration="1000">
      <br />
      <div className="row">
        <h2><b>OLDEST BRIDGES</b></h2>
      </div>
      <div className="row">
        <p>The United Kingdom boasts a rich history of bridge construction, with several ancient structures dating back
          centuries. Among the oldest bridges in the UK is the Old Dee Bridge in Chester, believed to have origins
          dating back to the 12th century. This historic stone bridge spans the River Dee and continues to serve as a
          vital transportation link in the heart of the city.
          </p>
        <a href='/ukoldbridge'> <button id="explore" className="mb-2">Explore More</button></a>

      </div>

    </div>
  </div>
</div>
<div className="container" >
<div className="row   mt-5">
<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-up" data-aos-duration="1000">
<div className="row">
<h2><b>LONGEST BRIDGES</b></h2>
</div>
<div className="row">
<p>There are significant structures that span large distances and play crucial roles in transportation and connectivity within the UK. Among these, the Humber Bridge stands out as one of the longest suspension bridges in the world, with a total length of approximately 2.22 kilometers (1.38 miles). Spanning the Humber Estuary and connecting Kingston upon Hull with the East Riding of Yorkshire, this engineering marvel serves as a vital link for commuters and freight traffic in the region.</p>
<a href='/uklongbridge'> <button id="explore" className="mb-2">Explore More</button></a>
</div>
</div>
<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 famouscol" data-aos="fade-up" data-aos-duration="1000">
<img src="uklongst1.jpg" alt=""/>
</div>
</div>
</div>

<Footer/>
</>
  )
}

export default UKbridges