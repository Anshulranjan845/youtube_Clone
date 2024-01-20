import { useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addYoutubeMovie } from "../utils/youtubeVideoSlice";

const useYoutubeVideo = () =>{

    const dispatch = useDispatch();

    useEffect(()=>{
        YoutubeFetchVideo();
     },[])
    
   const YoutubeFetchVideo = async() =>{

    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    dispatch(addYoutubeMovie(json.items));

   }
      

}
 export default useYoutubeVideo;