import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Exprence from './components/Exprence'
import Footer from './components/Footer'
import Contact from './components/Contact'
import {Toaster} from "react-hot-toast"

const App = () => {
  return (
     <>
    <div>
     <Navbar/>
     <Home/>
     <About/>
     <Portfolio/>
     <Exprence/>
     <Footer/>
     <Contact/>
    </div>
    <Toaster/>
    
     
     </>
  )
}

export default App