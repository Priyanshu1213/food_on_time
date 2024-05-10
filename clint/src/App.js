import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"

import SignUp from './components/Signup/Signup'
import Firstpage from './Firstpage'
import Login from './components/Login/Login'
import { CartProvider } from './components/contextReducer'
import MyOrder from './components/Order/MyOrder'
import Navbar from './components/Navbar/Navbar'
import './App.css'


export default function App() {

  
  return (
    <div className='content'>
      
      <CartProvider>
      <BrowserRouter>
      <div className='nav1'><Navbar/></div>
      <Routes>
      
        <Route path="/" element={<Firstpage/>} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/myorder' element={<MyOrder/>}/>

        
        
          
          
        
      </Routes>
      </BrowserRouter>
       
      </CartProvider>
    </div>
  )
}

