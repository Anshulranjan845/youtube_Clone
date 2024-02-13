import React, { useEffect } from 'react'
import ChatContainer from './ChatContainer'
import { useDispatch, useSelector } from 'react-redux'
import { addLiveComment } from '../utils/LiveCommentSlice';
import { generateRandomName, generateRandomText } from '../utils/helper';

const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessage = useSelector(store=>store?.LiveCommentStore?.LiveComment);

    useEffect(() =>{
       const i = setInterval(() =>{
          dispatch(addLiveComment({
            name:generateRandomName(),
            message:generateRandomText(20),
          }
          ))
       },1500);
       return ()=>clearInterval(i);
    },[])
  return (
    <div className='px-2'>

   
      <div className='flex flex-col-reverse'>
      {
        chatMessage.map(chatIn=>(<ChatContainer  Chatname={chatIn.name} Chatmessage={chatIn.message}/>))
    
                
  }
           
        
      </div>
    </div>
  )
}

export default LiveChat
