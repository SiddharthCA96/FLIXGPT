import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:[],
        trailerVideo:null,
    },
    reducers:{
        //now playing movies ke liye 
        addNowPlayingMovies:(state,action)=>{
            //update the now playing state
            //console.log("Payload:", action.payload);
            state.nowPlayingMovies=action.payload
        },
        addTrailer:(state,action)=>{
            state.trailerVideo=action.payload
        }
    }
});
//export all action
export const {addNowPlayingMovies,addTrailer} = moviesSlice.actions;
//export reducers
export default moviesSlice.reducer;