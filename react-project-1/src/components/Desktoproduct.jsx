import React from 'react'
import Desktopproduct2 from './Desktopproduct2'
import Deskproduct from '../data/Deskproduct'

const Desktoproduct = () => {
  return (
    <div>

      <div className="flex flex-col text-center mt-14">
       
      </div>

      <div className="flex flex-wrap gap-5 mx-7 mb-30">

        {Deskproduct.map((item) => (
          <Desktopproduct2
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

export default Desktoproduct