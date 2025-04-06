import React from 'react'
import Footer from '../components/Footer'

function Travelwithus() {
  return (
    <>

    <div className="container p-3" >
      <h1 className="display-3 fw-bold" data-aos="fade-up" data-aos-duration="1000">Travel With Us</h1>
      <p data-aos="fade-up" data-aos-duration="1000">
        Experience the thrill of traversing iconic bridges with us. From air to
        land, our journey promises awe-inspiring views and unforgettable <br />
        encounters. Join us and explore the world's architectural marvels like
        never before.
      </p>

      <div className="container planescon" data-aos="fade-up" data-aos-duration="1000">
        <h1 className="text-light">Fly To Amazing Bridges</h1>
        <p className="text-light">
          Immerse yourself in the rich tapestry of global history and culture as
          you traverse <br />
          these iconic structures, forging memories to last a lifetime.
        </p>
        <p className="text-light">
          Starting from <span className="travel-price">$599 Only</span>
        </p>
        <button id="explore" className="mb-2" data-bs-toggle="modal"
        data-bs-target="#flightmodal">Book Now</button>
      </div>
    </div>


    <div className="container p-3" data-aos="fade-up" data-aos-duration="1000">
      <div className="container buscon">
        <h1 className="text-light">Travel By Land To Amazing Bridges</h1>
        <p className="text-light">
          Immerse yourself in the rich tapestry of global history and culture as
          you traverse <br />
          these iconic structures, forging memories to last a lifetime.
        </p>
        <p className="text-light">
          Starting from <span className="travel-price">$266 Only</span>
        </p>
        <button
          id="explore"
          className="mb-2"
          data-bs-toggle="modal"
        data-bs-target="#busmodal"
        >
          Book Now
        </button>
      </div>
    </div>

    <div
      className="modal fade"
      id="flightmodal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content">
          <div className="modal-header px-3">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Book Your Flight Now!
            </h1>
            <button
              type="button"
              className="btn-close text-danger"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body p-5 formcontainer">
            <form action="" id="flightform"/>
              <div className="row">
                <div className="col-md-6 mt-5">
                  <h2 className="mb-3">Personal Information</h2>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter your name"
                      pattern="[a-zA-Z\s]{3,20}"
                      title="Name Must Be Between 3 to 20 characters | Alphabets Only"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email address"
                      title="Enter a valid email address"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Phone" className="form-label">Phone</label>
                    <input
                      type="number"
                      className="form-control"
                      id="phonenumber"
                      placeholder="+92-000000000"
                      pattern="[0-9]{11,11}"
                      title="Enter a valid phonenumber"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Phone" className="form-label"
                      >Identity Card Number</label>
                    <input
                      type="number"
                      className="form-control"
                      id="phonenumber"
                      placeholder="000-111-222-444-5"
                      pattern="[0-9]{13,13}"
                      title="Enter a valid Identity Number"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Phone" className="form-label"
                      >Passport Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phonenumber"
                      placeholder="AB183479"
                      pattern="[A-Z0-9]{8,8}"
                      title="Enter a valid Passport Number"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6 mt-5">
                  <h2 className="mb-3">Flight Details</h2>
                  <div className="mb-3">
                    <label htmlFor="airline">Select Airline</label>
                    <select
                      className="form-select"
                      id="airline"
                      aria-label="Default select example"
                      required
                    >
                      <option defaultValue={'Emirates'}>Emirates</option>
                      <option value="1">Etihad</option>
                      <option value="2">Fly Dubai</option>
                      <option value="3">Qatar Airways</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="airlines-class">Select Airline Class</label>
                    <select
                      className="form-select"
                      id="airline-class"
                      aria-label="Default select example"
                      required
                    >
                      <option defaultValue={'Business'}>Business</option>
                      <option value="1">First</option>
                      <option value="2">Economy</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Phone" className="form-label">Select Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="phonenumber"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Phone" className="form-label">Select Time</label>
                    <input
                      type="time"
                      className="form-control"
                      id="phonenumber"
                      required
                    />
                  </div>
                </div>
              </div>
          </div>
          <div className="modal-footer">
            <button id="explore" type="submit" onClick={"flightform('flightform')"} className="mb-2">
              Book Now
            </button>
          </div>
        <form/>
        </div>
      </div>
    </div>

      <div
     className="modal fade"
     id="busmodal"
     tabIndex="-1"
     aria-labelledby="exampleModalLabel"
     aria-hidden="true"
   >
     <div className="modal-dialog modal-fullscreen">
       <div className="modal-content">
         <div className="modal-header px-3">
           <h1 className="modal-title fs-5" id="exampleModalLabel">
            Book your bus ride now!
           </h1>
           <button
             type="button"
             className="btn-close text-danger"
             data-bs-dismiss="modal"
             aria-label="Close"
           ></button>
         </div>
         <div className="modal-body p-5 formcontainer">
           <form action="" id="busform"/>
             <div className="row">
               <div className="col-md-6">
                 <h2 className="mb-3">Personal Information</h2>
                 <div className="mb-3">
                   <label htmlFor="username" className="form-label">Name</label>
                   <input
                     type="text"
                     className="form-control"
                     id="username"
                     placeholder="Enter your name"
                     pattern="[a-zA-Z\s]{3,20}"
                     title="Name Must Be Between 3 to 20 characters | Alphabets Only"
                     required
                   />
                 </div>
                 <div className="mb-3">
                   <label htmlFor="email" className="form-label">Email</label>
                   <input
                     type="email"
                     className="form-control"
                     id="email"
                     placeholder="Enter email address"
                     title="Enter a valid email address"
                     required
                   />
                 </div>
                 <div className="mb-3">
                   <label htmlFor="Phone" className="form-label">Phone</label>
                   <input
                     type="number"
                     className="form-control"
                     id="phonenumber"
                     placeholder="+92-000000000"
                     pattern="[0-9]{11,11}"
                     title="Enter a valid phonenumber"
                     required
                   />
                 </div>
                 <div className="mb-3">
                   <label htmlFor="Phone" className="form-label"
                     >Identity Card Number</label
                   >
                   <input
                     type="number"
                     className="form-control"
                     id="phonenumber"
                     placeholder="000-111-222-444-5"
                     pattern="[0-9]{13,13}"
                     title="Enter a valid Identity Number"
                     required
                   />
                 </div>
                 <div className="mb-3">
                   <label htmlFor="Phone" className="form-label"
                     >Passport Number</label
                   >
                   <input
                     type="text"
                     className="form-control"
                     id="phonenumber"
                     placeholder="AB183479"
                     pattern="[A-Z0-9]{8,8}"
                     title="Enter a valid Passport Number"
                     required
                   />
                 </div>
               </div>
               <div className="col-md-6">
                 <h2 className="mb-3">Bus Details</h2>
                 <div className="mb-3">
                   <label htmlFor="airline" >Select Bus</label>
                   <select
                     className="form-select"
                     id="airline"
                     aria-label="Default select example"
                     required
                   >
                     <option defaultValue={'Minibus'}>Minibus</option>
                     <option value="1">Double-decker bus</option>
                     <option value="2">Single-decker bus</option>
                     <option value="3">Shuttle bus</option>
                   </select>
                 </div>
                 <div className="mb-3">
                   <label htmlFor="Phone" className="form-label">Select Date</label>
                   <input
                     type="date"
                     className="form-control"
                     id="phonenumber"
                     required
                   />
                 </div>
                 <div className="mb-3">
                   <label htmlFor="Phone" className="form-label">Select Time</label>
                   <input
                     type="time"
                     className="form-control"
                     id="phonenumber"
                     required
                   />
                 </div>
               </div>
             </div>
         </div>
         <div className="modal-footer">
           <button id="explore" type="submit" onClick={"flightform('busform')"} className="mb-2">
             Book Now
           </button>
         </div>
       <form/>

       </div>
     </div>
   </div> 
    <div className="container trustcon">
      <div className="row" >
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 travelwithus" data-aos="fade-up" data-aos-duration="1000">
          <h1>Why Choose Us To Travel?</h1>
          <p>
            Select us as your travel companion for unparalleled expertise and
            attention to detail. Our team meticulously curates every aspect of
            your journey, ensuring seamless logistics and unforgettable
            experiences. From the moment you book with us, expect personalized
            attention and tailored itineraries that cater to your preferences
            and interests. Whether you seek adventure, cultural immersion, or
            relaxation, we provide unparalleled support every step of the way.
            Trust in our commitment to quality, reliability, and customer
            satisfaction, and embark on a journey with us that exceeds your
            wildest expectations.
          </p>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-up" data-aos-duration="1000">
          <img src="twomenhandshake.jpg" alt="" />
        </div>
      </div>
    </div>

<Footer/>

    </>

  )
}

export default Travelwithus