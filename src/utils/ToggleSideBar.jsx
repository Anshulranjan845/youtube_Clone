import { createSlice } from "@reduxjs/toolkit";

const ToggleSide = createSlice({
    name: "toggle",
    initialState: {
        toggleView : true,
    },
    reducers: {
        SideBarToggleView : (state)=>{
            state.toggleView = !state.toggleView

        },
       menuOpen : (state) => {
         state.toggleView = false
       }
    },

})

export const { SideBarToggleView , menuOpen }= ToggleSide.actions;
export default ToggleSide.reducer;