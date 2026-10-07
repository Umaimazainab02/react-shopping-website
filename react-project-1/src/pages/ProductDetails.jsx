import { useParams } from 'react-router-dom'
import products from '../data/Products'
import Deskproduct from '../data/Deskproduct'
import Travel from '../data/Travel'
import Game from '../data/Game'
import Mobile from '../data/Mobile'
import Audi from '../data/Audi'
import Smart from '../data/Smart'
import React, { useState } from 'react'

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1)
    const { category, id } = useParams()

    let data = products

    if (category === 'Desk-Setup') {
        data = Deskproduct
    }

    if (category === 'Travel-Gadgets') {
        data = Travel
    }

    if (category === 'Gaming') {
        data = Game
    }

    if (category === 'Mobile-Accessories') {
        data = Mobile
    }

    if (category === 'Audio') {
        data = Audi
    }

    if (category === 'Smart-Products') {
        data = Smart
    }

    const product = data.find(
        (item) => item.id === Number(id)
    )

    if (!product) {
        return (
            <div className="p-6 sm:p-10 text-center">
                <h1 className="text-2xl sm:text-3xl font-bold">
                    Product not found
                </h1>
            </div>
        )
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">

            {/* Product Top Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                {/* Left - Image */}
                <div>

                    <div className="w-full h-[320px] sm:h-[400px] lg:h-[500px]  rounded-xl flex items-center justify-center overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Gallery */}
                    <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

                        {product.gallery.map((image, index) => (
                            <div
                                key={index}
                                className="w-16 h-16 sm:w-20 sm:h-20 border border-gray-200 rounded-lg p-1 shrink-0"
                            >
                                <img
                                    src={image}
                                    alt=""
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        ))}

                    </div>
                </div>

                {/* Right - Details */}
                <div>

                    <p className="text-yellow-500 text-base sm:text-lg">
                        {product.rating}
                    </p>

                    <h1 className="text-2xl sm:text-3xl font-bold mt-3">
                        {product.title}
                    </h1>

                    <div className="flex flex-wrap gap-3 sm:gap-4 items-center mt-5">

                        <span className="text-gray-400 line-through text-base sm:text-lg">
                            {product.oldPrice}
                        </span>

                        <span className="text-2xl sm:text-3xl font-bold">
                            {product.price}
                        </span>

                    </div>

                    <p className="text-green-600 font-medium mt-4">
                        🟢 {product.stock}
                    </p>

                    {/* Confidence Boxes */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-6">

                        <div className="flex gap-2 border rounded-lg p-2 sm:p-3 text-center justify-center items-center">
                            🚚
                            <p className="text-xs sm:text-sm font-medium">
                                Fast Delivery
                            </p>
                        </div>

                        <div className="flex gap-2 border rounded-lg p-2 sm:p-3 text-center justify-center items-center">
                            💵
                            <p className="text-xs sm:text-sm font-medium">
                                COD
                            </p>
                        </div>

                        <div className="flex gap-2 border rounded-lg p-2 sm:p-3 text-center justify-center items-center">
                            🔍
                            <p className="text-xs sm:text-sm font-medium">
                                Check First
                            </p>
                        </div>

                        <div className="flex gap-2 border rounded-lg p-2 sm:p-3 text-center justify-center items-center">
                            ✓
                            <p className="text-xs sm:text-sm font-medium">
                                Quality Checked
                            </p>
                        </div>

                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-5 mt-7 sm:mt-8">

                        <button
                            onClick={() => setQuantity(quantity - 1)}
                            disabled={quantity === 1}
                            className="cursor-pointer w-9 h-9 sm:w-10 sm:h-10 border rounded-full text-xl disabled:opacity-40"
                        >
                            −
                        </button>

                        <span className="text-lg font-medium">
                            {quantity}
                        </span>

                        <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="cursor-pointer w-9 h-9 sm:w-10 sm:h-10 border rounded-full text-xl"
                        >
                            +
                        </button>

                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">

                        <button
                            onClick={() => {
                                localStorage.setItem("test", "hello")
                                alert("BUTTON WORKING")
                            }}
                            className="bg-black text-white px-10 py-3 rounded-full cursor-pointer"
                        >
                            Add to Cart
                        </button>


                    </div>

                </div>

            </div>

            {/* Description */}
            <div className="mt-10 sm:mt-16">

                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Description
                </h2>

                <div className="space-y-4 mt-5 sm:mt-6">

                    {Array.isArray(product.description) ? (
                        product.description.map((text, index) => (
                            <p
                                key={index}
                                className="text-gray-600 leading-7 text-sm sm:text-base"
                            >
                                {text}
                            </p>
                        ))
                    ) : (
                        <p className="text-gray-600 leading-7 text-sm sm:text-base">
                            {product.description}
                        </p>
                    )}

                </div>

            </div>

            {/* Highlights */}
            <div className="mt-10 sm:mt-12">

                <div className="border border-gray-200 rounded-2xl px-5 sm:px-8 py-5 bg-white">

                    <h2 className="text-2xl sm:text-3xl font-bold mb-5">
                        Highlights
                    </h2>

                    <div className="flex flex-col gap-5 sm:gap-7">

                        {product.highlights.map((item, index) => (
                            <p
                                key={index}
                                className="text-gray-600 text-sm sm:text-base"
                            >
                                • {item}
                            </p>
                        ))}

                    </div>

                </div>

            </div>

            {/* Specifications */}
            <div className="mt-10 sm:mt-12">

                <div className="border border-gray-200 rounded-2xl px-5 sm:px-8 py-5 bg-white">

                    <h2 className="text-2xl font-bold mb-5">
                        Specifications
                    </h2>

                    <div className="flex flex-col gap-5 sm:gap-7">

                        {Array.isArray(product.specifications) ? (

                            product.specifications.map((item, index) => (
                                <p
                                    key={index}
                                    className="text-gray-600 text-sm sm:text-base"
                                >
                                    • {item}
                                </p>
                            ))

                        ) : (

                            Object.entries(product.specifications || {}).map(
                                ([key, value]) => (
                                    <p
                                        key={key}
                                        className="text-gray-600 text-sm sm:text-base"
                                    >
                                        •{' '}
                                        <span className="font-medium">
                                            {key}:
                                        </span>{' '}
                                        {value}
                                    </p>
                                )
                            )

                        )}

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ProductDetails
