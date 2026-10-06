import React, { useState } from 'react'
import Game from '../data/Game'

const Gaming = () => {
  const [sortBy, setSortBy] = useState('relevant')

  const sortedProducts = [...Game].sort((a, b) => {
    if (sortBy === 'az') {
      return a.title.localeCompare(b.title)
    }

    if (sortBy === 'za') {
      return b.title.localeCompare(a.title)
    }

    if (sortBy === 'low') {
      return a.price - b.price
    }

    if (sortBy === 'high') {
      return b.price - a.price
    }

    return 0
  })

  return (
    <div>
      
       

      {/* Products / Empty State */}
      {sortedProducts.length === 0 ? (
        <div className="flex flex-col  justify-center mt-30 items-center py-3 md:py-8">
          <h2 className="text-lg md:text-5xl font-bold text-black mb-4 ">
            No products found
          </h2>
          <p className='text-xs md:text-md'>This collection is being updated. Please check back soon.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {sortedProducts.map((product) => (
            <div key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full"
              />

              <h2 className="font-semibold mt-2">
                {product.title}
              </h2>

              <p>Rs. {product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Gaming