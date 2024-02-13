import React from 'react'
import Comment from './Comment'


const CommentList = ({CommentDataList}) => {
  return (
    <div>
    {CommentDataList?.map((commentView,index)=>{
      return <div>
      <Comment key={index} comment={commentView}/>
      <div className='pl-4 ml-2 border border-l-black'>
         <CommentList CommentDataList={commentView.replies} />
      </div>
      </div>
      
    })}

    </div>
  )
}

export default CommentList
