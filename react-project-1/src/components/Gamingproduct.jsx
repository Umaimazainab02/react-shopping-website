import React from 'react'
import Game from '../data/Game'

const Gamingproduct = () => {
  return (
    <div>
      {Game.length === 0 ? (
        <h1>No products found</h1>
      ) : (
        Game.map((product) => (
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

export default Gamingproduct