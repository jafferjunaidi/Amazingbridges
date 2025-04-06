import React from 'react'

const Cards = () => {
  return (
    <>
    
    <div className="container-fluid" >
    <div className="row text-center mt-3" >
      <h1  data-aos="fade-up" data-aos-duration="1000"><b>Amazing Bridges</b></h1>
      <p  data-aos="fade-up" data-aos-duration="1000">Where Paths Meet, Dreams Converge.</p>
    </div>
  </div>
  <div className="container-fluid mt-3">
    <div className="row famousrow" data-aos="fade-up" data-aos-duration="1000">
      <div className="indexpanel1">
        <h5>Queen Elizabeth Bridge </h5>
      </div>
      <div className="indexpanel2">
        <h5>Pulteney Bridge</h5>
      </div>
      <div className="indexpanel3">
        <h5>Ponte Milvio Bridge</h5>
      </div>
      <div className="indexpanel4">
        <h5>Ponte Sant Angelo Bridge</h5>
      </div>
    </div>
  </div>
    
    </>
  )
}

export default Cards