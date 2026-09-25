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
    <div className="bg-black flex flex-row justify-between py-18 px-8">

      {/* Left Content */}
      <div className="flex flex-col text-white justify-center gap-4 w-[40%]">
        <h2 className="text-[#D0AD57] font-bold text-xl">
          Exclusive Brand
        </h2>

        <h1 className="text-6xl font-bold">
          TSY Fragrances
        </h1>

        <p className="text-gray-300">
          Discover signature scents crafted for everyday confidence.
        </p>
      </div>

      {/* Right Cards */}
      <div className="flex flex-row justify-end gap-5 w-[60%] ">
        {pic1.map((item, index) => (
          <div key={index} className="text-white bg-[#1F1F1F] py-12 px-6 border border-gray-700 rounded-2xl">

            <img
              src={item.image}
              alt={item.name}
              className="w-55 h-45 object-cover rounded-lg "
            />

            <h2 className="text-xl font-semibold mt-3 text-center ">
              {item.name}
            </h2>

            <div className="mt-2">
              <ul className="flex gap-3 justify-center">
                {item.tags.map((tag, i) => (
                  <li
                    key={i}
                    className="text-[#D0AD57] text-md whitespace-nowrap"
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