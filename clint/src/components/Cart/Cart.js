



import "./Cart.css"
import React from 'react'
import { useDispatchCart,useStateCart } from '../contextReducer';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cart() {

 
  const handleFoodQuantityChange = (index, event) => {
    const newQuantity = parseInt(event.target.value);
    dispatch({ type: "updateQuantity", index: index, quantity: newQuantity });
    // console.log(newQuantity)
  };
  



  const dispatch=useDispatchCart();
const  state =useStateCart();

if(state.length === 0){
  return(
    <h1 className="empty">Cart is empty</h1>
  )
}



const handlepay = async () => {

  let userEmail = localStorage.getItem("userEmail");
  // console.log(data,localStorage.getItem("userEmail"),new Date())
  let response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/orderdetails`, {
    // credentials: 'include',
    // Origin:"http://localhost:3000/login",
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      order_data: state,
      email: userEmail,
      order_date: new Date().toDateString(),
      totalprice:totalprice
    })
  });
  // alert("order received")
  toast.success("order received",{
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    
  });
  console.log("JSON RESPONSE:::::", response)
  if (response.status === 200) {
    dispatch({ type: "DROP" })
  }
}




const totalprice=state.reduce((total,food)=>total+(food.foodprice*food.Foodquantity),0);


  return (


<div>

<div className='container2222' >
  <table className='container3333 '>
    <thead className=' container4444'>
      <tr>
        <th scope='col' >#</th>
        <th scope='col' >Image</th>
        <th scope='col' >Name</th>
        <th scope='col' >Price</th>
        <th scope='col' >Quantity</th>
        <th scope='col' ></th>
      </tr>
    </thead>
    <tbody>
    {state.map((Food,index)=>(
        <tr>
          <th scope='row'>{index+1}</th>
          <td><img className="fimg" alt='foodimg' src={Food.foodimg}/></td>
          <td>{Food.foodname}</td>
          <td>{Food.foodprice*Food.Foodquantity}</td>
          <td><input  type='number' onChange={(event) => handleFoodQuantityChange(index, event)}  min="1" name='Foodquantity'  value={Food.Foodquantity}/></td>
          <td><button onClick={()=>dispatch({type:"remove",index:index})}>X</button></td>
        </tr>
      ))}
    </tbody>
  </table>
  <div><h3 className='tttt'>Total Price: {totalprice}/-</h3></div>
  <div>
    <button className='checkout' onClick={handlepay} > Check Out </button>
  </div>
</div>



</div>

  )
}


