import React from 'react'
import useYoutubeVideo from '../hooks/useYoutubeVideo';
import { useSelector } from 'react-redux';
import Videos from './Videos';
import { Link } from 'react-router-dom';
import Shimmer from '../utils/Shimmer';


const VideoContainer = () => {
  const videos = useSelector(store => store.youtube?.addYoutubeVideo);

    useYoutubeVideo();

   

   if(!videos) return <Shimmer />;
   

    
  return (
    <div className='m-2 p-2 flex flex-wrap -z-20'>
    { 
      
        videos.map((video)=>(
          <Link key={video.id} to={"/watch?v="+video.id}>
          <Videos info={video} />
          </Link>))
     
         
    }
     
    </div>
  )
}

export default VideoContainer
