import CommentList from "./CommentList"
import { CommentData } from '../utils/CommentData'


const CommentContainer = () => {
  return (
    <div >   
      <CommentList CommentDataList={CommentData} />
       
    </div>
  )
}

export default CommentContainer;

