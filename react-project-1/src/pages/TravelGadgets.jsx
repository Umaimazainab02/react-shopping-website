import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import Travel from '../data/Travel'

const TravelGudgets = () => {

  const [sortBy, setSortBy] = useState('relevant')

  const sortedProducts = [...Travel].sort((a, b) => {

    if (sortBy === 'az') {
      return a.title.localeCompare(b.title)
    }

    if (sortBy === 'za') {
      return b.title.localeCompare(a.title)
    }

    if (sortBy === 'low') {
      return parseFloat(a.price.replace(/[^\d.]/g, '')) -
             parseFloat(b.price.replace(/[^\d.]/g, ''))
    }

    if (sortBy === 'high') {
      return parseFloat(b.price.replace(/[^\d.]/g, '')) -
             parseFloat(a.price.replace(/[^\d.]/g, ''))
    }

    if (sortBy === 'old') {
      return a.id - b.id
    }

    if (sortBy === 'new') {
      return b.id - a.id
    }

    return 0
  })

  return (
    <div>

      <div className="flex flex-col items-center gap-3 my-15">

        <p className="tracking-widest uppercase text-[#2CBEE4] font-bold text-sm">
          Curated Collection
        </p>

        <h1 className="font-bold text-5xl">
          Travel Gadgets
        </h1>

        <p className="font-bold">
          {Travel.length} products
        </p>

      </div>

      <div className="flex justify-between p-6">

        <p className="text-gray-600">
          Showing curated picks from Travel Gadgets
        </p>

        <select
          className="border border-gray-300 rounded-3xl px-4 py-2 outline-none"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="relevant">Most Relevant</option>
          <option value="az">A to Z</option>
          <option value="za">Z to A</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="old">Oldest to Newest</option>
          <option value="new">Newest to Oldest</option>
        </select>

      </div>

      <div className="flex flex-wrap gap-5 mx-7 mb-30">

        {sortedProducts.map((item) => (
          <ProductCard
            key={item.id}
            product={{
              ...item,
              category: "Travel-Gadgets"
            }}
          />
        ))}

      </div>

    </div>
  )
}

export default TravelGudgets