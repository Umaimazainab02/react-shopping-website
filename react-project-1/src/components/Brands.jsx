import React from 'react'

const Brands = () => {
  const pic1 = [
    {
      image:
        "https://soopermall.com/cdn/shop/files/1000366103_jpg.jpg?v=1782758829&width=600",
      name: "Leonardo",
      tags: ["Bold", "Fresh", "Modern"],
    },
    {
      image:
        "https://soopermall.com/cdn/shop/files/1000582542_jpg.jpg?v=1782759351&width=600",
      name: "Daneen",
      tags: ["Elegant", "Fresh", "Luxury"],
    },
    {
      image:
        "https://soopermall.com/cdn/shop/files/1000226092_jpg.jpg?v=1782758837&width=600",
      name: "Tivaci",
      tags: ["Elegant", "Fresh", "Luxury"],
    },
  ]

  return (
    <div className="bg-black flex flex-col md:flex-row justify-between py-12 md:py-18 px-4 sm:px-6 md:px-8">

      {/* Left Content */}
      <div className="flex flex-col text-white justify-center gap-4 w-full md:w-[40%]">

        <h2 className="text-[#D0AD57] font-bold text-sm tracking-[3px] uppercase">
          Exclusive Brand
        </h2>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          TSY Fragrances
        </h1>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-lg">
          Discover signature scents crafted for everyday confidence.
        </p>

        <button className="bg-[#D0AD57] text-black rounded-4xl font-bold w-fit py-3 px-6 mt-4 md:mt-6 cursor-pointer">
          Explore Collection
        </button>
      </div>

      {/* Right Cards */}
      <div className="flex flex-row gap-4 sm:gap-5 w-full md:w-[60%] mt-10 md:mt-0 overflow-x-auto scrollbar-hide pb-2 md:justify-end">

        {pic1.map((item, index) => (
          <div
            key={index}
            className="text-white bg-[#1F1F1F] py-8 px-4 sm:px-6 border border-gray-700 rounded-2xl shrink-0 w-[220px] sm:w-[240px] md:w-auto"
          >

            <img
              src={item.image}
              alt={item.name}
              className="w-full md:w-55 h-45 object-cover rounded-lg"
            />

            <h2 className="text-lg sm:text-xl font-semibold mt-3 text-center">
              {item.name}
            </h2>

            <div className="mt-2">
              <ul className="flex gap-2 justify-center flex-wrap">
                {item.tags.map((tag, i) => (
                  <li
                    key={i}
                    className="text-[#D0AD57] text-sm whitespace-nowrap"
                  >
                    • {tag}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Brands
