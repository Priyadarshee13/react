import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter,setCounter]=useState(15)

  const addvalue=()=>{
    console.log("Clicked",Counter);
    setCounter(Counter=Counter+1)
    
  }
  const decvalue=()=>{
    console.log("Clicked",Counter);
    setCounter(Counter=Counter-1)
    
  }
  return (
   <><h1>Priyadarshee</h1>
   <h2>the count is {Counter}</h2>

   <button onClick={addvalue}>Add value</button>
   <br />
   <button onClick={decvalue}>Decrease value</button>
   </>
  )
}

export default App
