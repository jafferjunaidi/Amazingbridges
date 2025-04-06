import React from 'react'
import Footer from '../components/Footer'

const UKoldbridge = () => {
  return (
    <>
    
    <div className="container">
        <div className="row text-center mt-3" data-aos="fade-up" data-aos-duration="1000">
            <h1><b>OLDEST BRIDGES OF <br/>UNITED KINGDOM</b></h1>
        </div>
    </div>
    <div className="container-fluid mt-3">
        <div className="row famousrow" data-aos="fade-up" data-aos-duration="1000">
          <div className="ukoldpanel1">
            <h5>Pulteney Bridge </h5>
          </div>
          <div className="ukoldpanel2">
            <h5>Old Dee Bridge </h5>
          </div>
          <div className="ukoldpanel3">
            <h5>Old Stirling Bridge</h5>
          </div>
          <div className="ukoldpanel4">
            <h5>Fleet Bridge</h5>
          </div>
        </div>
    </div>
 <div className="container mt-3 ">
    <hr/>
    <div className="row ">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 " data-aos="fade-up" data-aos-duration="1000">
            <h1>PULTENEY BRIDGE</h1>
            <p>Pulteney Bridge, an architectural gem nestled in the heart of Bath, England, stands as a testament to both elegance and functionality. Completed between 1769 and 1774, this historic bridge spans the River Avon and is renowned for its Palladian design, which echoes the grandeur of Italian Renaissance architecture. The bridge's unique feature lies in its rows of shops and residences built into its structure, reminiscent of the Ponte Vecchio in Florence. Designed by Scottish architect Robert Adam, Pulteney Bridge was named after Frances Pulteney.</p>
            <a href="assets/wordfiles/PULTENEY BRIDGE.docx"><button id="explore" >Download History</button></a>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 famous1 mt-4" data-aos="fade-up" data-aos-duration="1000">
            <img src="UKbridge5.jpg" alt=""/>
        </div>
    </div>
    <div className="row mt-5">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-up" data-aos-duration="1000">
            <h1>OLD DEE BRIDGE</h1>
            <p>The Old Dee Bridge, nestled in the historic city of Chester, stands as a silent witness to centuries of British history. Believed to have origins dating back to the 12th century, this ancient stone bridge gracefully spans the River Dee, connecting the bustling city center with the tranquil countryside beyond. With its sturdy medieval architecture and weathered stone arches, the bridge exudes a timeless charm that transports visitors back to a bygone era. Despite the passage of time and numerous renovations.</p>
            <a href="assets/wordfiles/OLD DEE BRIDGE.docx"><button id="explore" >Download History</button></a>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 famous1 mt-4 UKOLD" data-aos="fade-up" data-aos-duration="1000">
            <img src="UKbridge4.jpg" alt=""/>
        </div>
    </div>
    <div className="row mt-5 ">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-up" data-aos-duration="1000">
            <h1>OLD STIRLING BRIDGE</h1>
            <p>Old Stirling Bridge, steeped in history and legend, spans the majestic River Forth near the historic city of Stirling in Scotland. Dating back to the late 15th century, this medieval bridge holds a prominent place in Scottish heritage and folklore, most notably for its association with the Battle of Stirling Bridge in 1297. Led by William Wallace, the Scots famously defeated the English forces under Edward I, securing a significant victory for Scottish independence.</p>
            <a href="assets/wordfiles/OLD STIRLING BRIDGE.docx"><button id="explore" >Download History</button></a>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 famous1 mt-4" data-aos="fade-up" data-aos-duration="1000">
            <img src="UKbridge2.jpg" alt=""/>
        </div>
    </div>
    <div className="row mt-5 ">
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-up" data-aos-duration="1000">
            <h1>FLEET BRIDGE</h1>
            <p>Fleet Bridge, situated in the picturesque county of Dorset, holds a significant place in the region's rich history and architectural heritage. Believed to date back to the 13th century, this historic bridge spans the tranquil waters of the River Fleet, offering a charming link between the town of Weymouth and its surrounding countryside. With its sturdy stone construction and graceful arches, Fleet Bridge evokes a sense of timeless elegance and enduring craftsmanship.</p>
            <a href="assets/wordfiles/FLEET BRIDGE.docx"><button id="explore" >Download History</button></a>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 famous1 mt-4" data-aos="fade-up" data-aos-duration="1000">
            <img src="UKbridge3.jpg" alt=""/>
        </div>
    </div>
   
 </div>

    <Footer/>
    </>
  )
}

export default UKoldbridge