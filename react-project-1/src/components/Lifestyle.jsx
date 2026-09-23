import React from 'react'
import LifestyleCard from './LifestyleCard'

const Lifestyle = () => {

  const lifestyles = [
    {
      image: "https://soopermall.com/cdn/shop/files/images_2.jpg?v=1782652765&width=700",
      title: "Desk Setup",
      work:"Shop Collection",
    path: "/desktop"

    },
    {
      image: "https://soopermall.com/cdn/shop/files/images_3.jpg?v=1782652766&width=700",
      title: "Work Essentials",
      work:"Shop Collection",
      path:"/Travel-Gadgets"
    },
    {
      image: "https://soopermall.com/cdn/shop/files/images_7.jpg?v=1782652765&width=700",
      title: "Gaming",
      work:"Explore now",
      path:"/Gaming"
    },
    {
      image: "https://soopermall.com/cdn/shop/files/bfe9af2bde9b1b11bc503c03ae657c34.jpg?v=1783871213&width=700",
      title: "Mobile Accessories",
      work:"Explore now",
      path:"/Mobile-Accessories"


    },
    {
      image: "https://soopermall.com/cdn/shop/files/images_12.jpg?v=1782661739&width=700",
      title: "Audio",
      work:"Explore now",
      path:"/Audio"

    },
    {
      image: "https://soopermall.com/cdn/shop/files/88aa7e144b65284d377814adc51046d9.jpg?v=1783870849&width=700",
      title: "Smart Home",
      work:"Explore now",
      path:"/SmartHome"

    },

  ]

  return (
    <div className=''>

      <div className="flex flex-col items-center justify-center text-center mt-14">
        <h1 className="text-4xl font-bold">
          Shop By Lifestyle
        </h1>

        <p className="mt-2 text-gray-900">
          Discover premium tech designed for work, travel, gaming,
          and everyday productivity.
        </p>
      </div>

      <div className="flex flex-nowrap gap-5 mx-7 mt-8  overflow-x-auto overflow-y-auto scrollbar-hide mb-30">
        {lifestyles.map((item, index) => (
          <LifestyleCard
            key={index}
            image={item.image}
            title={item.title}
            work ={item.work}
              path={item.path}

          />
        ))}
      </div>

    </div>
  )
}

export default Lifestyle