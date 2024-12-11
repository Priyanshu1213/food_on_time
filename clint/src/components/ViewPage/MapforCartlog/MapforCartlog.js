import React, { useEffect, useState } from 'react'
import Cartlog from '../Cartlog/Cartlog';
import axios from "axios"
import "./MapforCartlog.css"
import Filtter from '../Filtter/Filtter';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MapforCartlog() {
  
    const [data,setData]= useState([]);
    
    const [products, setProducts] = useState([]);
    const [searchVal, setSearchVal] = useState("");


    useEffect(()=>{
  const temp=async ()=>{
    
    try {
        const fetcheddata=(await axios.get(`${process.env.REACT_APP_BASE_URL}/api/fooddetails`)).data
        setData(fetcheddata.response);
        setProducts(fetcheddata.response)

        if (fetcheddata.length <= 0) {
          toast("Fetching data, please wait...");
          
        } 
        
     
        
    } catch (error) {
        console.log(error)
        toast.error("Failed to fetch data. Please try again later.", {
          isLoading: false,
          autoClose: 3000,
        });
        
    }
     
  } 
  temp()

    },[])
    console.log(data)

    

    
    


    
    
    const handleCallback = (childData ) => {
      console.log(childData)
      const filtter = products.filter((item) => item.foodname.toLowerCase().includes(childData.toLowerCase()));
      setData(filtter)

      
      

    }


    
  const filterBySearch = (event) => {
    const query =event.target.value;
    setSearchVal(query)
    
    if(query ===''){
      setData(products)
    }
    else{
      const filterlist = products.filter((item) => item.foodname.toLowerCase().includes(searchVal.toLowerCase()) );
      
      setData(filterlist);
      
    }
    
  };
  // console.log(products)
  
  
  
  return (
    <div className='boxx'>


<a href='#scroll'>
  <Filtter parentCallback={handleCallback}/>
  
  </a>


<div className="search-header" id='scroll'>
<input type='search' placeholder='Search...' id="search-box" value={searchVal} onChange={filterBySearch} />
</div>


            
      {data.length<=0 ?
      ( <h1>Data Loading....</h1> ):
      (
           <div className='Map1' >
           {data.map((item)=>
           <Cartlog   priya={item}  />
           )}
           </div>
      )
      }      
    

    </div>
  )
}
