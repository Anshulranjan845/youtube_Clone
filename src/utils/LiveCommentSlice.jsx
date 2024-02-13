import { createSlice } from "@reduxjs/toolkit";

const LiveCommentSlice = createSlice({
    name:"chat",
    initialState:{
        LiveComment:[],
    },
    reducers:{
        addLiveComment:(state,action)=>{
            state.LiveComment.splice(20,1);
            state.LiveComment.unshift(action.payload);
        }
    }
})

export const {addLiveComment} = LiveCommentSlice.actions;
export default LiveCommentSlice.reducer;