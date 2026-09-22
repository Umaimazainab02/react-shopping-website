import React from 'react'
import { Heart, Search, UserRound, ShoppingCart } from 'lucide-react'

const Navbar2 = () => {
    return (
        <div className='flex justify-between m-5 items-center'>

            <div className='flex gap-6 flex-row items-center'>
                <img
                    src="https://soopermall.com/cdn/shop/files/Untitled_design_c0511e0e-87e8-4be5-ae3a-a947d6fb37af.png?v=1782641046&width=400"
                    className='w-30 h-10 cursor-pointer'
                    alt=""
                />

                <p className='text-gray-500'>|</p>

                <h1 className='text-xs text-gray-500'>Tech That Fits Your Lifestyle</h1>
            </div>

            <div className="flex items-center border rounded-full w-140 overflow-hidden">
                <input
                    type="text"
                    placeholder="Search..."
                    className="outline-none flex-1 px-4"
                />

                <div className="bg-gray-100 p-3 rounded-r-full">
                    <Search strokeWidth={1.5} size={20} />
                </div>
            </div>

            <div className="flex gap-6 items-center">
  <div className="hover:bg-gray-100 p-2 rounded-full">
    <Heart size={19} strokeWidth={1.5} />
  </div>

  <div className="hover:bg-gray-100 p-2 rounded-full">
    <UserRound size={19} strokeWidth={1.5} />
  </div>

  <div className="hover:bg-gray-100 p-2 rounded-full">
    <ShoppingCart size={19} strokeWidth={2.5} />
  </div>
</div>
        </div>
    )
}

export default Navbar2