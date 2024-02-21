import React, { useState } from 'react'
import { ARR_BUTTON } from '../utils/Constants'

const ButtonList = () => {

  const [activeValue,setActiveValue] = useState('All');

  const handleClick =(arr) => {
    setActiveValue(arr);
    console.log("value: " + arr);
  };
  return (
    <div className='flex flex-row m-2 p-2 sticky top-16 bg-white z-10'>
    {
        ARR_BUTTON.map((arr , index)=>(
          <div  key={index} className='p-2 m-2 bg-gray-200 font-semibold text-sm cursor-pointer rounded-lg hover:bg-gray-300 '>
          <button className='cursor-pointer' onClick={()=>handleClick(arr)}>{arr}</button>
       </div>))
 
    }
    </div>
  )
}

export default ButtonList
