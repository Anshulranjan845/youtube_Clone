import  { useState } from 'react'
import { useSelector } from 'react-redux'
import useChannelDetail from '../hooks/useChannelDetail';
import formatViewCount from '../hooks/useDateCalculator';
import { AiOutlineLike } from "react-icons/ai";
import { CiBellOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import useTimestampdiff from '../hooks/useTimestampdiff';


const VideoDetails = ({stat}) => {
  const [isSubscribed , setIsSubscribed] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)
  const VideoDetail = useSelector(store=>store.youtube?.statVideoDetails);

  console.log(stat);
  
   
  const handleSub=()=>{
    setIsSubscribed(!isSubscribed);
  }   
  if(!stat) return null;
   const subCount =formatViewCount(stat?.statistics?.subscriberCount);
    
  if(!VideoDetail) return null;
     const {snippet ,statistics}= VideoDetail;
    const {channelId,channelTitle,description,publishedAt,title,thumbnails} = snippet;
     const {commentCount,likeCount,viewCount}= statistics;

     
     useChannelDetail(channelId);
  
  const publishTime = useTimestampdiff(publishedAt)
    
   
    const likes = formatViewCount(likeCount);
    
   
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
    <div>
    <div className="bg-gray-200 rounded-xl mt-4 w-[90%] p-2">
      <span className="text-sm text-gray-700 font-semibold">{(viewCount)} views</span>
      <span className="text-sm text-gray-700 mx-2 font-semibold">{publishTime}</span>
      <p className='mt-2 text-sm text-gray-800'>
      {isDescriptionExpanded ? description : `${description.slice(0, 150)}...`}
      <span
        className="text-gray-500 cursor-pointer"
        onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
      >
        {isDescriptionExpanded ? ' Show less' : ' Show more'}
      </span>
    </p>
    </div>
    <div>
    <h1 className="text-md font-semibold mt-2 tracking-tighter">{commentCount} comments</h1>
    
    </div>
</div>
    
    </div>
  )
}

export default VideoDetails
