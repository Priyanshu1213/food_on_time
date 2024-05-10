import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import './MyOrder.css';


export default function MyOrder() {
  // const navigate= useNavigate();
  

  // const uservalid=()=>{
  //   let  token = localStorage.getItem("authToken")
  //   if(token){
  //     console.log("login")
  //   }
  //   else{
  //     console.log("not login")
  //     // alert("please login first")
  //     navigate("/login")

  //   }
  // }



   const [orderData, setOrderData] = useState("");


const fetchMyOrder = async () => {
    try {
      console.log(localStorage.getItem('userEmail'));
      const response = await fetch("http://localhost:5000/api/myorderdisplay", {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: localStorage.getItem('userEmail')
        })
      });

      const temp = await response.json();
      setOrderData(temp); 
    } catch (error) {
      console.error("Error fetching my order:", error);
    }
  };

  useEffect(() => {
    // uservalid();
    fetchMyOrder();
  },[]); 

  console.log(orderData);



  return (
    
    <>
    <h1>Your Order</h1>

    <div className='container1111'>
        <div className='row'>

            {orderData !== ""  ? Array(orderData).map((data,i) => {
                 console.log(data);
                return (
                    
                    data.modd && data.modd[i].order_data.length>0  ? 
                    data.modd[i].order_data.slice(0).reverse().map((item) => {
                            // console.log(item);
                            return (
                                item.map((arrayData,k) => {
                                    // console.log(arrayData);
                                    return (
                                        <div className='display' key={k} >
                                            
                                            {arrayData.Order_date ? 
                                            
                                            <div className='orderdate'>
                                                {data = arrayData.Order_date}
                                                <div className='tp'> Total Price :- ₹{arrayData.Totalprice}</div>
                                            </div>
                                            
                                            
                                             :

                                                <div className='c1' >
                                                    <div className="c3" >
                                                        <img src={arrayData.foodimg} className="image" alt="..."  />
                                                        <div className="c4">
                                                            <h5 className="c5">{arrayData.foodname}</h5>
                                                            <div className='c6' >
                                                            <span className='s1'>{arrayData.Foodquantity}</span>
                                                                {/* <span className='s2'>{data}</span> */}
                                                                <div className=' c7' >
                                                                    ₹{arrayData.foodprice}/-
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>



                                            }
                                            
                                            

                                        </div>
                                    )
                                })

                            )
                        }) : "Oops"
                        
                )
            }) : "Oops"}



        </div>


    </div>

    
</>
  )
}



