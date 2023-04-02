import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import HomePage from './pages/homepage/homepage'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
    </div>
  )
}

export default App
