import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import AboutUs from './pages/aboutus/aboutus'
import Contact from './pages/contact/contact'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
      </Routes>
      <Footer/>
    </Router>
)
