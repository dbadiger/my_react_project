import React from 'react'
import Navbar from "./Navbar"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Login from './Components/Login'
import User from './Components/User'


function App() {
 const router = createBrowserRouter([
  {
    path:"/",
    element:<><Navbar/><Home/></>
  },
  {
    path:"/about-us",
    element:<><Navbar/><About/></>
  },
  {
    path:"/contact-us",
    element:<><Navbar/><Contact/></>
  },
  {
    path:"/login",
    element:<><Navbar/><Login/></>
  },
  {
    path:"/user/:username",
    element:<><Navbar/><User/></>
  },
 ])

  return (
    <>
      <h1>React Router Class</h1>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
