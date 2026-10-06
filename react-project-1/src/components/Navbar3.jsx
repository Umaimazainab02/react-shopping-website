import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar3 = () => {

  const [open, setOpen] = useState(false)

  const categories = [
    { name: 'Desk Setup', path: '/DeskSetup' },
    { name: 'Travel Gadgets', path: '/Travel-Gadgets' },
    { name: 'Gaming', path: '/Gaming' },
    { name: 'Mobile Accessories', path: '/Mobile-Accessories' },
    { name: 'Audio', path: '/Audio' },
    { name: 'Smart Home', path: '/SmartHome' },
  ]

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-center gap-7">

        {categories.map((category) => (
          <Link
            key={category.path}
            to={category.path}
            className="bg-gray-100 font-bold rounded-full px-4 py-2 cursor-pointer hover:bg-black hover:text-blue-400"
          >
            {category.name}
          </Link>
        ))}

      </div>


      {/* Mobile + Tablet */}
      <div className="lg:hidden">

        {/* Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="p-3"
        >
          <Menu size={28} />
        </button>


        {/* Overlay */}
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-white/90 z-40"
          />
        )}


        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-72 bg-black/80 text-white z-50 shadow-xl transform transition-transform duration-300 ${
            open ? 'translate-x-0' : '-translate-x-full'
          }`}
        >

          {/* Sidebar Header */}
          <div className="flex justify-between items-center p-5 border-b">
            <h2 className="font-bold text-xl">
              Categories
            </h2>

            <button onClick={() => setOpen(false)}>
              <X size={26} />
            </button>
          </div>


          {/* Categories */}
          <div className="flex flex-col p-4 gap-2">

            {categories.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                onClick={() => setOpen(false)}
                className="font-bold px-4 py-3 rounded-lg hover:bg-black hover:text-blue-400"
              >
                {category.name}
              </Link>
            ))}

          </div>

        </div>

      </div>
    </>
  )
}

export default Navbar3