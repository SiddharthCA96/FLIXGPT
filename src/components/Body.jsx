import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'
const Body = () => {
    //hooks will always be on top of the component
    const dispatch=useDispatch();
    //alll the routings
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login />
        },
        {
            path:"/browse",
            element:<Browse />
        }
    ]);

    //sending the data to our store using useeffect hook
    useEffect(()=>{
        //using useeffect hook as i want to this work only once not at every rendering
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              const {uid,email,displayName} = user;
              //dispatch an action using dispatch(add user to db)
              dispatch(addUser({uid:uid,email:email,displayName:displayName}));
            } else {
              // User is signed out
              //dispatch an action remove user
              dispatch(removeUser());
            }
          });
    },[]);
  return (
    <div>
        <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}
export default Body
