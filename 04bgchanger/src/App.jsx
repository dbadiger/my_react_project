import {useState} from "react"

function App() {
const [color, setColor]=useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200 "
      style={{backgroundColor:color}}>
      <h1 className=" flex justify-center mb-4 text-4xl font-extrabold leading-none 
      tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white">Background Changer</h1>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"red"}}
         onClick={()=>setColor("red")} 
          >
            Red
          </button>

          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"Blue"}}
          onClick={()=>setColor("Blue")}>
            Blue
          </button>

          <button
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg" 
          style={{backgroundColor:"Yellow"}}
          onClick={()=>setColor("Yellow")}>
            Yellow
          </button>

          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"Orange"}}
          onClick={()=>setColor("Orange")}>
            Orange
          </button>

          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"Gray"}}
          onClick={()=>setColor("Gray")}>
            Gray
          </button>

          <button
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg" 
          style={{backgroundColor:"Pink"}}
          onClick={()=>setColor("Pink")}>
            Pink
          </button>

          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"Purple"}}
          onClick={()=>setColor("Purple")}
          >
            Purple
          </button>

          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"Brown"}}
          onClick={()=>setColor("Brown")}>
            Brown
          </button>

          <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor:"Black"}}
          onClick={()=>setColor("Black")}>
            Black
          </button>
         </div>
        
        </div>
      </div>
    </>
  )
}

export default App
