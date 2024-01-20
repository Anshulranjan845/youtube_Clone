import { createSlice } from "@reduxjs/toolkit";

const youtubeVideoSlice = createSlice({
    name: "youtube",
    initialState: {
        addYoutubeVideo: null,
        searchedVideoList:null,
    },
    reducers:{
       addYoutubeMovie : (state , action) => {
            state.addYoutubeVideo = action.payload;
       },
       addSearchedVideos : (state , action) => {
            state.searchedVideoList = action.payload;
       }
    }
}

)
export const {addYoutubeMovie , addSearchedVideos} = youtubeVideoSlice.actions;
export default youtubeVideoSlice.reducer;