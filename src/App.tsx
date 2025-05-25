import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Archive from './pages/Archive'
import './App.css'
import Home from './pages/Home';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/archive/audio" element={<AudioPage />} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
