import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { menuOpen } from '../utils/ToggleSideBar';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {

    const dispatch = useDispatch();
    let [searchParams] = useSearchParams();

    useEffect(()=>{
        dispatch(menuOpen());
    },[])

  return (
    <div className='grid grid-cols-12'>
       <div className='p-2 mt-4 col-span-9'>
       <iframe 
         className='rounded-lg'
         width="850"
         height="460" 
         src={"https://www.youtube.com/embed/"+ searchParams.get("v")} 
         title="YouTube video player" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         allowFullScreen></iframe>
       </div>
       <div className='col-span-3'></div>
    </div>
  )
}

export default WatchPage
