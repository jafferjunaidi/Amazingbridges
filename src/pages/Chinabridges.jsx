import React from 'react'
import Footer from '../components/Footer'

const Chinabridges = () => {
  return (
    <>
    
    <div className="container mt-3 ">
        <div className="row display-1 text-center mt-2" data-aos="fade-up" data-aos-duration="1000"><h1><b>BRIDGES OF CHINA</b></h1></div>
        <div className="row  mt-5"> 
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="row" data-aos="fade-up" data-aos-duration="1000">
                    <h2><b>FAMOUS BRIDGES</b></h2>
                </div>
    <div className="row" data-aos="fade-up" data-aos-duration="1000">
        <p>China boasts a rich tapestry of bridges, each bearing testament to the nation's remarkable engineering prowess and cultural heritage. Among these, the Zhaozhou Bridge, dating back to the Sui Dynasty around 600 AD, stands as a revered symbol of ancient architectural ingenuity. Spanning the Xiaohe River in Hebei Province, its graceful arch and enduring design captivate visitors, embodying a legacy of craftsmanship passed down through generations. In Beijing, the Lugou Bridge, constructed during the Jin Dynasty in 1189 AD.</p>
       <a href='/chinafamousbridge'> <button id="explore" className="mb-2">Explore More</button></a>
    </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 famouscol" data-aos="fade-up" data-aos-duration="1000">
    <img src="Chinabridge2.jpg" alt=""/>
            </div>
        </div>
    </div>
    <div className="container mt-5 ">
        <div className="row" >
            <div className="colcol-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 famouscol" data-aos="fade-up" data-aos-duration="1000">
                <img src="Chinabridge.jpg" alt=""/>
                        </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-up" data-aos-duration="1000">
                <br />
                <div className="row ">
                    <h2><b>OLDEST BRIDGES</b></h2>
                </div>
    <div className="row ">
        <p>China's oldest bridges serve as living testaments to the nation's ancient engineering prowess and enduring cultural heritage. The Zhaozhou Bridge, also known as the Anji Bridge, emerges as a beacon of antiquity, dating back to the Sui Dynasty around 600 AD. Spanning the Xiaohe River in Hebei Province, its graceful arch and weathered stone evoke centuries of history, standing as a testament to the craftsmanship of ancient artisans. </p>
        <a href='/chinaoldbridge'> <button id="explore" >Explore More</button></a>

            </div>
          
        </div>
    </div>
  </div>
    <div className="container mt-5 ">
        <div className="row ">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-up" data-aos-duration="1000">
                <div className="row" data-aos="fade-up" data-aos-duration="1000">
                    <h2><b>LONGEST BRIDGES</b></h2>
                </div>
    <div className="row ">
        <p>China is home to some of the longest bridges in the region, spanning vast distances and connecting different parts of the country with remarkable engineering feats. Among these, the Sukkur Barrage stands out as one of the longest bridges in Pakistan, spanning the mighty Indus River in Sindh province. This multipurpose barrage not only facilitates irrigation and flood control but also serves as a vital transportation link.</p>
        <a href='/chinalongbridge'> <button id="explore" className="mb-2">Explore More</button></a>
    </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 famouscol" data-aos="fade-up" data-aos-duration="1000">
    <img src="Chinabridge3.jpg" alt=""/>
            </div>
        </div>
    </div>
    
    <Footer/>
    </>
  )
}

export default Chinabridges