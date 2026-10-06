import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {

    const navigate = useNavigate()

    return (
        <div
            onClick={() =>
                navigate(`/product/${product.category}/${product.id}`)
            }
            className="w-full sm:w-[48%] lg:w-[30%] rounded-xl cursor-pointer overflow-hidden"
        >

            {/* Image */}
            <div className="border border-gray-200 rounded-xl">

                <div className="w-full h-[280px] rounded-t-xl bg-gray-100 px-2 flex items-center justify-center overflow-hidden">

                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain transition-transform duration-500 hover:scale-[1.04]"
                    />

                </div>

                {/* Details */}
                <div className="mt-4 p-4">

                    <h2 className="text-[15px] font-bold h-12 line-clamp-2">
                        {product.title}
                    </h2>

                    <div className="flex gap-2 mt-2">

                        <span className="line-through text-gray-400">
                            {product.oldPrice}
                        </span>

                        <span className="font-bold">
                            {product.price}
                        </span>

                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            // Add to cart logic here
                        }}
                        className="text-lg font-medium text-white bg-black w-full rounded-full p-2 mt-3 transition-all duration-200 hover:-translate-y-[1px] hover:scale-[1.02] hover:bg-blue-400"
                    >
                        Add to cart
                    </button>

                </div>

            </div>

        </div>
    )
}

export default ProductCard
