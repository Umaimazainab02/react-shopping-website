import React from 'react'
import { useNavigate } from 'react-router-dom'

const Featuredproducts2 = ({
  id,
  image,
  title,
  oldPrice,
  price,
  description
}) => {

  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/product/${id}`)}
      className="w-[300px] rounded-xl cursor-pointer overflow-hidden"
    >

      {/* Image */}
      <div className='border border-gray-200 '>
        <div className="w-full h-82 rounded-t-xl bg-gray-100 px-2 flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-[100%] h-[500px] object-contain transition-transform duration-500 hover:scale-104"
          />
        </div>

        {/* Details */}
        <div className="mt-4 p-4">

          <h2 className="text-[15px] font-bold h-12 line-clamp-2">
            {title}
          </h2>

          <div className="flex gap-2 mt-2">
            <span className="line-through text-gray-400">
              {oldPrice}
            </span>

            <span className="font-bold">
              {price}
            </span>
          </div>

          <p className="text-gray-600 text-sm mt-2">
            {description}
          </p>
<button className='text-lg font-medium text-white bg-black w-full rounded-full p-2'>
  Add to cart
</button>
        </div>

      </div>
    </div>
  )
}

export default Featuredproducts2