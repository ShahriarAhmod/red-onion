import React from 'react'
import './Service.css'
import {BsArrowRightCircleFill} from 'react-icons/bs'
import service1 from '../../assets/images/service1.png'
import service2 from '../../assets/images/service2.png'
import service3 from '../../assets/images/service3.png'
const Service = () => {
  return (
      <section className='service'>
          <div className="service-titles">
              <h2>Why you choose us</h2>
              <p>Barton Waited twenty always repaired in within we do an delighted offending curiosity my is dashboards at boy prosperous increasing surrounded.</p>
          </div>
          <div className="service-container">
              <div className="service-cart">
                  <img src={service1} alt="service-img" />
                  <div className="service-info">
                      <h4>Fast Delivery</h4>
                      <p>Keep your systems in sync with automated web hook based notification each time link is paid  and how we dream about our future</p>
                      <a href="#">See More <BsArrowRightCircleFill/> </a>
                  </div>
              </div>
              <div className="service-cart">
                  <img src={service2} alt="service-img" />
                  <div className="service-info">
                      <h4>Home Delivery</h4>
                      <p>Keep your systems in sync with automated web hook based notification each time link is paid  and how we dream about our future</p>
                      <a href="#">See More <BsArrowRightCircleFill/> </a>
                  </div>
              </div>
              <div className="service-cart">
                  <img src={service3} alt="service-img" />
                  <div className="service-info">
                      <h4>World Class Chefs</h4>
                      <p>Keep your systems in sync with automated web hook based notification each time link is paid  and how we dream about our future</p>
                      <a href="#">See More <BsArrowRightCircleFill/> </a>
                  </div>
              </div>
          </div>
    </section>
  )
}

export default Service