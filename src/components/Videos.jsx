import React from 'react'
import formatViewCount from '../hooks/useDateCalculator';
import useTimestampdiff from '../hooks/useTimestampdiff';
import { useSelector } from 'react-redux';

const Videos = ({info}) => {
  const toggle = useSelector(store=>store.toggle?.toggleView);
    const {snippet , statistics } = info;
    const { channelTitle , publishedAt , thumbnails ,title } = snippet;
    const {viewCount } = statistics;

    const formatViews = formatViewCount(viewCount);
    const formatTime = useTimestampdiff(publishedAt);

   
  return (
    <>
    {!toggle ? 
    (<div className='w-[400px] cursor-pointer p-6 m-4 grow'>
      <img src={thumbnails?.high?.url} className='rounded-lg w-transition ease-in-out delay-150 hover:translate-1 hover:scale-110 duration-300 ' />
      <h2 className='line-clamp-2 py-2 mb-2 font-semibold text-lg'>{title}</h2>
      <span className='text-gray-800 text-base block'>{channelTitle}</span>
      <div className='text-zinc-700 text-base py-2 flex flex-row'>
        <span className='mr-4'>{formatViews} views .</span>
        <span>{formatTime}</span>
      </div>
    </div>) :(
    <div className='w-[350px] cursor-pointer p-2 m-2 grow'>
      <img src={thumbnails?.medium?.url} className='rounded-lg w-transition ease-in-out delay-150 hover:translate-1 hover:scale-110 duration-300 ' />
      <h2 className='line-clamp-2 py-2 font-semibold'>{title}</h2>
      <span className='text-gray-800 text-sm block'>{channelTitle}</span>
      <div className='text-zinc-700 text-sm py-2 flex flex-row'>
        <span className='mr-4'>{formatViews} views .</span>
        <span>{formatTime}</span>
      </div>
    </div>)}
    </>
  )
}

export default Videos
