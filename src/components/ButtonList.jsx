import React from 'react'
import Button from './Button'
import { ARR_BUTTON } from '../utils/Constants'

const ButtonList = () => {
  return (
    <div className='flex flex-row m-2 p-2'>
    {
        ARR_BUTTON.map((arr , index)=>(<Button key={index} buttonArr={arr}/>))
 
    }
    </div>
  )
}

export default ButtonList
