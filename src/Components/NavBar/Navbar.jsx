import React from 'react'
import image from '../../img/clean.jpg'
import './navbar.css'
import { NavLink } from "react-router-dom";
import { useState } from "react";


function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
     <nav className="navbar">
        <div className="nav-container">
        <a href="/">
          <img src={image} alt="food-1" className="header__logo" />
        </a>
    
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              to={"/"}
              exact="true"
              className="nav-links"
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"/"}
              exact="true"
              className="nav-links"
              onClick={handleClick}
            >
              About Us
            </NavLink>
          </li>
   
          <li className="nav-item">
            <NavLink
              to={"/"}
              exact="true"
              className="nav-links"
              onClick={handleClick}
            >
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"/"}
              exact="true"
              className="nav-links"
              onClick={handleClick}
            >
              Contacts
            </NavLink>
          </li>
        </ul>

        <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          </div>
      </nav>
     
    </>
  );
}

export default Navbar