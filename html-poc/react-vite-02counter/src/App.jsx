import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  
  // let counter = 5

  const incrementValue = () => {
    if(counter < 20){
      setCounter(counter + 1);
      console.log(`Value incremented. ${counter} ${Math.random()}`);
    }
  }

  const decrementValue = () => {
    if(counter > 0){
      setCounter(counter - 1);
      console.log(`Value decremented. ${counter} ${Math.random()}`);
    }
  }

  return (
    <>
      <h2>Counter value: {counter}</h2>
      <button onClick={incrementValue}>Increment value</button>
      <br />
      <button onClick={decrementValue}>Decrement value</button>
    </>
  )
}

export default App
