import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

const Body = () => {
    //hooks will always be on top of the component
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

  return (
    <div>
        <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}
export default Body
