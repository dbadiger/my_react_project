import './App.css'
import { useState } from 'react';

function App() {

  // let counter = 1;
  let [counter, setCounter]=useState(0)
  const addValue=function(){
    // console.log("Increment Button Clicked",Math.random())
   // counter++;
    // console.log(counter);
    if(counter>=20){
      alert("Counter reached maximum value")
    }else{
      setCounter(counter+1)
      setCounter(counter+1)
      setCounter(counter+1)
      setCounter(counter+1)
      //In the above four lines of code, we try to increment counter four times. But behid the secene, it will not increemnted four times.
      //Because, in react, state update is asynchronous. All four functions bunched together as one, all are doining same work, so increment will not happen four times.

      setCounter((prevCounter)=>prevCounter+1)  
      setCounter((prevCounter)=>prevCounter+1)  
      setCounter((prevCounter)=>prevCounter+1)  
      /*Here, prevCounter will give us an existing State. setCounter function accepts a call back function and a variable(prevCounter: which is last updated State). 
      PrevCounter will gives previously updated value, and in setCounter, one value will be incremented.So, we called setCounter function 3 times, value is incremented 3 times.
      
      We can alos write it as mention below */
      setCounter(prevCounter=>prevCounter+1)

    }
  }


  const decreaseValue=()=>{
    if(counter<=0){
      alert("Counter reached minimum value")
    }else{
      setCounter(counter-1)
    }
  }

  return (
    <>
     <h1>Hooks Project</h1>
     <h3>Counter Value: {counter}</h3>
     <button
     onClick={addValue}
     >Increment  {counter}</button><br/>

     <button
     onClick={decreaseValue}>Decrement</button>

     <p>Value:{counter}</p>
    </>
  )
}

export default App
