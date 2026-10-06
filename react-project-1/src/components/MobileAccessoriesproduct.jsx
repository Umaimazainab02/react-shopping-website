import React from 'react'
import ProductCard from '../components/ProductCard'
import Mobile from '../data/Mobile'

const MobileAccessoriesproduct = () => {
  return (
    <div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 mb-30">

        {Mobile.length === 0 ? (
          <h1 className="text-center w-full text-2xl font-semibold">
            No products found
          </h1>
        ) : (
          Mobile.map((item) => (
            <ProductCard
              key={item.id}
              product={{
                ...item,
                category: "Mobile-Accessories"
              }}
            />
          ))
        )}

      </div>

    </div>
  )
}

export default MobileAccessoriesproduct