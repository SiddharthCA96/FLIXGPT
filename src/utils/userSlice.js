import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        //after login add user in the store
        addUser:(state,action)=>{
            //initial state will become action.payload
            return action.payload;
        },
        removeUser:(state,action)=>{
            //makes the state null
            return null;
        }
    }
});

//export all the actions from userslice.actions
export const {addUser,removeUser}=userSlice.actions;
//exporst reduces
export default userSlice.reducer;