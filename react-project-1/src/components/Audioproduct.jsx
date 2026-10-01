import React from 'react'
import ProductCard from './ProductCard'
import Audi from '../data/Audi'
const Audioproduct = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-5 mx-7 mb-30">

        {Audi.length === 0 ? (
          <p className="w-full text-center text-gray-500">
            No Products Available
          </p>
        ) : (
          Audi.map((item) => (
            <ProductCard
              key={item.id}
              product={{
                ...item,
                category: "Audio"
              }}
            />
          ))
        )}

      </div>
    </div>
  )
}

export default Audioproduct
