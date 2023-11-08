
import axios from 'axios';
import { useState,useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';


const Body = () => {

  const [data,setData]=useState([]);

  useEffect(() => {
   axios.get("https://fakestoreapi.com/products").then((response)=>{
    setData(response.data);
   })
  }, [])
  
  
  return data.length===0 ? <Shimmer/>:
  (
    <div className='w-[90%] m-auto flex flex-wrap gap-5 justify-center mt-10'>
    {data.map((p) => (
      <div key={p.id} className='w-[268px] h-[312px]  rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-2'>
     <Link to={"/products/"+p.id} data={data} >
     <img className='w-[90%] m-auto h-[180px] rounded-t-[5px] pb-2' src={p.image} alt={p.title} />
     </Link>
       
        <p className=''>{p.title.slice(0,30)} ...</p>
        <p className='text-lg'>Price : {p.price}</p>
        <p className='text-lg'>Rating : {p.rating.rate} </p>
      </div>
    ))}
  </div>
  
  )
}

export default Body;