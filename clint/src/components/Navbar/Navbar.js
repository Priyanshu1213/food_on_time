import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";

import Portal from "../../Portal";
import Cart from "../Cart/Cart";
import { useStateCart } from "../contextReducer";

export default function Navbar() {
  const  state =useStateCart();
  const [cartView,setCartView]=useState(false);
  const Navigate = new useNavigate();


  function yourorder(){
    
    if(localStorage.getItem("authToken")){
      Navigate('/myorder')
    }
    else{
      Navigate('/')
      alert("please login")
      // Navigate('/login')
    }
    
  }

  function cart(){
    // setCartView(true);
    if(localStorage.getItem("authToken")){
      setCartView(true);
    }
    else{
      Navigate('/')
      alert("please login")
      // Navigate('/login')
    }
    
  }

  function logout(){
    var a="yes"
    localStorage.removeItem("authToken");
    if(localStorage.removeItem("authToken")){
      a="yes"
    }
    else{
     a="no"
    }
    console.log(a)
    Navigate('/')
  }

  return (
    
    <div className="Nav">
      <div className="Navbar_1">
        <div className="Navbar_2">
          <img
          onClick={() => Navigate("/")}
            alt="load"
            src="https://image.pngaaa.com/511/412511-small.png" 
          />
        </div>
        {(!localStorage.getItem("authToken"))?
        <div className="Navbar_21">
        <div className="Navbar_211" onClick={() => Navigate("/login")}>Login-in</div>
        <div className="Navbar_211" onClick={() => Navigate("/signup")}>Sing-up</div>
        <div className="Navbar_211" onClick={cart} > Add Cart</div>
        {/* {cartView?<Portal onClose={()=>setCartView(false)}><Cart/></Portal>:null} */}
      </div>
      
      :
      <div className="Navbar_21">
        <div className="Navbar_211" onClick={yourorder} >My Order</div>
      <div className="Navbar_211" onClick={cart} > Add Cart {" "}
      {(!state.length <= 0)?   <Badge pill bg="danger">{state.length}</Badge>  : ""   }
      {/* <Badge pill bg="danger">{state.length}</Badge> */}
      </div>
      {cartView?<Portal onClose={()=>setCartView(false)}><Cart/></Portal>:null}
      <div className="Navbar_211" onClick={logout}>Logout</div>
    </div>}
        
      </div>
    </div>
  );
}
