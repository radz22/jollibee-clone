import React from 'react'
import { image } from '../constant'
import { Link } from 'react-router-dom'
import SingeFooter from '../pages/SingeFooter'
import '../mediaquery/Footer.css'
const Footer = () => {
  return (
    <>
    <section className='footer-up py-4'>
      <div className='footer-border mb-3'></div>
      <div className="container-xxl">
        <div className="row ">
          <div className="col-7 d-flex align-items-center justify-content-start">
            <div className='jolibbe-img'>
            <img src={image.joliphoto} className='img-fluid'/>
            </div>
          </div>

          <div className="col-5 d-flex align-items-center justify-content-end">

          <div className='footer-top mt-5 '>
              <button className='buttons'>Order Now</button>
          
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="footer-down py-5 d-flex align-items-center">
      <div className="container-xxl">
        <div className="row">
        
        <SingeFooter/>

          
        </div>
      </div>
    </section>
    </>
  )
}

export default Footer