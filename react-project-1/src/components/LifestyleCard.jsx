import React from 'react'
import { useNavigate } from 'react-router-dom'

const LifestyleCard = ({ image, title, work, path }) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(path)}
      className="relative w-[292px] h-78 shrink-0 overflow-hidden rounded-2xl cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 brightness-85"
      />

      <div className="absolute bottom-6 left-6 text-white">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-300">{work} </p>
      </div>
    </div>
  )
}

export default LifestyleCard