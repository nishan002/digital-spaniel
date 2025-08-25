import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/fonts.css'
import Header from './components/Header/Header'
import Capabilities from './components/Capabilities/Capabilities'
import RecentProjects from './components/RecentProjects/RecentProjects'
import CaseStudies from './components/CaseStudies/CaseStudies'
import About from './components/About/About'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <Header />
    <Capabilities />
    <RecentProjects />
    {/* <CaseStudies /> */}
    <About />
    <Testimonials />
    <Footer />
    </>
  )
}

export default App
