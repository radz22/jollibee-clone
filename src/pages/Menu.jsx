import React from 'react'
import SingleMenu from './SingleMenu'
import MenuLefts from './MenuLefts'
import '../mediaquery/Menu.css'
const Menu = () => {
  return (
    <>
    <section className='menu-wrapper'>
         <div className="container-fluid">
          <div className="row d-flex gap-30">
           
           <div className="col-2">

                  <MenuLefts/>
           </div>

             <div className="col-9">
              <SingleMenu/>
            </div> 
           
      

          </div>
         </div>
    </section>
    </>
  )
}

export default Menu