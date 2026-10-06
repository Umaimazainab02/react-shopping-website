import Smart from '../data/Smart'
import React, { useState } from 'react'

const SmartHome = () => {
  const [sortBy, setSortBy] = useState('relevant')

  const sortedProducts = [...Smart].sort((a, b) => {
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
      <div className='flex flex-col items-center gap-2 my-2 md:my-15'>
        <p className="tracking-widest uppercase text-[#2CBEE4] font-bold text-sm">
          Curated Collection
        </p>

        <h1 className='font-bold text-lg md:text-5xl'>
          Smart Home</h1>

        <p className="font-bold">
          {Smart.length} products
        </p>
      </div>

      <div className='flex justify-between p-4 md:p-6'>
        <p className='text-gray-600 text-[9px] lg:text-sm'>
          Showing curated picks from Smart Home
        </p>

        <select
          className="border border-gray-300 rounded-3xl px-1 md:px-4 py-2 outline-none text-[9px] md:text-sm"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="relevant">Most Relevant</option>
          <option value="az">A to Z</option>
          <option value="za">Z to A</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      {/* Products / Empty State */}
      {sortedProducts.length === 0 ? (
        <div className="flex flex-col  justify-center items-center py-8">
          <h2 className="text-5xl font-bold text-black mb-8 ">
            No products found
          </h2>
          <p className='text-md'>This collection is being updated. Please check back soon.</p>
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

export default SmartHome