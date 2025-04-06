import React from 'react'
import Footer from '../components/Footer'

const Chainbridge = () => {
  return (
    <>
    
    <div className="container">
    <div className="row text-center mt-3" data-aos="fade-up" data-aos-duration="1000">
        <h1>CHAIN BRIDGE</h1>
        <p>  A Historic Link Across the Danube</p>
        <center>

            <div className=" row towerbridgerow">
                <img src="chainbridge.jpg" alt=""/>
            </div>
        </center>
    </div>
</div>
<hr/>
<div className="container mt-4">
    <div className="row text-center" data-aos="fade-up" data-aos-duration="1000">
        <h1>  Budapest's Emblem of Unity and Elegance</h1>
    </div>
</div>
<div className="container mt-4 ">
    <div className="row" data-aos="fade-up" data-aos-duration="1000">
       <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 towerbridgeimg2">
        <img src="chainbridge2.png" alt="chain bridge" className="image-fluid"/>
       </div>
       <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mt-2 millaubtn">
        <p>The Chain Bridge, completed in 1849, was the first permanent bridge to connect the eastern and western sides of Budapest, uniting the hilly Buda district with the flat Pest side. It was designed by the English engineer William Tierney Clark and later modified by the Scottish engineer Adam Clark (no relation). The bridge was named after Count István Széchenyi, a key figure in Hungarian political and economic reform during the 19th century.
            <br/><br/>
            The bridge features a striking neoclassical design with massive stone pillars supporting ornate iron chains, from which the road deck is suspended. At the time of its construction, the Chain Bridge was considered an engineering marvel and one of the longest suspension bridges in the world.
            <br/>
            <br/> <a href="assets/wordfiles/The Chain Bridge (3).docx"><button >Download History</button></a>
        </p>
       </div>
    </div>
</div>

<Footer/>
    </>
  )
}

export default Chainbridge