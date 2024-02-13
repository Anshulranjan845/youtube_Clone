import { useState } from 'react'
import { YOUTUBE_CDN_LOGO} from '../utils/Constants'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { SideBarToggleView } from '../utils/ToggleSideBar';
import useSuggestVideo from '../hooks/useSuggestVideo';
import {Link, useNavigate } from 'react-router-dom';
import SearchList from './SearchList';
import { CiSearch } from 'react-icons/ci';
import useSearchVideos from '../hooks/useSearchVideos';

const Header = () => {

  const [inputValue, setInputValue] = useState('');
  const[isshowing , setIsshowing] = useState(false);
  const dispatch = useDispatch();
  const suggested = useSelector(store=>store.Suggestion);
  const suggestedArray = useSelector(store=>store.Suggestion?.inputArr);
  const navigate = useNavigate();

 


  useSuggestVideo(inputValue);
  

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = ()=>{
    navigate(`/search?search_query=${encodeURIComponent(inputValue)}`);
  }


  const hangleToggle =()=>{
    dispatch(SideBarToggleView());
  }

  const handleClear = () => {
    setInputValue('');
  };


  const handleSuggestionClick = (query) => {
    navigate(`/search?search_query=${encodeURIComponent(query)}`);
  };

  return (
    <div className='grid grid-flow-col cursor-pointer sticky top-0 bg-white'>
      <div className='flex flex-row px-4 col-span-2 mr-20'>
        <RxHamburgerMenu 
        onClick={() => hangleToggle()}
         className='h-16 mx-2 text-xl'/>
      <a href='/'><img src={YOUTUBE_CDN_LOGO} 
            alt="youtube" 
            className='h-16 w-[120px]'/></a>
      </div>
      <div className=' flex flex-column col-span-8 relative'>
       <input type="text" 
          placeholder="   Search" 
          value={inputValue}
          onChange={handleChange} 
          onFocus={()=>setIsshowing(true)}
          onBlur={()=>setIsshowing(false)}
          className='relative w-full text-gray-700 border border-gray-400 rounded-l-full h-10 my-2 pl-4'/>
       {inputValue && (
        <span 
          className="absolute top-3 right-[16%] text-2xl cursor-pointer" 
          onClick={handleClear}>
          X
        </span>
      )}
      {inputValue &&<div className='flex'>
      {isshowing&&<ul className="absolute flex flex-col top-12 left-3 bg-white w-[83%] pl-2 px-[2px] text-md py-[20px] border border-gray-200 rounded-lg">
        {
           suggestedArray?.map((arr)=> (
          <Link key={arr} to={`/search?search_query=${arr}`}>
            <SearchList  arr={arr}/>
          </Link>
          ))
        }
      </ul>}
      </div>}
     
       <button
        className='bg-gray-100 p-2 -mx-2 w-20 border border-gray-400 h-10 my-2 rounded-r-full'
        onClick={handleSubmit}>
       <CiSearch
        className='text-2xl ml-4'/>
        </button>
      </div>
      <div
        className='flex flex-row py-2 m-2 ml-[170px] col-span-2 space-l-2'>
      <MdOutlineVideoCall
       className='mx-2 text-3xl cursor-pointer hover:bg-gray-200 rounded-full'/>
       <div className='relative'>
      <IoMdNotificationsOutline
       className='mx-2 text-3xl cursor-pointer hover:bg-gray-200 rounded-full'
        />
        <span className='bg-red-600 text-white rounded-full text-sm absolute right-0 top-0'>9+</span>
        </div>
      <FaUserCircle
       className='mx-2 text-3xl cursor-pointer hover:bg-gray-200 rounded-full' />
      </div>
    </div>
  )
}

export default Header
