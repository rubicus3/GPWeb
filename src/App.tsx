import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Archive from './pages/Archive'
import Home from './pages/Home';
import AudioPage from './pages/AudioPage';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/archive/audio/:id" element={<AudioPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
