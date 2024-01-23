import { createSlice } from "@reduxjs/toolkit";

const youtubeVideoSlice = createSlice({
    name: "youtube",
    initialState: {
        addYoutubeVideo: null,
        searchedVideoList:null,
        channelVideoList:null,
        statVideoDetails:null,
        statSubscriberDetails:null
    },
    reducers:{
       addYoutubeMovie : (state , action) => {
            state.addYoutubeVideo = action.payload;
       },
       addSearchedVideos : (state , action) => {
            state.searchedVideoList = action.payload;
       },
       addChannelDetails:(state, action) => {
        state.channelVideoList = action.payload;
          
       },
       addVideoDetails:(state, action) => {
        state.statVideoDetails = action.payload;
          
       },
       addSubscriberDetails:(state, action) => {
        state.statSubscriberDetails = action.payload;
       }
    }
}

)
export const {addYoutubeMovie , addSearchedVideos , addChannelDetails , addVideoDetails, addSubscriberDetails} = youtubeVideoSlice.actions;
export default youtubeVideoSlice.reducer;