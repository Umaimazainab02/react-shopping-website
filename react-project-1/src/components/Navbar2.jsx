import React, { useState } from 'react'
import { Heart, Search, UserRound, ShoppingCart, Menu, X } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    const navigate = useNavigate()
    const [open, setOpen] = useState(false)

    const categories = [
        { name: 'Home', path: '/' },
        { name: 'Desk Setup', path: '/DeskSetup' },
        { name: 'Travel Gadgets', path: '/Travel-Gadgets' },
        { name: 'Gaming', path: '/Gaming' },
        { name: 'Mobile Accessories', path: '/Mobile-Accessories' },
        { name: 'Audio', path: '/Audio' },
        { name: 'Smart Home', path: '/SmartHome' },
    ]

    return (
        <>
            {/* Navbar */}
            <div className="flex items-center justify-between gap-2 m-3 md:m-5">

                {/* Logo */}
                <div className="flex flex-row lg:gap-6 items-center shrink-0">

                    <img
                        src="https://soopermall.com/cdn/shop/files/Untitled_design_c0511e0e-87e8-4be5-ae3a-a947d6fb37af.png?v=1782641046&width=400"
                        className="w-16 md:w-30 h-10 cursor-pointer object-contain"
                        alt=""
                    />

                    <p className="text-gray-500 hidden lg:inline">|</p>

                    <h1 className="text-xs text-gray-500 hidden lg:inline">
                        Tech That Fits Your Lifestyle
                    </h1>

                </div>


                {/* Search */}
                <div className="flex-1 flex justify-center min-w-0">

                    <div className="flex items-center border rounded-full w-full lg:w-[500px] h-[36px] overflow-hidden">

                        <input
                            type="text"
                            placeholder="Search..."
                            className="outline-none flex-1 min-w-0 px-3"
                        />

                        <div className="bg-gray-100 h-full px-2 flex items-center shrink-0">
                            <Search size={18} strokeWidth={1.5} />
                        </div>

                    </div>

                </div>


                {/* Icons */}
                <div className="flex items-center gap-1 lg:gap-6 shrink-0">

                    {/* Mobile Menu */}
                    <button
                        onClick={() => setOpen(true)}
                        className="lg:hidden p-2 cursor-pointer"
                    >
                        <Menu size={22} />
                    </button>


                    {/* Desktop Heart */}
                    <div className="hover:bg-gray-100 p-2 rounded-full hidden lg:block">
                        <Heart size={19} strokeWidth={1.5} />
                    </div>


                    {/* Desktop User */}
                    <div
                        onClick={() => navigate('/login')}
                        className="hover:bg-gray-100 p-2 rounded-full cursor-pointer hidden lg:block"
                    >
                        <UserRound size={19} strokeWidth={1.5} />
                    </div>


                    {/* Cart */}
                    <div
                        onClick={() => navigate('/cart')}
                        className="hover:bg-gray-100 p-2 rounded-full cursor-pointer relative"
                    >
                        <ShoppingCart size={19} strokeWidth={2.5} />

                        {/* Cart Count */}
                        {JSON.parse(localStorage.getItem('cart'))?.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                {JSON.parse(localStorage.getItem('cart')).length}
                            </span>
                        )}
                    </div>

                </div>

            </div>


            {/* Desktop Categories */}
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


            {/* Mobile Overlay */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-white/90 z-40"
                />
            )}


            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-72 bg-black/80 text-white z-50 shadow-xl transform transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >

                {/* Sidebar Header */}
                <div className="flex justify-between items-center p-5 border-b">

                    <h2 className="font-bold text-xl">
                        Categories
                    </h2>

                    <button
                        onClick={() => setOpen(false)}
                        className="cursor-pointer"
                    >
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

        </>
    )
}

export default Navbar2