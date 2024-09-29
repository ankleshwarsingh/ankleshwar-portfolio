import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact';
import Services from './components/Services'
import Footer from './components/Footer';
import {Toaster} from 'react-hot-toast'
export default function App() {
  return (
    <>
    <div>
    <Navbar />
    <Home />
    <About />
    <Services/>
    <Experience />
    <Contact />
    <Footer /></div>
    <Toaster />
    
    </>
  )
}
