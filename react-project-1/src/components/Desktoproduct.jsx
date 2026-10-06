import React from 'react'
import ProductCard from './ProductCard'
import Deskproduct from '../data/Deskproduct'

const Desktoproduct = () => {
  return (
    <div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 mb-30 mx-0 md:mx-4">
        {Deskproduct.length === 0 ? (
          <p className="w-full text-center text-gray-500">
            No Products Available
          </p>
        ) : (
          Deskproduct.map((item) => (
            <ProductCard
               key={item.id}
              product={{
                ...item,
                category: "Desk-Setup"
              }}
            />
          ))
        )}

      </div>

    </div>
  )
}

export default Desktoproduct