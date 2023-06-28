import React from 'react'
import { image } from '../constant'
import { DeliverSingle } from './DeliverSingle'
import Deliver from './Deliver'
import Question from './Question'
import '../mediaquery/Delivery.css'


const Delivery = () => {
  return (
    <>
    <section className='deliver-wrapper py-5 mb-2 background'>
     <div className="container-xxl">
      <div className="row">
        <div className="col-12 ">
         <div className='content text-center'>
          <h1>Jollibee Delivery</h1>
          
         </div>
        </div>

        

      </div>
     </div>
   </section> 
  
  <section className='delivery-wrapper d-flex align-item-center home-wrapper-2 py-5 '>
    <div className="container-xxl">
        <div className="row">
       <Deliver/>
      </div>
    </div>

  </section>
  
   <section className='mobile-app-wrapper home-wrapper-3 py-5'>
             <div className="container-fluid">
                <div className="row">
                    
        
                      <DeliverSingle/>

                    


                </div>
             </div>
            </section>


            <section className='question-wrapper home-wrapper-2 py-5'>
    <div className="container-xxl">
        <div className="row">
              <div className="col-12">
                <div className='question-front'>
                  <h1 className='text-center'>Frequently Asked Questions (FAQs)</h1>
                </div>
              </div>

             
             <div>
              <Question/>
             </div>
        </div>
    </div>
    </section>
  </>
  )
}

export default Delivery