import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage'
import Navbar from './components/navbar'
import Footer from './components/footer'
import AboutUs from './pages/aboutus'
import Contact from './pages/contact'
import ItemPage from './pages/itempage'
import { Provider } from 'react-redux'
import { store } from './redux/redux'
import CartPage from './pages/cartpage'
import WomenCategory from './pages/categories/womencategory'
import MenCategory from './pages/categories/mencategory'
import ElectronicsCategory from './pages/categories/electronicscategory'
import JewelleryCategory from './pages/categories/jewellerycategory'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Router>
      <Provider store={store}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/item/:id" element={<ItemPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/women" element={<WomenCategory/>}/>
        <Route path="/men" element={<MenCategory/>}/>
        <Route path="/electronics" element={<ElectronicsCategory/>}/>
        <Route path="/jewellery" element={<JewelleryCategory/>}/>
      </Routes>
      <Footer/>
      </Provider>
    </Router>
)
