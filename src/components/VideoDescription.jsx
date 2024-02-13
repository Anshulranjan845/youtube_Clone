import React, { useState } from 'react'
import useTimestampdiff from '../hooks/useTimestampdiff';

const VideoDescription = ({description,publishedAt,commentCount,viewCount}) => {
    
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)
    
    const publishTime = useTimestampdiff(publishedAt);


  return (
    <div>
    <div className="bg-gray-200 rounded-xl mt-4 w-[90%] p-2">
      <span className="text-sm text-gray-700 font-semibold">{(viewCount)} views</span>
      <span className="text-sm text-gray-700 mx-2 font-semibold">{publishTime}</span>
      <p className='mt-2 text-sm text-gray-800'>
      {isDescriptionExpanded ? description : `${description.slice(0, 150)}...`}
      <span
        className="text-gray-500 cursor-pointer"
        onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
      >
        {isDescriptionExpanded ? ' Show less' : ' Show more'}
      </span>
    </p>
    </div>
    <div>
    <h1 className="text-md font-semibold mt-2 tracking-tighter">{commentCount} comments</h1>
    
    </div>
      
    </div>
  )
}

export default VideoDescription
