import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:[],
    },
    reducers:{
        //now playing movies ke liye 
        addNowPlayingMovies(state,action){
            //update the now playing state
            //console.log("Payload:", action.payload);
            state.nowPlayingMovies=action.payload
        }
    }
});
//export all action
export const {addNowPlayingMovies} = moviesSlice.actions;
//export reducers
export default moviesSlice.reducer;