import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Capabilities from './components/Capabilities/Capabilities'
import RecentProjects from './components/RecentProjects/RecentProjects'

function App() {

  return (
    <>
    <Header />
    <Capabilities />
    <RecentProjects />
    </>
  )
}

export default App
