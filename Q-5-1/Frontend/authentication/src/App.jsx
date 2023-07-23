import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'

import Auth from './Pages/Auth/Auth.jsx'
import Home from './Pages/Home/Home'

function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Auth/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
