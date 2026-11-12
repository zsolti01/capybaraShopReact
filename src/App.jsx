import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Product from './pages/Product/Product'
import Review from './pages/Review/Review'

function App() {
  let path = location.pathname

  return (
    <>
      <header>
        <h1>Capybara Shop</h1>
      </header>

      <div className='pageMain'>
        {/* Oldalak */}
        {((path === "/") || (path === "/pages/Home/Home.jsx")) && <Home />}
        {(path === "/pages/About/About.jsx") && <About />}
        {(path === "/pages/Product/Product.jsx") && <Product />}
        {(path === "/pages/Review/Review.jsx") && <Review />}
      </div>

      <footer>
        <p>&copy; 2026 Capybara Shop</p>
      </footer>
    </>
  )
}

export default App
