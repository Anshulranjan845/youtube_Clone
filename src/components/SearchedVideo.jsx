import React from 'react'
import useTimestampdiff from '../hooks/useTimestampdiff';

const SearchedVideo = ({info}) => {

  console.log(info);
  const{id , snippet}= info;
  const {videoId}=id;
  const{channelTitle , description, publishedAt,thumbnails,title  }= snippet;

  const time = useTimestampdiff(publishedAt);


  return (
    <>
    <div className='flex flex-row p-4 m-4 gap-2 text-lg font-semibold'> 
       <div className='px-2 mx-2'>
        <img src={thumbnails?.medium?.url} className='rounded-lg' alt="_blank" />
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
