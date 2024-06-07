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
