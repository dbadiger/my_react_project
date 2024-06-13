/*
useCallback: useCallback is a react hook that lets you cache a function defination between re-renders.
It takes a function as an argument and returns a memoized version of that function.

useCallback(fn, dependencies)

dependencies are written in arrays
Call 'useCallback' at the top level of your component to cache a function defination between re-renders.

useEffect: useEffect is a react Hook that lets you synchronize a component with an external system.

*/

import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numAllowed,setNumAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password, setPassword] = useState("")

  

  //useRef Hook
  const passwordRef = useRef(null)


  const passwordGenerator=useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*-_=+-/{}[]~`"

    for (let i = 1; i <=length; i++) {
      let char= Math.floor(Math.random()*str.length +1) 
      pass=pass+str.charAt(char)
  
      }
    setPassword(pass)

  },
    [length, numAllowed, charAllowed, setPassword])
/*
in the above useCallback(), we have added setPassword as dependency. becausue of optimization.
if we change that from 'setPassword' to 'password' it will run infinite times(infinite times.. continuously generates password)

useCallback is responsibel for memoization. it optimises the function. keeps in cache memory.
if any changes happens in lenght, and function runs, then also store the function output in cache.
if any changes happens in characters, and function runs, then also store the function output in cache.
if any changes happens in numbers, and function runs, then also store the function output in cache.
*/
//--------------------------------------
/*
Don't compare dependencies of useCallback() with useEffect(). Both are used for different purpose.
*/


//If some changes happens then only run the useEffect() method
    useEffect(()=>{
      passwordGenerator()
    }, [length, numAllowed, charAllowed, passwordGenerator])



//Copy password to Clipboard
    const copyPasswordToClipboard=useCallback(()=>{
      passwordRef.current?.select();
      passwordRef.current.setSelectionRange(0,99);
      window.navigator.clipboard.writeText(password)
    }, [password])

  return (
    <>

  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 
  text-orange-500 bg-gray-700'>
  <h1 className='text-3xl text-center text-white font-semibold font-mono my-2'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text" value={password} className='outline-one w-full py-1 px-3' 
      placeholder='Password' readOnly
      ref={passwordRef}/>
      <button 
      onClick={copyPasswordToClipboard}
      className='outline-none bg-blue-600 text-white px-3 py-=.5 shrink-0'
      >Copy</button>
    </div>

    <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input type="range" min={6} max={100} value={length}
        className='curser-pointer'
        onChange={(e)=>setLength(e.target.value)}/>
        <label htmlFor="Length">{length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox" defaultChecked={numAllowed} id="numberInput"
        onChange={()=>{setNumAllowed((prev)=>!prev)}} />
        <label htmlFor="Length">Numbers</label>
      </div>

      <div className="flex items-center gap-x-1">
        <input type="checkbox" defaultChecked={charAllowed} id="numberInput"
        onChange={()=>{setCharAllowed((prev)=>!prev)}} />
        <label htmlFor="Length">Characters</label>
      </div>
    </div>


    </div>

    </>
  )
}

export default App


