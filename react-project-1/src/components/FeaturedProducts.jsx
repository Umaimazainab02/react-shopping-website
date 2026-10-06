import React from 'react'
import ProductCard from './ProductCard'

const FeaturedProducts = () => {

  const FeaturedProducts = [
    {
      id: 1,
      category: "Featured",
      image: "https://soopermall.com/cdn/shop/files/file_00000000612c71f5b7dac5a640a002fa_e8a46702-b328-42ea-944b-eba8f933f2f1.png?v=1783261242&width=900p",
      title: "SooperHub 8-in-1 USB TYPE C HUB with 4K HDMI, PD Charging & Ethernet",
      oldPrice: "Rs.3,500.00",
      price: "Rs.2,999.00",
      description: "Upgrade your laptop with the SooperHub 8-in-1 USB-C Hub."
    },
    {
      id: 2,
      category: "Featured",
      image: "https://soopermall.com/cdn/shop/files/A-701-7.jpg?v=1783016870&width=900",
      title: "360 Rotating Aluminum Phone & Tablet Stand",
      oldPrice: "Rs.1,999.00",
      price: "Rs.1,299.00",
      description: "Premium rotating aluminum stand for phones and tablets."
    },
    {
      id: 3,
      category: "Featured",
      image: "https://soopermall.com/cdn/shop/files/690c41c07dc2b-768x768.jpg?v=1785950575&width=900",
      title: "LDNIO Z11 Wall Switch Socket 4 Outlet Extender",
      oldPrice: "Rs.1,899.00",
      price: "Rs.1,599.00",
      description: "Convenient 4 outlet wall socket extender."
    },
    {
      id: 4,
      category: "Featured",
      image: "https://soopermall.com/cdn/shop/files/A362.avif?v=1782744892&width=900",
      title: "Aspor A362 20000mAh 65W Power Bank",
      oldPrice: "Rs.11,500.00",
      price: "Rs.7,500.00",
      description: "20000mAh power bank with 65W fast charging."
    }
  ]

  return (
    <div>

      <div className="flex flex-col items-center justify-center text-center mt-14">
        <h1 className="text-lg md:text-4xl font-bold">
          Featured Products
        </h1>

        <p className="mt-2 text-gray-900 text-[7px] md:text-lg mb-0 md:mb-6">
          Our most popular products
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 mb-30 p-2">

        {FeaturedProducts.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
          />
        ))}

      </div>

    </div>
  )
}

export default FeaturedProducts