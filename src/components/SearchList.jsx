import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchList = ({arr}) => {
  return (
    <div className='flex flex-row items-center hover:bg-gray-100 rounded-lg'>
      <CiSearch />
      <li className='font-semibold p-2 text-sm'>{arr}</li>  
     </div>

  )
}

export default SearchList
