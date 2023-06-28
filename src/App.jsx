import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Delivery from './pages/Delivery'
import Promo from './pages/Promo'



function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='menu' element={<Menu/>}/> 
      <Route path='delivery' element={<Delivery/>}/> 
      <Route path='promo' element={<Promo/>}/> 
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
