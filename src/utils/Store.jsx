import { configureStore } from "@reduxjs/toolkit";
import youtubeReducer from "./youtubeVideoSlice";
import toggleReducer from "./ToggleSideBar"
import SuggestionReducer from "./SuggestionList"
import LiveCommentReducer from "./LiveCommentSlice"

const appStore = configureStore({
    reducer:{
      youtube : youtubeReducer,  
      toggle : toggleReducer,
      Suggestion:SuggestionReducer,
      LiveCommentStore:LiveCommentReducer
    }
})

export default appStore;