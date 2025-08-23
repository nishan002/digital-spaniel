import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Capabilities from './components/Capabilities/Capabilities'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Capabilities />
    </>
  )
}

export default App
