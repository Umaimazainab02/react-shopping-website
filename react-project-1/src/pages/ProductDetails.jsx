import { useParams } from 'react-router-dom'
import products from '../data/Products'
import React, { useState } from 'react'
const ProductDetails = () => {
const [quantity, setQuantity] = useState(1)
    const { id } = useParams()

    const product = products.find((item) => item.id === Number(id))

    if (!product) {
        return (
            <div className="p-10 text-center">
                <h1 className="text-3xl font-bold">Product not found</h1>
            </div>
        )
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">

            {/* Product Top Section */}
            <div className="grid grid-cols-2 gap-12">

                {/* Left - Image */}
                <div>
                    <div className="w-full h-[500px] bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Gallery */}
                    <div className="flex gap-4 mt-5">
                        {product.gallery.map((image, index) => (
                            <div
                                key={index}
                                className="w-20 h-20 border border-gray-200 rounded-lg p-1"
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

                    <p className="text-yellow-500 text-lg">
                        {product.rating}
                    </p>

                    <h1 className="text-3xl font-bold mt-3">
                        {product.title}
                    </h1>

                    <div className="flex gap-4 items-center mt-5">

                        <span className="text-gray-400 line-through text-lg">
                            {product.oldPrice}
                        </span>

                        <span className="text-3xl font-bold">
                            {product.price}
                        </span>

                    </div>

                    <p className="text-green-600 font-medium mt-4">
                        🟢 {product.stock}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mt-6">

                        <div className="flex gap-2 border rounded-lg p-3 text-center justify-center">
                            🚚
                            <p className="text-sm font-medium mt-1">Fast Delivery</p>
                        </div>

                        <div className=" flex gap-2 border rounded-lg p-3 text-center justify-center ">
                            💵
                            <p className="flex text-sm font-medium mt-1">COD</p>
                        </div>

                        <div className="flex gap-2 border rounded-lg p-3 text-center justify-center">
                            🔍
                            <p className="text-sm font-medium mt-1">Check First</p>
                        </div>

                        <div className="flex gap-2 border rounded-lg p-3 text-center justify-center">
                            ✓
                            <p className="text-sm font-medium mt-1">Quality Checked</p>
                        </div>

                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-5 mt-8">

                        <button
                            onClick={() => setQuantity(quantity - 1)}
                            disabled={quantity === 1}
                            className="cursor-pointer w-10 h-10 border rounded-full text-xl disabled:opacity-40"
                        >
                            −
                        </button>

                        <span className="text-lg font-medium">
                            {quantity}
                        </span>

                        <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="cursor-pointer w-10 h-10 border rounded-full text-xl"
                        >
                            +
                        </button>

                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-6">

                        <button className="cursor-pointer bg-black text-white px-10 py-3 rounded-full font-medium hover:bg-gray-800">
                            Add to Cart
                        </button>

                        <button className="cursor-pointer border bg-green-400  border-black px-10 py-3 rounded-full font-medium hover:bg-gray-100">
                            Order on WhatsApp
                        </button>

                    </div>

                </div>

            </div>

            {/* Description */}
            <div className="mt-16">

                <h2 className="text-4xl font-bold mb-4">
                    Description
                </h2>

                <div className="space-y-4 mt-6">
                    {product.description.map((text, index) => (
                        <p
                            key={index}
                            className="text-gray-600 leading-7"
                        >
                            {text}
                        </p>
                    ))}
                </div>

            </div>

            {/* Highlights */}
            <div className="mt-12">


                <div className="border border-gray-200 rounded-2xl px-8 py-5 bg-[#FFFF] m-18 ">
                    <h2 className="text-3xl font-bold mb-5">
                        Highlights
                    </h2>

                    <div className="flex flex-col gap-7">

                        {product.highlights.map((item, index) => (
                            <p
                                key={index}
                                className="text-gray-600"
                            >
                                • {item}
                            </p>
                        ))}

                    </div>

                </div>

            </div>

            {/* Specifications */}
            <div className="mt-12">

                <div className="border border-gray-200 rounded-2xl px-8 py-5 bg-[#FFFF] m-18">

                    <h2 className="text-2xl font-bold mb-5">
                        Specifications
                    </h2>

                    <div className="flex flex-col gap-7">

                        {product.specifications.map((item, index) => (
                            <p
                                key={index}
                                className="text-gray-600"
                            >
                                • {item}
                            </p>
                        ))}

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ProductDetails