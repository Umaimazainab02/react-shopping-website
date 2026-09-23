import React from 'react'
import { Link } from 'react-router-dom'

const Navbar3 = () => {
  return (
    <div className='flex justify-center gap-7'>

      <Link
        to="/DeskSetup"
        className='bg-gray-100 font-bold rounded-full px-4 py-2 cursor-pointer hover:bg-black hover:text-blue-400'
      >
        Desk Setup
      </Link>

      <Link
        to="/Travel-Gadgets"
        className='bg-gray-100 font-bold rounded-full px-4 py-2 cursor-pointer hover:bg-black hover:text-blue-400'
      >
        Travel Gadgets
      </Link>

      <Link
        to="/Gaming"
        className='bg-gray-100 font-bold rounded-full px-4 py-2 cursor-pointer hover:bg-black hover:text-blue-400'
      >
        Gaming
      </Link>

      <Link
        to="/Mobile-Accessories"
        className='bg-gray-100 font-bold rounded-full px-4 py-2 cursor-pointer hover:bg-black hover:text-blue-400'
      >
        Mobile Accessories
      </Link>

      <Link
        to="/Audio"
        className='bg-gray-100 font-bold rounded-full px-4 py-2 cursor-pointer hover:bg-black hover:text-blue-400'
      >
        Audio
      </Link>

      <Link
        to="/SmartHome"
        className='bg-gray-100 font-bold rounded-full px-4 py-2 cursor-pointer hover:bg-black hover:text-blue-400'
      >
        Smart Home
      </Link>

    </div>
  )
}

export default Navbar3

