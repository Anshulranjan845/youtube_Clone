import React from 'react'

const Comment = ({comment}) => {

    const {name , text} = comment;
  return (
    <div className='flex gap-2 bg-gray-150 rounded-lg my-2 bg-gray-200 shadow-sm w-[90%]'>
      <img 
        className='h-8 p-2'
        src="https://www.svgrepo.com/show/350417/user-circle.svg" alt="user_icon" />
      <div>
       <h2 className='text-md font-bold'>{name}</h2>
       <p>{text}</p>
      </div>
    </div>
  )
}

export default Comment
