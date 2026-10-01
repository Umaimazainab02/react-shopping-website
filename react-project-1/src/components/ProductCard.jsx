import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {

    const navigate = useNavigate()

    return (
        <div
            onClick={() =>
                navigate(`/product/${product.category}/${product.id}`)
            }
            className="w-[300px] rounded-xl cursor-pointer overflow-hidden"
        >

            {/* Image */}
            <div className="border border-gray-200">

                <div className="w-full h-82 rounded-t-xl bg-gray-100 px-2 flex items-center justify-center overflow-hidden">

                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-[100%] h-[500px] object-contain transition-transform duration-500 hover:scale-104"
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
                        onClick={(e) => e.stopPropagation()}
                        className="text-lg font-medium text-white bg-black w-full rounded-full p-2 transition-transform duration-200 hover:-translate-y-[1px] hover:scale-[1.02] hover:bg-blue-400"
                    >
                        <span className="inline-block transition-transform duration-200 hover:scale-[1.03]">
                            Add to cart
                        </span>
                    </button>

                </div>

            </div>

        </div>
    )
}

export default ProductCard