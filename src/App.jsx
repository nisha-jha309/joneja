import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/home';
import About from './pages/about';
import Navbar from './components/navbar';
import Footer from './components/footer';
import InsightPage from './InsightPage';
import Contact from './pages/contact';
import ProductPage from './pages/productPage';


function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/insight" element={<InsightPage/>}/>
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path='/productPage' element={<ProductPage/>} />
    </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App;
