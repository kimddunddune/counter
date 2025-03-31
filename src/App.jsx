import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCounter] = useState(0);

  const minus10=()=>{
    setCounter(count - 10);
  }

  const minus1=()=>{
    setCounter(count - 1);
  }

  const plus1=()=>{
    setCounter(count + 1);
  }
  const plus10=()=>{
    setCounter(count + 10);
  }

  const reset=()=>{
    setCounter(0);
  }

  return (
    <>
     <div className="wrap">
      <h1>Simple Counter</h1>
      <p className="number">{count}</p>
        <div className="btn">
          <button onClick={minus10}>-10</button>
          <button onClick={minus1}>-1</button>
          <button onClick={reset} className='reset'>RESET</button>
          <button onClick={plus1}>+1</button>
          <button onClick={plus10}>+10</button>
        </div>
     </div>
    </>
  )
}

export default App
