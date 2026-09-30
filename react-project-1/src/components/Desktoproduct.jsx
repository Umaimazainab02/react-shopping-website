import React from 'react'
import ProductCard from './ProductCard'
import Deskproduct from '../data/Deskproduct'

const Desktoproduct = () => {
  return (
    <div>

      <div className="flex flex-wrap gap-5 mx-7 mb-30">

        {Deskproduct.length === 0 ? (
          <p className="w-full text-center text-gray-500">
            No Products Available
          </p>
        ) : (
          Deskproduct.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
            />
          ))
        )}

      </div>

    </div>
  )
}

export default Desktoproduct