import React, { useEffect } from 'react'
import { addVideoDetails } from '../utils/youtubeVideoSlice';
import { useDispatch } from 'react-redux';
import { YT_API_KEY } from '../utils/Constants';

const useVideoStats = (paramDetail) => {

    const dispatch = useDispatch();
    useEffect(()=>{
        YoutubeStatVideo();
     },[])
    
   const YoutubeStatVideo = async() =>{

    const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="+paramDetail+"&key="+YT_API_KEY);
    const json = await data.json();
    dispatch(addVideoDetails(json.items[0]));
}
}
export default useVideoStats;
