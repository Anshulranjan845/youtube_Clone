import React from 'react'
import useTimestampdiff from '../hooks/useTimestampdiff';
import useChannelDetail from '../hooks/useChannelDetail';

const SearchedVideo = ({info}) => {

  const{id , snippet , kind  }= info;
  const {videoId}=id;
  const{channelTitle , description, publishedAt,thumbnails,title ,channelId  }= snippet;

  const time = useTimestampdiff(publishedAt);
  useChannelDetail(channelId);


  return (
    <>
    <div className='flex flex-row p-4 m-4 gap-2 text-lg font-semibold'> 
       <div className='px-2 mx-2'>
       {
        ([kind] =="youtube#channel")? (<img src={thumbnails?.default
          ?.url} className='rounded-full' alt="_blank" />):(
        <img src={thumbnails?.medium?.url} className='rounded-lg' alt="_blank" />)
       }
       </div>
       <ul>
          <li classname="text-lg">{title}</li>
          <li className='text-gray-500 text-sm my-2 font-normal'>{time}</li>
          <li className='text-gray-500 text-sm my-2 font-normal'>{channelTitle}</li>
          <li className='text-gray-500 text-sm my-2 font-normal'>{description}</li>
       </ul>
    </div>
    </>
  )
  }

export default SearchedVideo;
