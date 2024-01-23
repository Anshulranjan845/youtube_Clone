import  { useEffect } from 'react'
import { YT_API_KEY } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { addSubscriberDetails } from '../utils/youtubeVideoSlice';

const useChannelDetail = (channelId) => {

    const dispatch = useDispatch();

    useEffect(()=>{
        YoutubeFetchChannelDetail();

     },[])
    
   const YoutubeFetchChannelDetail = async() =>{

    const data = await fetch("https://www.googleapis.com/youtube/v3/channels?part=statistics&id="+channelId+"&key="+YT_API_KEY);
    const json = await data.json();
    dispatch(addSubscriberDetails(json.items[0]))


   }
      
   
}

export default useChannelDetail
//https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=[YOUR_API_KEY]