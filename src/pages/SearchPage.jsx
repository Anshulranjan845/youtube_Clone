import React from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import useSearchVideos from '../hooks/useSearchVideos';
import { useSelector } from 'react-redux';
import SearchedVideo from '../components/SearchedVideo';
import ButtonList from '../components/ButtonList';

const SearchPage = () => {
     
     const [searchParams] = useSearchParams();
     const queryText = searchParams.get(decodeURIComponent("search_query"));
     useSearchVideos(queryText);
     const searchResult =  useSelector(store=>store.youtube?.searchedVideoList);
      console.log(searchResult);
    if(!searchResult) return <h1>Fetching...</h1>


    return (
    <div>
    <ButtonList />
    <h1 className='p-4 ml-8 m-4 text-xl font-bold'>Latest of {queryText.toLocaleUpperCase()}</h1>
    {
  
      searchResult.map(search=>
        <Link key={search.id.videoId} to={"/watch?v="+search.id.videoId}>
        <SearchedVideo info={search} />
        </Link>)
      
    }
    </div>
  )
}

export default SearchPage
