import { configureStore } from "@reduxjs/toolkit";
import  useReducer from "./userSlice";
const appStore=configureStore(
    {
        //all the slices
        reducer:{
            user:useReducer,
        }
    }
);
export default appStore;