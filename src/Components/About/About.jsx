import React from "react";
import "./about.css";
import pic2 from "../../img/clean.jpg";
// import {AiTwotoneTrophy} from 'react-icons/ai'
function About() {
  return (
    <div className="about">
      <div className="about-image">
        <img src={pic2} alt="p-14" />

        <div className="card-1">
          <div>
            {/* <AiTwotoneTrophy className="dets-1" /> */}
            <img src={pic2} alt="Avatar" className="dets-1" />
          </div>
          <div className="container-1">
          
          <div className="c-details">
          <h1>5+</h1>
              <h2>years Experience</h2>
          </div>
             
          
           
          </div>
        </div>
      </div>

      <div className="about-details">
        <h4>About annonymous Cleanning</h4>
        <h1>You can depend on us to get a good services</h1>

        <h5>We are annonymous cleanning service provider</h5>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          repellendus doloribus facilis laboriosam veniam id, eum perferendis
          maiores, nemo laudantium suscipit delectus recusandae ducimus sed
          adipisci cumque ea illo totam?
        </p>
      </div>
    </div>
  );
}

export default About;
