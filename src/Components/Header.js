import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex w-[90%] m-auto justify-between border-b-2 p-5 border-[#d585e6]'>
      <div >
          <Link to="/">EduKart</Link>
      </div>
      <div className='flex w-[60%] justify-around'>
        <div>Home</div>
        <div>Products</div>
       <Link to="/cart"> <div>Cart</div></Link>
      </div>
    </div>
  )
}

export default Header;