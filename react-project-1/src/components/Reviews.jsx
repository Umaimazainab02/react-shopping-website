import React from 'react'

const Reviews = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-12 md:mt-16 px-4">

      <h3 className="uppercase tracking-widest font-medium text-gray-800 text-xs sm:text-sm text-center">
        Real Customer Reviews
      </h3>

      <h1 className="font-bold text-3xl sm:text-4xl text-center mt-1">
        Loved by Our Customers
      </h1>

      <p className="text-gray-700 pt-2 text-sm sm:text-base text-center">
        Real feedback from customers who trusted SooperMall.
      </p>

      {/* Reviews */}
      <div className="flex gap-4 sm:gap-5 overflow-x-auto w-full mt-8 px-2 sm:px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

        <img
          src="https://soopermall.com/cdn/shop/files/WhatsApp_Image_2026-06-30_at_11.00.14_AM.jpg?v=1782799254&width=700"
          alt="Customer review"
          className="w-[280px] sm:w-80 md:w-90 h-64 sm:h-72 md:h-74 object-cover object-top rounded-xl shrink-0"
        />

        <img
          src="https://soopermall.com/cdn/shop/files/WhatsApp_Image_2026-06-30_at_11.02.19_AM_1.jpg?v=1782799408&width=700"
          alt="Customer review"
          className="w-[280px] sm:w-80 md:w-88 h-64 sm:h-72 md:h-74 object-cover object-top rounded-xl shrink-0"
        />

        <img
          src="https://soopermall.com/cdn/shop/files/WhatsApp_Image_2026-06-30_at_11.02.19_AM_2.jpg?v=1782799408&width=700"
          alt="Customer review"
          className="w-[280px] sm:w-80 md:w-88 h-64 sm:h-72 md:h-74 object-cover object-top rounded-xl shrink-0"
        />

        <img
          src="https://soopermall.com/cdn/shop/files/WhatsApp_Image_2026-06-30_at_11.02.20_AM.jpg?v=1782799407&width=700"
          alt="Customer review"
          className="w-[280px] sm:w-80 md:w-88 h-64 sm:h-72 md:h-74 object-cover object-top rounded-xl shrink-0"
        />

        <img
          src="https://soopermall.com/cdn/shop/files/WhatsApp_Image_2026-06-30_at_11.02.19_AM.jpg?v=1782799407&width=700"
          alt="Customer review"
          className="w-[280px] sm:w-80 md:w-88 h-64 sm:h-72 md:h-74 object-cover object-top rounded-xl shrink-0"
        />

        <img
          src="https://soopermall.com/cdn/shop/files/WhatsApp_Image_2026-06-30_at_11.00.14_AM.jpg?v=1782799254&width=700"
          alt="Customer review"
          className="w-[280px] sm:w-80 md:w-88 h-64 sm:h-72 md:h-74 object-cover object-top rounded-xl shrink-0"
        />

        <img
          src="https://soopermall.com/cdn/shop/files/WhatsApp_Image_2026-06-30_at_11.00.14_AM_cafa8634-ca8a-4a1f-8d6e-fe841bb00cb6.jpg?v=1782799407&width=700"
          alt="Customer review"
          className="w-[280px] sm:w-80 md:w-88 h-64 sm:h-72 md:h-72 object-cover object-top rounded-xl shrink-0"
        />

      </div>

      <button className="font-bold bg-black rounded-4xl text-white w-fit px-7 py-3 mt-8 cursor-pointer hover:bg-gray-800 transition">
        View All Reviews
      </button>

    </div>
  )
}

export default Reviews
