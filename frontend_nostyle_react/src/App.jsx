import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/HomePage'
import PracticingApi from './simplified_api_flow/PracticingApi'

function App() {
  return (
    <>
      <div>
        <PracticingApi/>
        <h1>==================================================================================</h1>
        <h1>welcome</h1>
        <HomePage/>
      </div>
    </>
  )
}

export default App
