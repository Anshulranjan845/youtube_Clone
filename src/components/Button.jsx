import React from 'react'

const Button = ({buttonArr}) => {

  return (
    <div className='p-2 m-2 bg-gray-200 font-semibold text-sm rounded-lg hover:bg-gray-300'>
       <button>{buttonArr}</button>
    </div>
  )
}

export default Button
