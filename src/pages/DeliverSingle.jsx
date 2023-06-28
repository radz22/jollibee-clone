import React from 'react'
import { image } from '../constant'

export const DeliverSingle = () => {

   


  return (
   <>



   
   <div className="col-4 ">

<div className='deliveries-wrapper home-wrapper-2 py-5 w-100'>

      <div className='d-flex flex-column align-items-center'> 
      
     <div className='deliveries-single-img py-1'>
         <img src={image.download} className='img-fluid '/>
     </div>
    <div className='deliveries-single-title py-3'>
        <h1 className='mb-0 text-center'> Download the App</h1>
    </div>

    <div className='border-img'>
        <img src={image.border} className='img-fluid'/>
    </div>
    <div className='py-3 px-3' >
    <p className='mb-0 text-center'>Ordering your Jollibee favorites has never been this </p>
    <p className='mb-0 text-center'>easy. Enjoy App Exclusive deals only on the Jollibee App.</p>
    </div>
   

    <div className='d-flex gap-10 py-3'>
        <div className='appsstore-img'>
        <img src={image.appstore} className='img-fluid'/>
        </div>
        
        <div className='appsstore-img'>
        <img src={image.playstore} className='img-fluid'/>
        </div>
       
    </div>
    </div>

    
</div>
</div>

<div className="col-4 ">

<div className='deliveries-wrapper home-wrapper-2 py-5 w-100'>

      <div className='d-flex flex-column align-items-center'> 
      
     <div className='deliveries-single-img py-1'>
         <img src={image.phone} className='img-fluid '/>
     </div>
    <div className='deliveries-single-title py-3'>
        <h1 className='mb-0 text-center'> Call #87000</h1>
    </div>

    <div className='border-img'>
        <img src={image.border} className='img-fluid'/>
    </div>
    <div className='py-3 px-3' >
    <p className='mb-0 text-center'>Jollibee delivery is just a call away! Call #87000 to order  </p>
    <p className='mb-0 text-center'>your Jollibee favorites! Don’t forget the hashtag!</p>
    </div>
   
    
    <button className='buttons mt-3'>
    #87000
    </button>
    </div>

    
</div>

</div>


<div className="col-4 ">

<div className='deliveries-wrapper home-wrapper-2 py-5 w-100'>

      <div className='d-flex flex-column align-items-center'> 
      
     <div className='deliveries-single-image py-1'>
         <img src={image.deliverimg1} className='img-fluid '/>
     </div>
    <div className='deliveries-single-title py-3'>
        <h1 className='mb-0 text-center'> Multi-Delivery</h1>
    </div>

    <div className='border-img'>
        <img src={image.border} className='img-fluid'/>
    </div>
    <div className='py-3 px-3' >
    <p className='mb-0 text-center'>Order your Jollibee favorites and send to multiple </p>
    <p className='mb-0 text-center'>recipients and addresses.</p>
    </div>
   
    
    <button className='buttons mt-5'>
    Order for Multi-Delivery
    </button>
    </div>

    
</div>

</div>



   </>
  )
}
