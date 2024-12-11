import React from 'react'
import {BrowserRouter,Navigate,Route,Routes, useLocation} from "react-router-dom"

import SignUp from './components/Signup/Signup'
import Firstpage from './Firstpage'
import Login from './components/Login/Login'
import { CartProvider } from './components/contextReducer'
import MyOrder from './components/Order/MyOrder'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {


  function ProtectedRoute({ children }) {
    const token = localStorage.getItem('authToken');
    const location = useLocation();
  
    if (!token) {
      
      
      
      return <Navigate to="/login" state={{ from: location }} replace  />;
  
    }
    
    return children;
  }

  
  return (
    <div className='content'>
      
   <ToastContainer />
   
      
      <CartProvider>
      <BrowserRouter>
      <div className='nav1'><Navbar/></div>
      <Routes>
      
        <Route path="/" element={<Firstpage/>} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/myorder' element={<ProtectedRoute> <MyOrder/> </ProtectedRoute>}/>

        
        
          
          
        
      </Routes>
      </BrowserRouter>
       
      </CartProvider>

      
    </div>
  )
}

