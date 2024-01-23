import  React ,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { menuOpen } from '../utils/ToggleSideBar';
import { useSearchParams } from 'react-router-dom';
import useVideoStats from '../hooks/useVideoStats';
import VideoDetails from '../components/VideoDetails';
import Comment from '../components/Comment';

const WatchPage = () => {

    const dispatch = useDispatch();
    let [searchParams] = useSearchParams();
    const paramDetail=searchParams.get("v")
    useVideoStats(paramDetail);
    const VideoStat = useSelector(store=>store.youtube?.statSubscriberDetails);
    useEffect(()=>{
      dispatch(menuOpen());
  },[])
    if(!VideoStat) return;

   

  return (
    <div className='grid grid-cols-12 gap-2 ml-6'>
       <div className='p-2 mt-4 col-span-9'>
       <iframe 
         className='rounded-lg'
         width="850"
         height="465" 
         src={"https://www.youtube.com/embed/"+ searchParams.get("v")} 
         title="YouTube video player" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         allowFullScreen></iframe>
         <VideoDetails stat={VideoStat} />
         <Comment />
       </div>
       <div className='col-span-3'></div>
    </div>
  )
}

export default WatchPage
