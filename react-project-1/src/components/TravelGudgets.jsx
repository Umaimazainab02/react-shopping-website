import React from 'react'
import ProductCard from '../components/ProductCard'
import Travel from '../data/Travel'

const TravelGudgets = () => {
  return (
    <div>

      <div className="flex flex-col text-center mt-14">
      </div>

      <div className="flex flex-wrap gap-5 mx-7 mb-30">

        {Travel.map((item) => (
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