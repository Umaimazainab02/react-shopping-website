import React from 'react'
import TravelGudgets2 from '../components/TravelGudgets2'
import Travel from '../data/Travel'

const TravelGudgets = () => {
  return (
    <div>

      <div className="flex flex-col text-center mt-14">
      </div>

      <div className="flex flex-wrap gap-5 mx-7 mb-30">

        {Travel.map((item) => (
          <TravelGudgets2
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

export default TravelGudgets