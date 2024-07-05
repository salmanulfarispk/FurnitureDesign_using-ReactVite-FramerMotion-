import React from 'react'
import Home from "./Components/AllComponents/Home"
import "./App.css";
import { ThemeContext } from './Components/ContextWrapper/ThemeContext'

export default function App() {
  
  return (
    <div>
    <ThemeContext>
      <Home/>
    </ThemeContext>
  </div>
    
  )
}
