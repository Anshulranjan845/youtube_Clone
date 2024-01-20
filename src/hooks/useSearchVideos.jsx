import React, { useEffect } from 'react'
import { YT_API_KEY } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { addSearchedVideos } from '../utils/youtubeVideoSlice';

const useSearchVideos = (queryText) => {

    const dispatch = useDispatch();

 useEffect(() =>{
    SearchList();
  },[]);

  const SearchList = async()=>{
      const search = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&q="+queryText+"&key="+YT_API_KEY);
      const json = await search.json();
      dispatch(addSearchedVideos(json.items));
  }
}

export default useSearchVideos
