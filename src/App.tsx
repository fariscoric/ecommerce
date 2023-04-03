import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import HomePage from './pages/homepage/homepage'
import FooterComp from './components/footer/footer'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
      <FooterComp/>
    </div>
  )
}

export default App
