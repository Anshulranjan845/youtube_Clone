import  React ,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { menuOpen } from '../utils/ToggleSideBar';
import { useSearchParams } from 'react-router-dom';
import useVideoStats from '../hooks/useVideoStats';
import VideoDetails from '../components/VideoDetails';
import CommentContainer from "../components/CommentContainer"
import LiveChat from '../components/LiveChat';
import { useState } from 'react';
import { addLiveComment } from '../utils/LiveCommentSlice';

const WatchPage = () => {
    const [livemessage, setLiveMessage] = useState(null);
    const dispatch = useDispatch();
    const toggleBar = useSelector(store=>store?.toggle?.toggleView);
    const [searchParams] = useSearchParams();
    const paramDetail=searchParams.get("v")
    useVideoStats(paramDetail);
    const VideoStat = useSelector(store=>store.youtube?.statSubscriberDetails);
    useEffect(()=>{
      dispatch(menuOpen());
  },[])
    if(!VideoStat) return;

    const handleSubmit=()=>{
      dispatch(addLiveComment({
        name:"Anshul Ranjan",
        message:livemessage
      }))
    }

   

  return (
    <div className={`grid grid-cols-12 gap-2 ml-6 ${!toggleBar && "grid-cols-12"} `}>
       <div className={`p-2 mt-4 col-span-9 ${!toggleBar && "col-span-12 md:p-2 md:col-span-8"}`}>
       <iframe 
         className='rounded-lg'
         width="850"
         height="465" 
         src={"https://www.youtube.com/embed/"+ searchParams.get("v")} 
         title="YouTube video player" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         allowFullScreen></iframe>
         <VideoDetails stat={VideoStat} />
         <CommentContainer />
       </div>
       <div className={`col-span-3 mt-4 p-2 ${!toggleBar && "col-span-12 md:py-2 md:col-span-4"}`}>
       <h2 className='font-semibold m-2 text-md text-gray-600 cursor-pointer hover:underline'>Chat</h2>
  
      <div className='border border-slate-200 rounded-lg w-full h-[450px] bg-slate-50 flex flex-col-reverse  overflow-y-scroll'>
             <LiveChat />
         </div>
         <form className='pt-2 m-2 flex' onSubmit={()=>{
          e.preventDefault();
          livemessage=""
         }}>
         <input 
           className='outline-none border border-b-black w-96 px-2' type="text" 
           placeholder='chat with user...'
           value={livemessage}
           onChange={e=>{setLiveMessage(e.target.value)}} />
         <button className='p-2 bg-gray-100 border shadow-lg space-l-2 rounded-lg' onClick={handleSubmit}>send</button>
       </form>
       </div>
       
    </div>
  )
}

export default WatchPage
