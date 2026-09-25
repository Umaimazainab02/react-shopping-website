import React from 'react'
import Featuredproducts2 from './Featuredproducts2'
import products from '../data/Products'
const FeaturedProducts = () => {

  const FeaturedProducts = [
    {
      id: 1,
      image: "https://soopermall.com/cdn/shop/files/file_00000000612c71f5b7dac5a640a002fa_e8a46702-b328-42ea-944b-eba8f933f2f1.png?v=1783261242&width=900p",
      title: "SooperHub 8-in-1 USB TYPE C HUB with 4K HDMI, PD Charging & Ethernet",
      oldPrice: "Rs.3,500.00",
      price: "Rs.2,999.00",
      description: "Upgrade your laptop with the SooperHub 8-in-1 USB-C Hub."
    },
    {
      id: 2,
      image: "https://soopermall.com/cdn/shop/files/A-701-7.jpg?v=1783016870&width=900",
      title: "360 Rotating Aluminum Phone & Tablet Stand",
      oldPrice: "Rs.1,999.00",
      price: "Rs.1,299.00",
      description: "Premium rotating aluminum stand for phones and tablets."
    },
    {
      id: 3,
      image: "https://soopermall.com/cdn/shop/files/690c41c07dc2b-768x768.jpg?v=1785950575&width=900",
      title: "LDNIO Z11 Wall Switch Socket 4 Outlet Extender",
      oldPrice: "Rs.1,899.00",
      price: "Rs.1,599.00",
      description: "Convenient 4 outlet wall socket extender."
    },
    {
      id: 4,
      image: "https://soopermall.com/cdn/shop/files/A362.avif?v=1782744892&width=900",
      title: "Aspor A362 20000mAh 65W Power Bank",
      oldPrice: "Rs.11,500.00",
      price: "Rs.7,500.00",
      description: "20000mAh power bank with 65W fast charging."
    }
  ]

  return (
    <div className=''>

      <div className="flex flex-col items-center justify-center text-center mt-14">
        <h1 className="text-4xl font-bold">
          Featured Products
        </h1>

        <p className="mt-2 text-gray-900">
          Our most popular products
        </p>
      </div>

      <div className="flex flex-nowrap gap-5 mx-7  mt-8  mb-30">

        {FeaturedProducts.map((item, index) => (
          <Featuredproducts2
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            oldPrice={item.oldPrice}
            price={item.price}
            description={item.description}
          />
        ))}

      </div>

    </div>
  )
}

export default FeaturedProducts