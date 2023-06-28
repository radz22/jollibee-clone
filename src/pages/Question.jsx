import React from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import { useState } from 'react'
const Question = () => {

   const [background, setBackground] = useState(false)
   const [backgroundd, setBackgroundd] = useState(false)
   const [backgrounddd, setBackgrounddd] = useState(false)
   const [backgroundddd, setBackgroundddd] = useState(false)
   const [backgrounddddd, setBackgrounddddd] = useState(false)
   const [backgroundddddd, setBackgroundddddd] = useState(false)


  



    /* function-1*/
    const [isOpen, setIsOpen] = useState(false)
   

  const toggling  = () => {
    setIsOpen(!isOpen)
    setBackground(!background)
  
  }


  /* function-2*/
 


  const [isOpenn, setIsOpenn] = useState(false)

  const togglingg  = () => {
    setIsOpenn(!isOpenn)
    setBackgroundd(!backgroundd)
   
   
  }


/*function-3 */

const [isOpennn, setIsOpennn] = useState(false)

const togglinggg  = () => {
    setIsOpennn(!isOpennn)
    setBackgrounddd(!backgrounddd)
}


/*function-4 */

const [isOpennnn, setIsOpennnn] = useState(false)

const togglingggg  = () => {
    setIsOpennnn(!isOpennnn)
    setBackgroundddd(!backgroundddd)
}


/*function-5 */

const [isOpennnnn, setIsOpennnnn] = useState(false)

const togglinggggg  = () => {
    setIsOpennnnn(!isOpennnnn)
    setBackgrounddddd(!backgrounddddd)
}



/*function-6 */

const [isOpennnnnn, setIsOpennnnnn] = useState(false)

const togglingggggg  = () => {
    setIsOpennnnnn(!isOpennnnnn)
    setBackgroundddddd(!backgroundddddd)
}

  return (
    <>



<div className="col-12 py-3 ">
   <div className='questionnaire-content d-flex align-items-center justify-content-between mt-5'>
    
   <div className="col-6">
    
    <div className='question-title '>
       
        <div className={background ? 'red' : 'white'}>
        <h1>How do I order thru Jollibee delivery?</h1>
        </div>
      
  
    


        {isOpen  && 
       <div className='question-content mt-5'>
        <div className='question-content-title'>
            <h2>You may order thru the following ways:</h2>
        </div>

        <div className='question-content-bottom mt-4'>
          <ul>
            <li>Order thru the Jollibee mobile app</li>
            <li>#87000 Hotline delivery accepts cash and credit card payments.</li>
            <li>Visit the JollibeeDelivery.com website</li>
          </ul>
        </div>
       </div>
      }
    </div>
   </div>


 <div className="col-6 ">

 <div className='questionnaire d-flex align-items-end justify-content-end ' onClick={toggling}>
         {isOpen ? <AiOutlineMinus color='red' fontSize={30} /> : <AiOutlinePlus color='red' fontSize={30}  /> }
        </div>



   </div>


 </div>

    </div>

     
    <div className="col-12 py-3 ">
   <div className='questionnaire-content d-flex align-items-center justify-content-between mt-5'>
    
   <div className="col-6">
    
    <div className='question-title '>
        
        <div className={backgroundd ? 'red' : 'white'}>
        <h1>How much is the delivery fee of Jollibee Delivery?</h1>
        </div>
      

     
   
      
  
    


        {isOpenn  && 
       <div className='question-content mt-5'>
        <div className='question-content-title'>
            <h2>The Delivery Fee is 10% on top of the product Dine-in SRP.</h2>
        </div>
       </div>
      }
    </div>
   </div>


 <div className="col-6 ">

 <div className='questionnaire d-flex align-items-end justify-content-end ' onClick={togglingg}>
         {isOpenn ? <AiOutlineMinus color='red' fontSize={30} /> : <AiOutlinePlus color='red' fontSize={30}  /> }
        </div>

    

   </div>


 </div>

    </div>



    <div className="col-12 py-3 ">
   <div className='questionnaire-content d-flex align-items-center justify-content-between mt-5'>
    
   <div className="col-6">
    
    <div className='question-title '>
        <div className={backgrounddd ? 'red' : 'white'}>
        <h1>Kindly expect your orders to arrive between 45mins to 1hour.</h1>
        </div>
       

     
   
      
  
    


        {isOpennn  && 
       <div className='question-content mt-5'>
        <div className='question-content-title'>
            <h2>Kindly expect your orders to arrive between 45mins to 1hour.</h2>
        </div>
       </div>
      }
    </div>
   </div>


 <div className="col-6 ">

 <div className='questionnaire d-flex align-items-end justify-content-end ' onClick={togglinggg}>
         {isOpennn ? <AiOutlineMinus color='red' fontSize={30} /> : <AiOutlinePlus color='red' fontSize={30}  /> }
        </div>
        


   </div>


 </div>

    </div>


    <div className="col-12 py-3 ">
   <div className='questionnaire-content d-flex align-items-center justify-content-between mt-5'>
    
   <div className="col-6">
    
    <div className='question-title '>
        <div className={backgroundddd ? 'red' : 'white'}>
        <h1>Whats the minimum and maximum order purchase for delivery? </h1>
        </div>
      

     
   
      
  
    


        {isOpennnn  && 
       <div className='question-content mt-5'>
        <div className='question-content-title'>
            <h2>Minimum order of P200, Maximum of P5500 (inclusive of delivery fee)</h2>
        </div>
       </div>
      }
    </div>
   </div>


 <div className="col-6 ">

 <div className='questionnaire d-flex align-items-end justify-content-end ' onClick={togglingggg}>
         {isOpennnn ? <AiOutlineMinus color='red' fontSize={30} /> : <AiOutlinePlus color='red' fontSize={30}  /> }
        </div>
        


   </div>


 </div>

    </div>

    <div className="col-12 py-3 ">
   <div className='questionnaire-content d-flex align-items-center justify-content-between mt-5'>
    
   <div className="col-6">
    
    <div className='question-title '>
       
      <div className={backgrounddddd ? 'red' : 'white'}>
      <h1>What are the payment options available for delivery?</h1>
      </div>
      
  
    


        {isOpennnnn  && 
       <div className='question-content mt-5'>
       
        <div className='question-content-bottom mt-4'>
          <ul>
            <li>Jollibeedelivery.com or the Jollibee Mobile App accepts debit, credit card payments through Pesopay and cashless payments thru GCash and Paymaya on orders.</li>
            <li>#87000 Hotline delivery accepts cash and credit card payments.</li>
           
          </ul>
        </div>
       </div>
      }
    </div>
   </div>


 <div className="col-6 ">

 <div className='questionnaire d-flex align-items-end justify-content-end ' onClick={togglinggggg}>
         {isOpennnnn ? <AiOutlineMinus color='red' fontSize={30} /> : <AiOutlinePlus color='red' fontSize={30}  /> }
        </div>



   </div>


 </div>

    </div>


    <div className="col-12 py-3 ">
   <div className='questionnaire-content d-flex align-items-center justify-content-between mt-5'>
    
   <div className="col-6">
    
    <div className='question-title '>
        
       <div className={backgroundddddd ? 'red' : 'white'}>
       <h1>Do you honor senior citizen / PWD discounts?</h1>
       </div>

     
   
      
  
    


        {isOpennnnnn  && 
       <div className='question-content mt-5'>
        <div className='question-content-title'>
            <h2>Senior citizen and PWD discounts are honored thru Jollibee Delivery, as long as senior citizen / PWD ID is presented upon delivery.</h2>
        </div>
       </div>
      }
    </div>
   </div>


 <div className="col-6 ">

 <div className='questionnaire d-flex align-items-end justify-content-end ' onClick={togglingggggg}>
         {isOpennnnnn ? <AiOutlineMinus color='red' fontSize={30} /> : <AiOutlinePlus color='red' fontSize={30}  /> }
        </div>
        


   </div>


 </div>

    </div>
    </>
  )
}

export default Question