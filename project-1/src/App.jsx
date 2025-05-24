import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/navbar'
import Herosection from './components/hero'

function App() {

  return (
    <div>
    <Nav/>
    <Herosection/>
    </div>
  )
}

export default App
