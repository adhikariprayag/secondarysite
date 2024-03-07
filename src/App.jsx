import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Nopage from './pages/Nopage/Nopage'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<Nopage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App