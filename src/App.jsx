import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import imgurl from './assets/tasbiih.png'

function App() {
  const [count, setCount] = useState(0)
  function increment(){
    setCount(count + 1)
  }
  
  function resit (){
    if (count!==0){
      if (window.confirm('Are you sure you want to delete all?')) {
      // The user clicked "Yes"
      // Perform the action here
      setCount(0)
    } else {
      // The user clicked "No" or closed the alert box
      // Do nothing or handle the cancelation here
    }

    }
    
  }
  return (
    <div className="App">
      <h2 className='number'>{count}</h2>
      <img src={imgurl} />
      <button onClick={increment} className='incrimenter'></button>
      <button className="resit" onClick={resit} ></button>
      
    </div>
  )
}

export default App
