import { useEffect } from 'react'
import { YT_SUGGESTION_API } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { addArrSuggestion, addSuggestion } from '../utils/SuggestionList';

const useSuggestVideo = (input) => { 

    const dispatch = useDispatch();

    const timer = useEffect(()=>{
        setTimeout(()=>{
            suggestedList();
        },200)

        return ()=>{
            clearTimeout(timer);
        }
      
    },[input])

    const suggestedList = async() =>{
       const data = await fetch(YT_SUGGESTION_API + input);
       const json = await data.json();
       dispatch(addSuggestion({
        [input]:json[1]}));
        dispatch(addArrSuggestion(json[1]));
        // console.log(json[1]);
    }
   
}

export default useSuggestVideo
