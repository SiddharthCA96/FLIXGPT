import { configureStore } from "@reduxjs/toolkit";
import  userReducer from "./userSlice";
const appStore=configureStore(
    {
        //all the slices
        reducer:{
            user:userReducer,
        }
    }
);
export default appStore;