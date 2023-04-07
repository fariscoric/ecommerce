import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage'
import Navbar from './components/navbar'
import Footer from './components/footer'
import AboutUs from './pages/aboutus'
import Contact from './pages/contact/contact'
import ItemPage from './pages/itempage/itempage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/item/:id" element={<ItemPage/>}/>
      </Routes>
      <Footer/>
    </Router>
)
