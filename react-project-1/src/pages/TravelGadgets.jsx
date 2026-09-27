import React from 'react'


const TravelGudgets = () => {

  return (
    <div>
      <div className='flex flex-col items-center gap-3 my-15'>

        <p className='tracking-widest uppercase text-[#2CBEE4] font-bold text-sm'>Curated Collection</p>
        <h1 className='font-bold text-5xl'>TravelGudgets</h1>
        <p className='font-bold'>26 products</p>
        </div>
      <div className='flex justify-between p-6'>
        <p className='text-gray-600 '>Showing curated picks from TravelGudgets</p>
        <select
          className="border border-gray-300 rounded-3xl px-4 py-2 outline-none"
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
    </div>
  )
}

export default TravelGudgets 