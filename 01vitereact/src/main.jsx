import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import {jsx as _jsx}from "react/jsx-runtime.js"
import App from './App.jsx'


function MyApp(){
  return (
    <div>Custom React App | DB</div>
  )
}
/*
const ReactElement={
  type:'a',
  props:{
    href:'https://google.com',
    target:'_blank'
  },
  Children:'Visit Now'
}*/


//Here how a variable is injected in React?
const newvariable = "New Variable Injected"
const reactElement = React.createElement(
  'a',
  {href:"https://google.com",target:'_blank'},
  'click me to visit Google',
  newvariable //Variable name is directly added.
)

const anotherElement = (
  <a href='https://google.com'>Google</a>
)


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // MyApp()
    //  <MyApp />
    // reactElement
    // ReactElement
    // anotherElement
    reactElement
  // </React.StrictMode>,
)
