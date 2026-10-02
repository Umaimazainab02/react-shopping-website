import React from 'react'
import Smart from '../data/Smart'

const SmartProducts = () => {
  return (
    <div>
      {Smart.length === 0 ? (
        <h1>No products found</h1>
      ) : (
        Smart.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default SmartProducts