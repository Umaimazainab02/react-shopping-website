import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar1 from './components/Navbar1'
import Navbar2 from './components/Navbar2'
import Navbar3 from './components/Navbar3'

import DeskSetup from './pages/DeskSetup'
import TravelGadgets from './pages/TravelGadgets'
import Gaming from './pages/Gaming'
import MobileAccessories from './pages/MobileAccessories'
import Audio from './pages/Audio'
import SmartHome from './pages/SmartHome'
import Home from './pages/Home'
const App = () => {
  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      <Navbar3 />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DeskSetup" element={<DeskSetup />} />
        <Route path="/Travel-Gadgets" element={<TravelGadgets />} />
        <Route path="/Gaming" element={<Gaming />} />
        <Route path="/Mobile-Accessories" element={<MobileAccessories />} />
        <Route path="/Audio" element={<Audio />} />
        <Route path="/SmartHome" element={<SmartHome />} />
      </Routes>
    </div>
  )
}

export default App