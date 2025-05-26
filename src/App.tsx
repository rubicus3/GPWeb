import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Archive from './pages/Archive'
import Home from './pages/Home';
import AudioPage from './pages/AudioPage';
import Restoration from './pages/Restoration';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/archive/audio/:id" element={<AudioPage />} />
        <Route path="/restoration" element={<Restoration />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
