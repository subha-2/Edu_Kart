import React from 'react'


const Card = () => {
    return (
        <div
       
        className='animate-pulse w-[268px] h-[312px] m-4 shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] hover:shadow-[0_8px_16px_0_rgba(0,0,0,0.2)] transition duration-[0.3s] rounded-[5px] cursor-pointer'
      >
        <div className='w-full h-[180px] rounded-t-[5px] bg-[#d3d3d3]'></div>
        <div className='w-[95%] h-4 my-4 mx-2 bg-[#d3d3d3]'></div>
        <div className='w-[95%] h-4 my-4 mx-2 bg-[#d3d3d3]'></div>
        <div className='w-[25%] h-4 my-4 mx-2 bg-[#d3d3d3]'></div>
      </div>
    )
}

const Shimmer = () => {
    return (
        <div className='w-[90%] m-auto flex flex-wrap gap-5 justify-center mt-10'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

        </div>
    )
}

export default Shimmer