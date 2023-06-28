import { useState} from 'react';
import '../mediaquery/Header.css'
import { NavLink, Link } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdClose} from 'react-icons/md'

const Header = () => {

  const [Header, setHeader] = useState(false);

  const changeBackground  = () =>{
    if(window.scrollY >= 80 ) {
      setHeader(true);
    }else {
      setHeader(false);
    }
  }

 window.addEventListener('scroll', changeBackground)




 const [toggleMenu, setToggleMenu] = useState(false)

 const handleClose = () =>{
  setToggleMenu(!toggleMenu)
 }


  return (
    <>
    
     <section className={Header ? 'header active' : 'header '} >

     <div className="container-xxl">
      <div className="row ">
        <div className="col-12 d-flex justify-content-between align-items-center ">
          <div className='logo-image '>
           <Link to='/'>
           <img src='https://queen.jollibee.com.ph/2022/08/bmpzMYBj-jollibee-logo-2x.png' className='img-fluid'/>
            </Link> 

          </div>

<div className='close'>
          
          <div className='menu-link d-flex align-items-center gap-50 ms-5'>

            <NavLink to='delivery'>Delivery</NavLink>
            <NavLink to=''>Location</NavLink>

           
            <div className="dropdown">
            <a className="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
  Menu
  </a>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <Link to='menu' className='dropdown-item'>View Menu</Link>
    <Link to='menu' className='dropdown-item'>Multi-Delivery</Link>
  </ul>
</div>




<div className="dropdown">
  <a className="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
  Promos
  </a>

  <ul className="dropdown-menu " aria-labelledby="dropdownMenuLink">
  <Link to='/promo' className='dropdown-item'>Promotions</Link>
    <Link to='/promo' className='dropdown-item'>Gift Card</Link>
  </ul>
</div>


         

           
          </div>
          </div>

          


 <div className='d-flex gap-20 align-items-center'>

 <div onClick={handleClose}>
         {toggleMenu ? <MdClose  className='app-close' color='red' fontSize={40}  /> : <GiHamburgerMenu  className='app-open' color='white' fontSize={40}  /> }

         <div>

         {toggleMenu && (
        
        <div className='app__navbar-smallscreen-overlay'>

         
<div className='menu-link d-flex  align-items-center flex-column gap-50 mt-5'>

<NavLink to='delivery'>Delivery</NavLink>
<NavLink to=''>Location</NavLink>
<NavLink to='menu'>Menu</NavLink>
<NavLink to='promo'>Promotions</NavLink>








</div>
          

        </div>
    

   )}
         </div>
        </div>

        

        <button className='buttons'>Order Now</button>
  <div>
  </div>
  </div>
        





         </div>
        </div>
      </div>
   </section>

  
    </>
  

   
  )
}

export default Header