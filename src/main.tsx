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
import CategoryPage from './pages/categorypage'
import { PageContextProvider } from './context/context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <PageContextProvider>
    <Router>
      <Provider store={store}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/item/:id" element={<ItemPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/category" element={<CategoryPage/>}/>
      </Routes>
      <Footer/>
      </Provider>
    </Router>
    </PageContextProvider>
)
