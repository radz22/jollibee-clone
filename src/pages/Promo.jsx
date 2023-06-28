import React from 'react'
import { image } from '../constant'
import '../mediaquery/Promo.css'
const Promo = () => {
  return (
   <>
    <section className='deliver-wrapper py-5 mb-2 background'>
     <div className="container-xxl">
      <div className="row">
        <div className="col-12 ">
         <div className='content text-center'>
          <h1>Promos</h1>
          
         </div>
        </div>

        

      </div>
     </div>
   </section> 

   <section className='promo-wrapper py-5'>
    <div className="container-xxl">
        <div className="row">
            <div className="col-12">
                <div className='promo-desc'>
                <h1 className='text-center mb-4'>Jollibee Promo</h1>
                <div>
                    <p className='text-center'>Get more JOY with these exciting promos! Take advantage of these exclusive and limited time only offers and deals to get big discounts and freebies!</p>
                </div>
            </div>
            </div>
        </div>
    </div>
   </section>


   <section className='promo-wrapper-1 py-5 gap-10 d-flex '>
    <div className="container-xxl">
        <div className="row">
           

                <div className="col-6">
                     <div className='promo-content py-4 d-flex align-items-center justify-content-center flex-column '>
                
                     <div className='promo-image mb-5 d-flex align-items-center justify-content-center'>
                        <img src={image.promo} className='img-fluid'/>
                    </div>
                      <div className='mb-3'>
                        <h2 className='text-center'>6+1/8+2 Chickenjoy Bucket Promo</h2>
                      </div>

                      <div className='d-flex align-items-center gap-70 mt-4'>
                      <p><a class="link-opacity-100-hover" href="#">Learn More</a></p>


                        <div className='text-center'>
                        <button className='buttons'>Order Now</button>
                        </div>
                       
                      </div>
                     </div>


                     <div className='promo-content py-4 d-flex align-items-center justify-content-center flex-column '>
                
                <div className='promo-image mb-5 d-flex align-items-center justify-content-center'>
                   <img src={image.promo4} className='img-fluid'/>
               </div>
                 <div className='mb-3'>
                   <h2 className='text-center'>Choose your Freebie!</h2>
                 </div>

                 <div className='d-flex align-items-center gap-70 mt-4'>
                 <p><a class="link-opacity-100-hover" href="#">Learn More</a></p>


                   <div className='text-center'>
                   <button className='buttons'>Order Now</button>
                   </div>
                  
                 </div>
                </div>

                <div className='promo-content py-4 d-flex align-items-center justify-content-center flex-column '>
                
                <div className='promo-image mb-5 d-flex align-items-center justify-content-center'>
                   <img src={image.promo6} className='img-fluid'/>
               </div>
                 <div className='mb-3'>
                   <h2 className='text-center'>Jollibee Summer Picnic Basket Promo</h2>
                 </div>

                 <div className='d-flex align-items-center gap-70 mt-4'>
                 <p><a class="link-opacity-100-hover" href="#">Learn More</a></p>


                   <div className='text-center'>
                   <button className='buttons'>Order Now</button>
                   </div>
                  
                 </div>
                </div>

                <div className='promo-content py-4 d-flex align-items-center justify-content-center flex-column '>
                
                <div className='promo-image mb-5 d-flex align-items-center justify-content-center'>
                   <img src={image.promo3} className='img-fluid'/>
               </div>
                 <div className='mb-3'>
                   <h2 className='text-center'>Jollibee Kids Party Is Back!</h2>
                 </div>

                 <div className='d-flex align-items-center gap-70 mt-4'>
                 <p><a class="link-opacity-100-hover" href="#">Learn More</a></p>


                   <div className='text-center'>
                   <button className='buttons'>Order Now</button>
                   </div>
                  
                 </div>
                </div>
    

                   
                </div>

                <div className="col-6">

                <div className='promo-content py-4 d-flex align-items-center justify-content-center flex-column '>
                
                <div className='promo-image mb-5 d-flex align-items-center justify-content-center'>
                   <img src={image.promo2} className='img-fluid'/>
               </div>
                 <div className='mb-3'>
                   <h2 className='text-center'>2-pc. Chickenjoy Value Meal Promo</h2>
                 </div>

                 <div className='d-flex align-items-center gap-70 mt-4'>
                 <p><a class="link-opacity-100-hover" href="#">Learn More</a></p>


                   <div className='text-center'>
                   <button className='buttons'>Order Now</button>
                   </div>
                  
                 </div>
                </div>

                <div className='promo-content py-4 d-flex align-items-center justify-content-center flex-column '>
                
                <div className='promo-image mb-5 d-flex align-items-center justify-content-center'>
                   <img src={image.promo5} className='img-fluid'/>
               </div>
                 <div className='mb-3'>
                   <h2 className='text-center'>Choose your Welcome Gift!</h2>
                 </div>

                 <div className='d-flex align-items-center gap-70 mt-4'>
                 <p><a class="link-opacity-100-hover" href="#">Learn More</a></p>


                   <div className='text-center'>
                   <button className='buttons'>Order Now</button>
                   </div>
                  
                 </div>
                </div>

                <div className='promo-content py-4 d-flex align-items-center justify-content-center flex-column '>
                
                <div className='promo-image1 mb-5 d-flex align-items-center justify-content-center'>
                   <img src={image.promo7} className='img-fluid'/>
               </div>
                 <div className='mb-3'>
                   <h2 className='text-center'>Jollibee BGC 3D Billboard Promo</h2>
                 </div>

                 <div className='d-flex align-items-center gap-70 mt-4'>
                 <p><a class="link-opacity-100-hover" href="#">Learn More</a></p>


                   <div className='text-center'>
                   <button className='buttons'>Order Now</button>
                   </div>
                  
                 </div>
                </div>

                </div>


              
            
        </div>
    </div>
   </section>
   </>
  )
}

export default Promo