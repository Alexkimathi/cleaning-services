import React from 'react'
import image from '../../img/clean.jpg'
import './footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-logo'>
        <a href="/">
          <img src={image} alt="food-1" className="header__logo" />
        </a>

        </div>

    </div>
  )
}

export default Footer