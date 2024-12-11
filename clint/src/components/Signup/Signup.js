import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
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

  async function signup(event){
    event.preventDefault();
    const response=await fetch(`${process.env.REACT_APP_BASE_URL}/api/creatuser`,{
      method:"post",
      headers:{
        'content-Type':'application/json'
      },
      body:JSON.stringify({
        name:data.name,
        email:  data.email,
        password: data.password
        
        
      })
    });
    const json=await response.json()
    console.log(json)
    if(!json.success){
      // alert("Enter Valid Credentials")
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
      // alert("create successfully ")
      toast.success("register successfully",{
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
      });
    Navigate('/login')
    }
    
  }



  return (
    <div className='m1'>
    
    <form >
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
      </label>
     
      <br />

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
      <button type="submit" onClick={signup}>Sign Up</button>
      <button type="submit" onClick={()=>Navigate('/login')} >Already Created</button>
    </form>
    </div>
  );
};



export default SignUp;
