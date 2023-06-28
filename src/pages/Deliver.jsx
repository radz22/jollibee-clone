import React from 'react'
import { image } from '../constant'

const Deliver = () => {
  return (
  <>

   <div className="col-6">

   <div className='deliver-img position-relative me-5 d-flex justify-content-center'>
                    <img src={image.deliverimg} className='img-fluid'/>
                </div>
   </div>
   <div className="col-6">
   <div className='deliver-content '>
                    <div className='deliver-title'>
                        <h1 className='mb-3'>Delivery</h1>
                    </div>
                    <div className='deliver-p mb-5'>
                    <p className='mb-0'>Ordering from Jollibee has never been easier! Call #87000, Click </p>
                    <p className='mb-0'>Order Online to go to JollibeeDelivery.com or tap the Jollibee app. </p>
                    <p className='mb-0'>Satisfy your cravings and have your Jollibee favorites delivered right </p>
                    <p>to your doorstep!</p>
                    </div>
                   
                    
                <div className='button'>
                     <button className='deliver-button text-center'>Order Online</button>
                     </div>
               
                </div>

              
          
   </div>
  </>
  )
}

export default Deliver