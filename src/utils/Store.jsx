import { configureStore } from "@reduxjs/toolkit";
import youtubeReducer from "./youtubeVideoSlice";
import toggleReducer from "./ToggleSideBar"
import SuggestionReducer from "./SuggestionList"

const appStore = configureStore({
    reducer:{
      youtube : youtubeReducer,  
      toggle : toggleReducer,
      Suggestion:SuggestionReducer,
    }
})

export default appStore;