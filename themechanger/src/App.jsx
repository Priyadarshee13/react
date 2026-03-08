import React, { useEffect, useState } from 'react'

import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './Components/themebtn'
import Card from './Components/Card'

function App() {
const [theameMode,setTheameMode] = useState("light")

const DarkMode =()=>{
  setTheameMode("dark")
}
const LightMode =()=>{
  setTheameMode("light")
}
useEffect(() => {
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(theameMode)
}, [theameMode])

  return (
    <ThemeProvider value={{theameMode,DarkMode,LightMode}}>
<div className="flex flex-wrap min-h-screen items-center">
 <div className="w-full">
           <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
               <ThemeBtn/>
           </div>

          <div className="w-full max-w-sm mx-auto">
             <Card/>
          </div>
      </div>
</div>
</ThemeProvider>
  )
}

export default App
