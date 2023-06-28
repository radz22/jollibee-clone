import React from 'react'
import { image } from '../constant'
import { useState } from 'react'
import {BsChevronUp, BsChevronDown} from 'react-icons/bs'
const MenuLefts = () => {

    const menuContent = [
        {
            imgUrl: image.menu1,
            title: "Bestsellers",
        },
    
        {
            imgUrl: image.menu2,
            title: "New Products",
        },
    
        {
            imgUrl: image.menu3,
            title: "Family Meal",
        },
    
    
        {
            imgUrl: image.menu4,
            title: "Breakfast",
        },
    
    
        {
            imgUrl: image.menu5,
            title: "Chickenjoy",
        },
    
        {
            imgUrl: image.menu6,
            title: "Burger",
        },
    
        
        {
            imgUrl: image.menu7,
            title: "Jolly Spaghetti",
        },
    
        {
            imgUrl: image.menu8,
            title: "Burger Steak",
        },
    
        {
            imgUrl: image.menu9,
            title: "Super Meals",
        },
    
        {
            imgUrl: image.menu10,
            title: "Chicken Sandwich",
        },
    
    
        
        {
            imgUrl: image.menu11,
            title: "Jolly Hotdog & Pies",
        },
    
    
        {
            imgUrl: image.menu12,
            title: "Palabok",
        },
    
        {
            imgUrl: image.menu13,
            title: "Fries & Sides",
        },
    
        {
            imgUrl: image.menu14,
            title: "Dessert",
        },
    
        {
            imgUrl: image.menu15,
            title: "Beverages",
        },
    
    
        {
            imgUrl: image.menu16,
            title: "Jolly Kiddie Meal",
        },
    ]
    
const  [isDrop, setIsDrop] = useState(false)

const handleDrop = () => {
    setIsDrop(!isDrop)
}

    
  return (
   <>
   <div className='menu-none'>

  
<div className='menu-content mb-5 d-flex  flex-column gap-50'>
   {menuContent?.map((menus, index) => {
    return (

        <div className='d-flex align-items-center gap-20' key={index}>
         <div className='menu-img'>
          <img src={menus.imgUrl} className='img-fluid'/>
        </div>
        <div>
            <p>{menus.title}</p>
        </div>
        </div>
 
        
    )
   })}
  </div>
  </div>
  



  <div className='menu-hidden'>
  <div onClick={handleDrop} className='w-100 d-flex justify-content-end '>
    {isDrop ? <BsChevronDown className='down mt-3 me-3' color='black' fontSize={30}/> : <BsChevronUp className='up mt-3 me-3' color='black' fontSize={30}/>}
   </div>
<h1 className='menu-h1 text-left ms-5'>Menu</h1>
  </div>
   
   {isDrop && 
   <div className='d-flex home-wrapper-3'>
    <div className="col-6">
        <div className='menu-hidden-content d-flex align-items-center'>
            <div className='menu-img'>
                <img src={image.menu1} className='img-fluid'/>
            </div>
            <p>Bestsellers</p>
        </div>


        <div className='menu-hidden-content d-flex align-items-center'>
            <div className='menu-img'>
                <img src={image.menu2} className='img-fluid'/>
            </div>
            <p>New Products</p>
        </div>

        <div className='menu-hidden-content d-flex align-items-center'>
            <div className='menu-img'>
                <img src={image.menu3} className='img-fluid'/>
            </div>
            <p>Family Meal</p>
        </div>

        <div className='menu-hidden-content d-flex align-items-center'>
            <div className='menu-img'>
                <img src={image.menu4} className='img-fluid'/>
            </div>
            <p>Breakfast</p>
        </div>

        <div className='menu-hidden-content d-flex align-items-center'>
            <div className='menu-img'>
                <img src={image.menu5} className='img-fluid'/>
            </div>
            <p>Chickenjoy</p>
        </div>

        <div className='menu-hidden-content d-flex align-items-center'>
            <div className='menu-img'>
                <img src={image.menu6} className='img-fluid'/>
            </div>
            <p>Burger</p>
        </div>

        <div className='menu-hidden-content d-flex align-items-center'>
            <div className='menu-img'>
                <img src={image.menu7} className='img-fluid'/>
            </div>
            <p>Jolly Spaghetti</p>
        </div>

        
        <div className='menu-hidden-content d-flex align-items-center'>
            <div className='menu-img'>
                <img src={image.menu8} className='img-fluid'/>
            </div>
            <p>Burger Steak</p>
        </div>
    </div>
    
    <div className="col-6">
        <div className='menu-hidden-content d-flex align-items-center'>
            <div className='menu-img'>
                <img src={image.menu9} className='img-fluid'/>
            </div>
            <p>Super Meals</p>
        </div>


        <div className='menu-hidden-content d-flex align-items-center'>
            <div className='menu-img'>
                <img src={image.menu10} className='img-fluid'/>
            </div>
            <p>Chicken Sandwich</p>
        </div>

        <div className='menu-hidden-content d-flex align-items-center'>
            <div className='menu-img'>
                <img src={image.menu11} className='img-fluid'/>
            </div>
            <p>Jolly Hotdog & Pies</p>
        </div>

        <div className='menu-hidden-content d-flex align-items-center'>
            <div className='menu-img'>
                <img src={image.menu12} className='img-fluid'/>
            </div>
            <p>Palabok</p>
        </div>

        <div className='menu-hidden-content d-flex align-items-center'>
            <div className='menu-img'>
                <img src={image.menu13} className='img-fluid'/>
            </div>
            <p>Fries & Sides</p>
        </div>

        <div className='menu-hidden-content d-flex align-items-center'>
            <div className='menu-img'>
                <img src={image.menu14} className='img-fluid'/>
            </div>
            <p>Dessert</p>
        </div>

        <div className='menu-hidden-content d-flex align-items-center'>
            <div className='menu-img'>
                <img src={image.menu15} className='img-fluid'/>
            </div>
            <p>Beverages</p>
        </div>

        
        <div className='menu-hidden-content d-flex align-items-center'>
            <div className='menu-img'>
                <img src={image.menu16} className='img-fluid'/>
            </div>
            <p>Jolly Kiddie Meal</p>
        </div>
    </div>
   </div>
   }
   </>
  )
}

export default MenuLefts