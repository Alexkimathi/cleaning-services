import React from 'react'

import pic2 from "../img/clean.jpg";
import './careds.css'

function Card() {
  return (
    <div className="services-cards">
    <div className="card">
        <div>
      <img src={pic2} alt="Avatar" className="dets" />
      </div>
      <div className="container">
        <h4>
          <h1>House Cleanning</h1>
        </h4>
        <h3>House Cleanning House Cleanning House Cleanning House Cleanning House Cleanning </h3>
      </div>  
    </div>



    <div className="card">
    <div>
      <img src={pic2} alt="Avatar" className="dets" />
      </div>
      <div className="container">
        <h4>
          <h1>Office Cleaning</h1>
        </h4>
        <h3>House Cleanning House Cleanning House Cleanning House Cleanning House Cleanning </h3>
      </div>
    </div>

    <div className="card">
    <div>
      <img src={pic2} alt="Avatar" className="dets" />
      </div>
      <div className="container">
        <h4>
          <h1>Post Construction Cleaning</h1>
        </h4>
        <h3>House Cleanning House Cleanning House Cleanning House Cleanning House Cleanning </h3>
      </div>
    </div>
    </div>
  )
}

export default Card