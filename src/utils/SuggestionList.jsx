import { createSlice } from "@reduxjs/toolkit";

const SuggestionList = createSlice({
    name: 'Suggestion',
    initialState:{
        inputArr:null,
    },
    reducers: {
        addSuggestion:(state,action)=>{
          return {...state,...action.payload};
        },
        addArrSuggestion:(state,action)=>{
           state.inputArr = action.payload;
        }
    },
})

export const {addSuggestion , addArrSuggestion}= SuggestionList.actions;
export default SuggestionList.reducer;