import React, { useEffect, useState } from 'react'

const Cart = () => {

    const [cart, setCart] = useState([])

    // Load cart from localStorage
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || []
        setCart(savedCart)
    }, [])

    // Update localStorage
    const updateCart = (updatedCart) => {
        setCart(updatedCart)
        localStorage.setItem('cart', JSON.stringify(updatedCart))
    }

    // Increase quantity
    const increaseQuantity = (index) => {

        const updatedCart = [...cart]

        updatedCart[index].quantity += 1

        updateCart(updatedCart)
    }

    // Decrease quantity
    const decreaseQuantity = (index) => {

        const updatedCart = [...cart]

        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity -= 1
        }

        updateCart(updatedCart)
    }

    // Remove product
    const removeProduct = (index) => {

        const updatedCart = cart.filter(
            (_, i) => i !== index
        )

        updateCart(updatedCart)
    }

    // Total
    const total = cart.reduce(
        (sum, item) =>
            sum + Number(item.price) * item.quantity,
        0
    )

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 sm:py-10">

            <h1 className="text-2xl sm:text-3xl font-bold mb-8">
                Your Cart
            </h1>

            {cart.length === 0 ? (

                <div className="text-center py-20">

                    <h2 className="text-2xl font-bold">
                        Your cart is empty
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Add some products to your cart.
                    </p>

                </div>

            ) : (

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Products */}

                    <div className="lg:col-span-2 flex flex-col gap-5">

                        {cart.map((item, index) => (

                            <div
                                key={index}
                                className="border rounded-xl p-4 flex flex-col sm:flex-row gap-4 sm:gap-5"
                            >

                                {/* Image */}

                                <div className="w-full sm:w-28 h-28 flex items-center justify-center">

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-contain"
                                    />

                                </div>

                                {/* Details */}

                                <div className="flex-1">

                                    <h2 className="font-bold text-base sm:text-lg">
                                        {item.title}
                                    </h2>

                                    <p className="text-gray-600 mt-2">
                                        Rs. {item.price}
                                    </p>

                                    {/* Quantity */}

                                    <div className="flex items-center gap-4 mt-4">

                                        <button
                                            onClick={() =>
                                                decreaseQuantity(index)
                                            }
                                            className="w-8 h-8 border rounded-full cursor-pointer"
                                        >
                                            −
                                        </button>

                                        <span className="font-medium">
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() =>
                                                increaseQuantity(index)
                                            }
                                            className="w-8 h-8 border rounded-full cursor-pointer"
                                        >
                                            +
                                        </button>

                                    </div>

                                    {/* Remove */}

                                    <button
                                        onClick={() =>
                                            removeProduct(index)
                                        }
                                        className="text-red-500 text-sm mt-4 cursor-pointer"
                                    >
                                        Remove
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                    {/* Summary */}

                    <div className="border rounded-xl p-5 h-fit">

                        <h2 className="text-xl font-bold mb-5">
                            Cart Summary
                        </h2>

                        <div className="flex justify-between mb-3">
                            <span>
                                Items
                            </span>

                            <span>
                                {cart.reduce(
                                    (sum, item) =>
                                        sum + item.quantity,
                                    0
                                )}
                            </span>
                        </div>

                        <div className="border-t pt-4 flex justify-between font-bold text-lg">

                            <span>
                                Total
                            </span>

                            <span>
                                Rs. {total}
                            </span>

                        </div>

                        <button
                            className="w-full bg-black text-white py-3 rounded-full mt-6 cursor-pointer hover:bg-gray-800"
                        >
                            Checkout
                        </button>

                    </div>

                </div>

            )}

        </div>
    )
}

export default Cart
