import React, { useEffect, useState } from 'react'
import Cartlog from '../Cartlog/Cartlog';
import axios from "axios"
import "./MapforCartlog.css"
import Filtter from '../Filtter/Filtter';

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
     
        
    } catch (error) {
        console.log(error)
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
      ( <h1>No Data Found</h1> ):
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
