import React from 'react'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
const Details = () => {
  const {id }=useParams();
  console.log(id);

    
  /* API Call */
  const [data,setData]=useState([]);

  useEffect(() => {
   axios.get("https://fakestoreapi.com/products/"+id).then((response)=>{
    setData(response.data);
   })
  }, [])

 console.log(data);

 

 


    return (
        <>
        <Header/>
        <div className='container'>
        
            <div className='img'>
                <img className='h-full w-full' src={data?.image} />
            </div>
            <div className='dtls mt-5'>
                <p className='title'>{data?.title}</p>
                <p className='price'> ₹ {data?.price}</p>
                <p className='ratting'>
                    <p className='p-2 bg-[#1fbf2c] text-lg font-semibold rounded-full text-white'>{data?.rating?.rate}</p>
                    <p className='p-2 text-lg font-semibold text-[#d6d5d4]'> 42 ratings and 22 reviews</p>
                </p>
                <p className='mt-5'>
                <span className='font-semibold'>Category : </span>{data.category}</p>
                <p className='w-[50%] mt-2'>
                    <span className='font-semibold'>Description :</span>
                    {data.description}
                </p>

                {/* Buttons */}
                <div className='flex w-[50%] gap-5 pt-10'>
                    <div className='p-2 text-xl font-semibold text-white bg-[#44db50]  rounded-md cursor-pointer'>ADD TO CART</div>
                    <div className='p-2 text-xl font-semibold text-white bg-[#c97e59] rounded-md cursor-pointer'>BUY NOW</div>
                </div>


            </div>
        </div>
        </>
    )
}

export default Details;