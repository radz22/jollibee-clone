import React from 'react'
import { image } from '../constant'
import Hotlines from './Hotlines'
import { Link } from 'react-router-dom'
import What from './What'
import '../mediaquery/Home.css'
import { useState, useEffect } from 'react'




const Home = () => {

  const [isMobile, setIsMobile] = useState (false)

 useEffect (() => {
const handleResize = () => {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  setIsMobile(isMobile);

}
   // Initial check on component mount
handleResize();

    // Add event listener for window resize
 window.addEventListener('resize', handleResize);

// Clean up the event listener on component unmount
return() => window.removeEventListener('resize', handleResize);
 },[])




  return (
  <>
     <section className={isMobile ? 'mobile' : 'desktop'}
        >
       <div className="container-xxl">
        <div className="row">
          <div className="col-6 home-wrap">
            <div className='home-wrapper-content d-flex flex-column align-items-center me-5'>
            <div className='home-title'>
              <h1 className='mb-5'>Bringing joy to you</h1>
            </div>
            <div className='home-p'>
              <p className='mb-5'>Have your Jollibee favorites delivered right to your doorstep!</p>
            </div>

            <div className='button'>
              <button className='order-button'>Order Now</button>
            </div>




          </div>
          </div>

        
        </div>
       </div>
     </section>

     <section className='hotline home-wrapper-2 py-5 '>
      <div className="container-xxl">
        <div className="row">
          <Hotlines/>
        </div>
      </div>
     </section>

     <section className='promo home-wrapper-2 py-5'>
      <div className="container-xxl">
        <div className="row">

          <div className="col-12">
            <div className='promo-title'>
                <h1 className='text-center mb-5'>Exclusive Promos</h1>
               </div>
          </div>
          <div className="col-12">
            <div className='promo-content'>
              
               <div className='promo-images d-flex justify-content-evenly gap-10'> 
            
                <div className='promo-img'>
                  <img src={image.promo} className='img-fluid'/>
                </div>

                <div className='promo-img'>
                  <img src={image.promo2} className='img-fluid'/>
                </div>

                <div className='promo-img-2'>
                  <img src={image.promo3} className='img-fluid'/>
                </div>

                <div className='promo-img-1 mt-4'>
                  <img src={image.promo5} className='img-fluid'/>
                </div>

                </div>

            </div>
          </div>
          <div className="col-12">
            <div className='button text-center'>
              <button className='promo-button  mt-5'>See All Promos</button>
            </div>
          </div>
        </div>
      </div>
     </section>

     <section className='feature-wrapper py-5   home-wrapper-3 d-flex align-items-center gap-50 py-5'>
      <div className="container-xxl">
        <div className="row">
        <div className="col-12">
          <div className='featured'>
             <h1 className='text-center mb-5'>Featured Menu Items</h1>
      
          </div>
        </div>
    
        
        <div className="col-4 feature1">
            <div className='featured-content featured-1  '>    
           <div className='featured-title '>
                <h2 className='mb-1'>Chickenjoy Bucket</h2>

                <div className='featured-p'>
             <p className='mb-0'>Philippines' best-tasting</p>
             <p>crispylicious, juicylicious.</p>
             </div>
              </div>

              <div className='featured-img d-flex justify-content-center '>
              <img src={image.featured2} className='img-fluid'/>
              </div>
            </div>
          </div>


          <div className="col-4 feature1">
            <div className='featured-content featured-2'>    
           <div className='featured-title '>
                <h2 className='mb-1'>Spaghetti Pan</h2>

                <div className='featured-p'>
             <p className='mb-0'>The meatiest, cheasiest, and</p>
             <p>sweet-sarap Jolly Spaghetti</p>
             </div>
              </div>

              <div className='featured-img d-flex justify-content-center  mt-5 '>
              <img src={image.featured1} className='img-fluid'/>
              </div>
            </div>
          </div>


          <div className="col-4 feature1">
            <div className='featured-content featured-3 '>    
           <div className='featured-title '>
                <h2 className='mb-1'>Yumburger</h2>

                <div className='featured-p'>
             <p className='mb-0'>Your favorite 100% Beefy</p>
             <p>Langhap-Sarap Burgers.</p>
             </div>
              </div>

              <div className='featured-img d-flex justify-content-center'>
              <img src={image.featured3} className='img-fluid'/>
              </div>
            </div>
          </div>


          <div className="col-4 feature1">
            <div className='featured-content featured-4 '>    
           <div className='featured-title '>
                <h2 className='mb-2'>Burger Steak</h2>

                <div className='featured-p'>
             <p className='mb-3'>100% pure beef patty with a hearty serving of flavorful mushroom gravy</p>

             </div>
              </div>

              <div className='featured-img d-flex justify-content-center'>
              <img src={image.featured4} className='img-fluid'/>
              </div>
            </div>
          </div>



    <div className="col-12 mt-5">
      <div className='featured-button text-center'>
       <Link><button className='promo-button '>View Me</button></Link> 
      </div>
    </div>


        

          
        </div>
      </div>
     </section>

     <section className='what-wrapper py-5 home-wrapper-2 d-flex align-items-center justify-content-between '>
    <div className="container-xxl">
      <div className="row">

     <What/>


       
    
      </div>
    </div>
     </section>
  </>
  )
}

export default Home