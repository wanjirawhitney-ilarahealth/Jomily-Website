import React from 'react'
import './App.css'
import Clients from './components/Clients'
import Footer from './components/Footer'
import Home from './components/Home'
import Section1 from './components/Section1'
import Services from './components/Services'


function App() {

  return (
    <div className="App">
      <Home/>
      <Section1/>
      <Section1/>
      <Services/>
      <Clients/>
      <Footer/>

    </div>
  )
}

export default App
