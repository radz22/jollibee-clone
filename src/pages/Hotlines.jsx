import React from 'react'
import { image } from '../constant'

const Hotlines = () => {

  const hotlines = [
    {
        image: image.order,
        title: "Order & Pick Up",
    },

    {
        image: image.download,
        title: "Download the App",
    },

    {
        image: image.phone,
        title: "#87000",
    },
  ];

  return (
   <>



    <div className='col-12'>
        <div className='hotline-single d-flex justify-content-evenly'>
           
           {hotlines?.map((line, index ) => {
             return (
                <div className='text-center' key={index}>
                    <div className='hotline-img'>
                  <img src={line.image} className='img-fluid'/>
                 </div>
                <div className='hotline-title'>
                <h1 className='mt-4'>{line.title}</h1>
               </div>
                </div>
             )
           
           })}
        </div>
    </div>

   
   </>
  )
}

export default Hotlines