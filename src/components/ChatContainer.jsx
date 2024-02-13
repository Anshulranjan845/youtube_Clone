import React from 'react'

const ChatContainer = ({Chatname , Chatmessage}) => {
  
  return (
    <>
    <div className='flex space-x-2 items-center hover:bg-slate-200 cursor-pointer'>
      <img 
       className='h-8 p-2'
       src="https://www.svgrepo.com/show/350417/user-circle.svg" alt="user_icon" />

       <div className='space-x-2'>
         <span className='font-bold text-gray-500'>{Chatname}</span>
         <span className='text-xs'>{Chatmessage}</span>
       </div>
    </div>
    </>
  )
}

export default ChatContainer
