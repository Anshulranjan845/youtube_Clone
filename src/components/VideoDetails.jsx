import React from "react";
import { useSelector } from 'react-redux'
import useChannelDetail from '../hooks/useChannelDetail';
import formatViewCount from '../hooks/useDateCalculator';
import VideoStat from './VideoStat';
import VideoDescription from './VideoDescription';


const VideoDetails = ({stat}) => {
  
 
  const VideoDetail = useSelector(store=>store.youtube?.statVideoDetails);
    
   const subCount =formatViewCount(stat?.statistics?.subscriberCount);
    
  if(!VideoDetail) return null;
     const {snippet ,statistics}= VideoDetail;
    const {channelId,description,publishedAt} = snippet;
     const {commentCount , viewCount}= statistics;
     useChannelDetail(channelId);
     

    
  return (
    <div>
       <VideoStat subCount={subCount} />
       <VideoDescription description={description} viewCount={viewCount} publishedAt={publishedAt} commentCount={commentCount}  />
    </div>
  )
}

export default VideoDetails
