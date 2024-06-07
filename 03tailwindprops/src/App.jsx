import { useState } from 'react'
import Card from './Components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const myObj = {
    emal:"da@ba.com",
    password:123
  }

  const newArr=[1,2,3,4]
  return (
    <>
     <h1 className='bg-orange-300 text-white p-4 rounded-xl mb-4'>Tailwind Test</h1>
     <Card name="Ashaa" someObj = {myObj} someArr = {newArr}/>
     <Card/>

    </>
  )
}

export default App
