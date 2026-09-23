import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-full  h-[full]  mt-2 '>
      <img
        src="https://soopermall.com/cdn/shop/files/537cfd32ee2a61d78ae418ba0d7b0efe_1.jpg?v=1783264581&width=2200"
        alt="Gadget Store"
        className='w-full h-full object-cover brightness-75'
      />

      <div className='absolute inset-0 flex flex-col justify-center px-16 ml-10'>
        <h1 className='text-6xl font-bold text-amber-50'>
          Pakistan's Premium
          <br />
          Gadget Store
        </h1>

        <button className='cursor-pointer mt-6 w-fit bg-[#111111] text-white px-6 py-3 rounded hover:bg-gray-800 font-medium'>
          Explore Products
        </button>
      </div>

    </div>
  )
}


export default Hero