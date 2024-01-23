
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { PiUserSquare } from "react-icons/pi";
import { GoHistory } from "react-icons/go";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { FiScissors } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";
import { IoIosTrendingUp } from "react-icons/io";
import { PiMusicNote } from "react-icons/pi";
import { SiYoutubegaming } from "react-icons/si";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const toggle = useSelector(store=>store.toggle?.toggleView);

  if(!toggle) return null;

  return (
 <div className='m-2 cursor-pointer sticky top-20'>
       <div className='flex flex-row item-center px-2 hover:bg-gray-200 rounded-lg active:bg-black '>
        <Link to={"./Body"}><GoHome className='m-2 text-2xl'/></Link>
       <span className='my-2 mx-4 text-sm  active:text-white' >Home</span>
       </div>
       <div className='flex flex-row item-center px-2 hover:bg-gray-200 rounded-lg'>
        <SiYoutubeshorts className='m-2 text-2xl'/>
       <span className='my-2 mx-4 text-sm' >Shorts</span>
       </div>
       <div className='flex flex-row item-center px-2 hover:bg-gray-200 rounded-lg'>
        <MdOutlineSubscriptions className='m-2 text-2xl'/>
       <span className='my-2 mx-4 text-sm' >Subscriptions</span>
       </div>
       <hr className='my-2' />
       <h2 className='text-lg font-semibold m-2 hover:bg-gray-200 rounded-lg text-zinc-800 tracking-tighter ml-2'>You </h2>
       <div className='flex flex-row item-center px-2 hover:bg-gray-200 rounded-lg'>
        <PiUserSquare className='m-2 text-2xl'/>
       <span className='my-2 mx-4 text-sm' >Your Channel</span>
       </div>
       <div className='flex flex-row item-center px-2 hover:bg-gray-200 rounded-lg'>
        <GoHistory className='m-2 text-2xl'/>
       <span className='my-2 mx-4 text-sm' >History</span>
       </div>
       <div className='flex flex-row item-center px-2 hover:bg-gray-200 rounded-lg'>
        <GoVideo className='m-2 text-2xl'/>
       <span className='my-2 mx-4 text-sm' >Videos</span>
       </div>
        <div className='flex flex-row item-center px-2 hover:bg-gray-200 rounded-lg'>
        <MdOutlineWatchLater className='m-2 text-2xl'/>
       <span className='my-2 mx-4 text-sm' >Watch Later</span>
       </div>
       <div className='flex flex-row item-center px-2 hover:bg-gray-200 rounded-lg'>
        <FiScissors className='m-2 text-2xl'/>
       <span className='my-2 mx-4 text-sm' >Your Clips</span>
       </div>
       <div className='flex flex-row item-center px-2 hover:bg-gray-200 rounded-lg'>
        <AiOutlineLike className='m-2 text-2xl'/>
       <span className='my-2 mx-4 text-sm' >Liked Videos</span>
       </div>
       <hr className='my-2 ml-2'/>
       <h2 className='text-lg font-semibold m-2 hover:bg-gray-200 rounded-lg tracking-tighter text-zinc-800 ml-2'>Explore </h2>
       <div className='flex flex-row item-center px-2 hover:bg-gray-200 rounded-lg'>
        <IoIosTrendingUp className='m-2 text-2xl'/>
       <span className='my-2 mx-4 text-sm' >Trending</span>
       </div>
       <div className='flex flex-row item-center px-2 hover:bg-gray-200 rounded-lg'>
        <PiMusicNote  className='m-2 text-2xl'/>
       <span className='my-2 mx-4 text-sm' >Music</span>
       </div>
       <div className='flex flex-row item-center px-2 hover:bg-gray-200 rounded-lg'>
        <SiYoutubegaming className='m-2 text-2xl'/>
       <span className='my-2 mx-4 text-sm' >Gaming</span>
       </div>
    </div> 
  )
}

export default Sidebar
