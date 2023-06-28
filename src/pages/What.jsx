import React from 'react'
import { image } from '../constant'
const What = () => {
  return (
   <>
   <div className="col-6   d-flex flex-column align-items-center justify-content-center">

   <div className='image position-relative '>
          <img src={image.what1} className='img-fluid mb-4'/>
         </div>

         <div className='what-content '>
         <div className='what-title '>
          <h1 className='mt-5 '>What We Do</h1>
          <div className='block position-relative'></div>
         </div>


         <div className='what-p mt-5'>
          <p className='mb-0'>Jollibee's Mission is to serve great-tasting food, </p>
          <p>bringing the joy of eating to everyone., </p>
        </div>
         </div>
   </div>



   <div className="col-6  d-flex flex-column align-items-center justify-content-center">

<div className='images position-relative '>
       <img src={image.what2} className='img-fluid mb-4'/>
      </div>

      <div className='what-contents'>
      <div className='what-title'>
       <h1 className='mt-5 '>What We Stand For</h1>
       <div className='blocks  position-relative '></div>
      </div>


      <div className='what-p mt-5'>
       <p className='mb-0'>Jollibee is a family-centric brand that promotes </p>
       <p className='mb-0'>family values and togetherness and espouses </p>
       <p>Filipino pride.</p>
     </div>
      </div>
</div>
   </>
  )
}

export default What