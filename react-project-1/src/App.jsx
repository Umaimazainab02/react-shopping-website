import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar1 from './components/Navbar1'
import Navbar2 from './components/Navbar2'
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

        <Route path="/login" element={<Login />} />

        {/* Home - Navbar + Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar1 />
              <Navbar2 />
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
              <ProductDetails />
            </>
          }
        />

      </Routes>
    </div>
  )
}

export default App