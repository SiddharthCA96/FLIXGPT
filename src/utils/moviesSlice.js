import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:[],
        trailerVideo:null,
        popularMovies:[],
    },
    reducers:{
        //now playing movies ke liye 
        addNowPlayingMovies:(state,action)=>{
            //update the now playing state
            //console.log("Payload:", action.payload);
            state.nowPlayingMovies=action.payload
        },
        //popular movies ke liye
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        //trailer k liye
        addTrailer:(state,action)=>{
            state.trailerVideo=action.payload
        },

    }
});
//export all action
export const {addNowPlayingMovies,addTrailer,addPopularMovies} = moviesSlice.actions;
//export reducers
export default moviesSlice.reducer;