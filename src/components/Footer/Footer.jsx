import React from 'react'
import logo from '../../assets/images/logo.png'
import './Footer.css'
const Footer = () => {
  return (
      <footer>
          <div className="footer-container">
              <div className="footer-col footer-logo">
                  <img src={logo} alt="" />
              </div>
              <div className="footer-col">
                 <li>About Online Food</li>
                 <li>Read our blog</li>
                 <li>Sign up to deliver</li>
                 <li>Add your restaurant</li>
              </div>
              <div className="footer-col">
           <li>Get Help</li>
           <li>Read FAQs</li>
           <li>View All Cities</li>
           <li>Restaurants near me</li>
              </div>
          </div>
    </footer>
  )
}

export default Footer