import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
const Cart = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/carts").then((response) => {
            setData(response.data);
        })
    }, []);

    console.log(data);

    return (
        <div className='w-[90%] m-auto '>
            


        </div>
    )
}

export default Cart;