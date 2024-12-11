import React from 'react' 
// import { useNavigate} from 'react-router-dom'
import "./Cartlog.css"
import { useDispatchCart, useStateCart } from '../../contextReducer'
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cartlog(props) {
  const Navigate = new useNavigate();
const dispatch=useDispatchCart();
const  state =useStateCart();

const add = async()=>{
  if(localStorage.getItem("authToken")){
    await dispatch({type:"Add", id:props.priya.id,foodimg:props.priya.foodimg,foodname:props.priya.foodname,foodprice:props.priya.foodprice})

  }
  else{
    Navigate('/')
    // alert("please login")
    toast.error("please login",{
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      
    });
    // Navigate('/login')
  }
  
  console.log(state);
}



//   const Navigate= new useNavigate()
// function add(){
//   Navigate("/cart" ,{state:{foodimg:props.priya.foodimg,
//     foodname:props.priya.foodname,foodprice:props.priya.foodprice,
  
//   }})
// }

  return (

    <>
        <div className='Cartlog_1'>

            <div className='Cartlog_11'>
              <img src={props.priya.foodimg} alt='img' width={100} height={100}/>
            </div>
            <div className='Cartlog_12'>
            <div className='Cartlog_121'>
             <h4> {props.priya.foodname}</h4>
             {/* <h4 className='rating1'> {props.priya.foodrating}</h4> */}
            </div>

            <div className='Cartlog_121'>
            <h4> {props.priya.foodprice}</h4>
            <button className='btu'  onClick={add}>Add Cart</button>
           </div>
            </div>

        </div>
    </>
  )
}
