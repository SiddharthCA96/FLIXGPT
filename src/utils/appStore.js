import { configureStore } from "@reduxjs/toolkit";
import  userReducer from "./userSlice";
import moviesReducer from "./moviesSlice"
const appStore=configureStore(
    {
        //all the slices
        reducer:{
            user:userReducer,
            movies:moviesReducer,
        }
    }
);
export default appStore;