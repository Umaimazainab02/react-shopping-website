import React from 'react'

const Hero = () => {
  return (
    <div className="relative w-full  h-[600px] lg:h-[600px] mt-2">

      <div className="relative w-full h-[600px] mt-2">

        <picture>
          {/* Mobile / small screen image */}
          <source
            media="(max-width: 639px)"
            srcSet="https://soopermall.com/cdn/shop/files/986714c4c40d7ca4d8735f83d6dec215.jpg?v=1783871136&width=900"
          />

          {/* Desktop image */}
          <img
            src="https://soopermall.com/cdn/shop/files/537cfd32ee2a61d78ae418ba0d7b0efe_1.jpg?v=1783264581&width=2200"
            alt="Gadget Store"
            className="w-full h-full object-cover object-center brightness-75"
          />
        </picture>

      </div>

      <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 lg:px-16">

        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-amber-50">
          Pakistan's Premium
          <br />
          Gadget Store
        </h1>

        <button className="cursor-pointer mt-4 sm:mt-6 w-fit bg-[#111111] text-white px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-gray-800 font-medium">
          Explore Products
        </button>

      </div>

    </div>
  )
}

export default Hero