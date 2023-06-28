import React from 'react'
import { image } from '../constant'

const SingeFooter = () => {
  return (
    <>
     <div className="col-2">
            <div className='footer-follow d-flex flex-column align-items-center'>
                
                <div className='title'>
                <h1 className='footers pb-0 mb-0'>Follow Us</h1>
                </div>

                <div className='footer-icons d-flex gaps-5 mt-4'>
                <div className='icons-img'>
  <img src={image.facebook} className='img-fluid'/>
</div>

<div className='icons-img'>
<img src={image.instagram} className='img-fluid'/>
</div>

<div className='icons-img'>
<img src={image.twitter} className='img-fluid'/>
</div>

<div className='icons-img'>
<img src={image.viber} className='img-fluid'/>
</div>

                </div>
            </div>

                  
          </div>

          <div className="col-2">
            <div className='footer-follow d-flex flex-column align-items-center'>
                
                <div className='title'>
                <h1 className='footers pb-0 mb-0'>How To Orders</h1>
                </div>

                <div className='footer-p d-flex flex-column gap-10 mt-4'>
<div>
  <p className='mb-0'>View Menu</p>
</div>

<div>
  <p className='mb-0'>Delivery</p>
</div>

<div>
  <p className='mb-0'>Multi-Delivery</p>
</div>

<div>
  <p className='mb-0'>Locations</p>
</div>
</div>

            </div>

                  
          </div>

          <div className="col-2">
            <div className='footer-follow d-flex flex-column align-items-center'>
                
                <div className='title'>
                <h1 className='footers pb-0 mb-0'>Promotions</h1>
                </div>

                <div className='footer-p d-flex flex-column gap-10 mt-4'>
<div>
  <p className='mb-0'>Promos</p>
</div>

<div>
  <p className='mb-0'>Gift Cards</p>
</div>

</div>

            </div>

                  
          </div>

          <div className="col-2">
            <div className='footer-follow d-flex flex-column align-items-center'>
                
                <div className='title'>
                <h1 className='footers pb-0 mb-0 text-center'>About Us</h1>
                </div>

                <div className='footer-p d-flex flex-column gap-10 mt-4'>
                <div>
  <p className='mb-0'>About Jollibee</p>
</div>

<div>
  <p className='mb-0'>Safety</p>
</div>

<div>
  <p className='mb-0'>Investors</p>
</div>

<div>
  <p className='mb-0'>Franchising</p>
</div>

<div>
  <p className='mb-0'>Careers</p>
</div>

<div>
  <p className='mb-0'>Jollibee Group Foundation</p>
</div>

<div>
  <p className='mb-0'>Contact Us</p>
</div>

<div>
  <p className='mb-0'>Rate Our Stores</p>
</div>

</div>

            </div>

                  
          </div>

          <div className="col-2">
            <div className='footer-follow d-flex flex-column align-items-center'>
                
                <div className='title'>
                <h1 className='footers pb-0 mb-0'>About Our Website</h1>
                </div>

                <div className='footer-p d-flex flex-column gap-10 mt-4'>
                <div>
  <p className='mb-0'>Privacy Policy</p>
</div>

<div>
  <p className='mb-0'>Terms & Conditions</p>
</div>

<div>
  <p className='mb-0'>Accessibility</p>
</div>

<div>
  <p className='mb-0'>Sitemap</p>
</div>

</div>

            </div>

                  
          </div>


       <div className="col-2">
       <div className='google-app d-flex justify-content-center'>
                  <div className='playstore'>
                    <img src={image.playstore} className='img-fluid'/>
                  </div>

                  <div className='appstore'>
                    <img src={image.appstore} className='img-fluid'/>
                  </div>
                </div>
       </div>
    


    </>
  )
}

export default SingeFooter