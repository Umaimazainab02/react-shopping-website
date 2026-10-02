import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar1 from './components/Navbar1'
import Navbar2 from './components/Navbar2'
import Navbar3 from './components/Navbar3'

import ProductDetails from './pages/ProductDetails'
import DeskSetup from './pages/DeskSetup'
import TravelGadgets from './pages/TravelGadgets'
import Gaming from './pages/Gaming'
import MobileAccessories from './pages/MobileAccessories'
import Audio from './pages/Audio'
import SmartHome from './pages/SmartHome'
import Home from './pages/Home'
import Login from './pages/Login'

const App = () => {
  return (
    <div>
      <Routes>

        {/* Login - NO NAVBAR */}
        <Route path="/login" element={<Login />} />

        {/* Home - Navbar + Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar1 />
              <Navbar2 />
              <Navbar3 />
              <Home />
            </>
          }
        />

        {/* Desk Setup */}
        <Route
          path="/DeskSetup"
          element={
            <>
              <Navbar1 />
              <Navbar2 />
              <Navbar3 />
              <DeskSetup />
            </>
          }
        />

        {/* Travel Gadgets */}
        <Route
          path="/Travel-Gadgets"
          element={
            <>
              <Navbar1 />
              <Navbar2 />
              <Navbar3 />
              <TravelGadgets />
            </>
          }
        />

        {/* Gaming */}
        <Route
          path="/Gaming"
          element={
            <>
              <Navbar1 />
              <Navbar2 />
              <Navbar3 />
              <Gaming />
            </>
          }
        />

        {/* Mobile Accessories */}
        <Route
          path="/Mobile-Accessories"
          element={
            <>
              <Navbar1 />
              <Navbar2 />
              <Navbar3 />
              <MobileAccessories />
            </>
          }
        />

        {/* Audio */}
        <Route
          path="/Audio"
          element={
            <>
              <Navbar1 />
              <Navbar2 />
              <Navbar3 />
              <Audio />
            </>
          }
        />

        {/* Smart Home */}
        <Route
          path="/SmartHome"
          element={
            <>
              <Navbar1 />
              <Navbar2 />
              <Navbar3 />
              <SmartHome />
            </>
          }
        />

        {/* Product Details */}
        <Route
          path="/product/:id"
          element={
            <>
              <Navbar1 />
              <Navbar2 />
              <Navbar3 />
              <ProductDetails />
            </>
          }
        />

        <Route
          path="/product/:category/:id"
          element={
            <>
              <Navbar1 />
              <Navbar2 />
              <Navbar3 />
              <ProductDetails />
            </>
          }
        />

      </Routes>
    </div>
  )
}

export default App