import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const  Navigate=new useNavigate()
  
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  function handleChange(e){
    setData({...data,[e.target.name]:e.target.value})
    console.log(data)
}

  async function login(event){
    event.preventDefault();
    const response=await fetch(`${process.env.REACT_APP_BASE_URL}/api/loginuser`,{
      method:"post",
      headers:{
        'content-Type':'application/json'
      },
      body:JSON.stringify({
        email:  data.email,
        password: data.password
        
        
      })
    });
    const json1=await response.json()
    console.log(json1)
    if(!json1.success){
      // alert("Enter your correct credentials")
      toast.error("Enter your correct credentials",{
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
        
      });
    }
    else{
      // alert("loging successfully ")
      toast.success("loging successfully",{
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
      });
      
      localStorage.setItem("userEmail",data.email)
      localStorage.setItem("authToken",json1.authToken)
      // localStorage.setItem("admin",JSON.stringify(json1.authToken))

      // console.log(localStorage())
    Navigate('/')
    }
    // alert("done ")
    // Navigate('/')
  }



  return (
    <>
    <form >
      
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit" onClick={login}>Login</button>
      <button type="submit" onClick={()=>Navigate('/signup')} >Create New User</button>
    </form>
    </>
  );
};



export default Login;
