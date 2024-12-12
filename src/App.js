import React from 'react'
import Navbar from './components/Navbar';
import './index.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
const App = () => {
    return(
        <>
        <Navbar />
        <div className='container'>
        <Home/>
        <About/>
        <Skills/>
        </div>
        </>
        

    )
}

export default App