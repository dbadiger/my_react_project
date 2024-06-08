import {useState} from "react"

function App() {
const [color, setColor]=useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200 "
      style={{backgroundColor:color}}>
      <h1 className="mb-4 text-4xl font-extrabold leading-none 
      tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white">Background Changer</h1>

      </div>
    </>
  )
}

export default App
