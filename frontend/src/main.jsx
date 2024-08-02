import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './index.css'
import HomePage from './landing_page component/home/HomePage'
import Signup from './landing_page component/signup/Signup'
import AboutPage from './landing_page component/about/AboutPage'
import ProductPage from './landing_page component/product/ProductPage'
import PricingPage from './landing_page component/pricing/PricingPage'
import Support from './landing_page component/support/Support'
import Navbar from './landing_page component/Navbar'
import Footer from './landing_page component/Footer'
import NotFound from './landing_page component/NotFound'


ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Navbar />
<Routes>
  <Route path='/' element={<HomePage />}/>
  <Route path='/signup' element={<Signup />}/>
  <Route path='/about' element={<AboutPage />}/>
  <Route path='/product' element={<ProductPage/>}/>
  <Route path='/pricing' element={<PricingPage />}/>
  <Route path='/support' element={<Support />}/>
  <Route path='*' element={<NotFound />}/>
</Routes>
<Footer />
</BrowserRouter>
)
