import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import formatViewCount from '../hooks/useDateCalculator';
import { AiOutlineLike } from "react-icons/ai";
import { CiBellOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";


const VideoStat = ({subCount}) => {

    const [isSubscribed , setIsSubscribed] = useState(false);
    const VideoDetail = useSelector(store=>store.youtube?.statVideoDetails);

    if(!VideoDetail) return null;
    const {snippet ,statistics}= VideoDetail;
   const {channelTitle,title,thumbnails} = snippet;
    const {likeCount}= statistics;

    const likes = formatViewCount(likeCount);

    const handleSub=()=>{
        setIsSubscribed(!isSubscribed);
      }


  return (
    <div>
    <h2 className='py-2 my-2 text-xl font-semibold'>{title}</h2>
    <div className='flex flex-row justify-between'>
      <div className='flex flex-row gap-4'>
      <div className='flex flex-row gap-2'>
      <img src={thumbnails?.default?.url} className='h-10 pt-2 rounded-full' />
      <div>
      <h2 className='text-md font-medium'>{channelTitle}</h2>
     <span className='text-xs text-gray-600'>{subCount} subscriber </span>
    
      </div>
      </div>
      {!isSubscribed ?<div className='bg-black text-white rounded-2xl p-2 px-4 m-2 text-sm font-semibold hover:bg-gray-800'>
        <button onClick={handleSub}>subscribe</button>
      </div>:
      <div className='flex flex-row gap-2 bg-gray-200 text-black rounded-2xl p-2 m-2 text-sm font-semibold'>
      <CiBellOn className="text-2xl" />
      <button onClick={handleSub}>
      
      subscribed</button>
      <IoIosArrowDown className="text-2xl" />
    </div>}
      
      </div>
      <div className='flex flex-row gap-2 font-semibold cursor-pointer'>
      <AiOutlineLike className='text-lg mt-[2px]}' />
        <span className='mr-44'>
          
        {likes}</span>
      </div>
     
    </div>
    
    </div>
  )
}

export default VideoStat

