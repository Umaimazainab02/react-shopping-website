import React from 'react'
import { useNavigate } from 'react-router-dom'

const Featuredproducts2 = ({ image, title, work, path }) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(path)}
      className=" w-[300px] h-80  rounded-xl cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />

      <div className=" bottom-5 left-5 text-white">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-1">{work} →</p>
      </div>
    </div>
  )
}

export default Featuredproducts2