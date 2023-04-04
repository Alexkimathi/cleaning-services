import React from "react";
import image from "../../img/clean.jpg";
import "./footer.css";
import { NavLink } from "react-router-dom";

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <div className="logos">
          <a href="/">
            <img src={image} alt="food-1" className="footer__logo" />
          </a>

          <h1>Annoymous</h1>
        </div>

        <p>
          we are committed to the best Quality in the field of industria
          Cleaning,home and Garden cleaning
        </p>

        <h3>Follow us on</h3>
        <div className="icons">
          <FaFacebookSquare className="facebook" />
          <FaTwitterSquare className="twitter" />
          <FaInstagramSquare className="instagram" />
        </div>
      </div>

      <div className="footer-services">
        <h1 className="serv">Services</h1>
        <div className="services">
          <li className="services">
            <ul>
              <NavLink to={"/"} exact="true" className="nav-links">
                HouseCleaning
              </NavLink>
            </ul>
            <ul>
              <NavLink to={"/"} exact="true" className="nav-links">
                PostConstructionCleaning
              </NavLink>
            </ul>

            <ul>
              <NavLink to={"/"} exact="true" className="nav-links">
                CarpetCleaning
              </NavLink>
            </ul>
            <ul>
              <NavLink to={"/"} exact="true" className="nav-links">
                OutDoorCleaning
              </NavLink>
            </ul>
          </li>
        </div>
      </div>

      <div className="Quick-links">
      <h1 className="serv">Links</h1>
        <div>
          <li className="services">
            <ul>
              <NavLink to={"/"} exact="true" className="nav-links">
                Home
              </NavLink>
            </ul>
            <ul>
              <NavLink to={"/"} exact="true" className="nav-links">
                About Us
              </NavLink>
            </ul>

            <ul>
              <NavLink to={"/"} exact="true" className="nav-links">
                Services
              </NavLink>
            </ul>
            <ul>
              <NavLink to={"/"} exact="true" className="nav-links">
                Contacts
              </NavLink>
            </ul>
          </li>
        </div>
      </div>




      
      <div className="Quick-links-1">
      <h1 className="serv">Office Address</h1>
      <div className="contacts-links">
        <p>Kimathi Streets, Nairobi,Kenya</p>
        <p>+2547123456</p>
        <p>annonymous@gmail.com</p>
      </div>
      </div>





      
    </div>
  );
}

export default Footer;
