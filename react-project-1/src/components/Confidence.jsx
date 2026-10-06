import React from 'react'

const Confidence = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center text-center mt-14">

                <h1 className="text-2xl md:text-4xl font-bold">
                    Shop with Confidence
                </h1>

                <p className="mt-2 text-gray-600 text-[12px] md:text-lg ">
                    Trusted service, reliable products, and customer-first delivery.
                </p>
            </div>
            <div className="flex flex-row flex-wrap  gap-4 justify-center mt-10 mb-25 "> 
                <div className='flex flex-col border border-gray-200 py-5 lg:py-8 px-8 lg:px-12  rounded-2xl bg-gray-100 items-center  transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                <h1 className='text-4xl mb-2 lg:mb-5'>🚚 </h1>
                <h1 className='font-bold text-black text-xs md:text-[15px] mb-1'>Fast Delivery</h1>
                <p className='text-gray-600 text-[9px] md:text-[13px]'>Across Pakistan</p>
            </div>
                <div className='flex flex-col border border-gray-200 py-5 lg:py-8 px-5 lg:px-8 rounded-2xl bg-gray-100  items-center transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                    <h1 className='text-4xl mb-2 lg:mb-5'>💵</h1>
                    <h1 className='font-bold text-black text-xs md:text-[15px] mb-1'>Cash On Delivery</h1>
                    <p className='text-gray-600 text-[9px] md:text-[13px]'>Pay at You Door Step</p>
                </div>
                <div className='flex flex-col border border-gray-200 py-5 lg:py-8 px-5 lg:px-8 rounded-2xl bg-gray-100 items-center transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                    <h1 className='text-4xl mb-2 lg:mb-5'>📦</h1>
                    <h1 className='font-bold text-black text-xs md:text-[15px] mb-1'>Check Parcel First</h1>
                    <p className='text-gray-600 text-[9px] md:text-[13px]'>Inspect Before Payment</p>
                </div>
                <div className='flex flex-col border border-gray-200 py-5 lg:py-8 px-5 lg:px-8  rounded-2xl bg-gray-100 items-center transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                    <h1 className='text-4xl mb-2 lg:mb-5'>🛡️</h1>
                    <h1 className='font-bold text-black text-xs md:text-[15px] mb-1'>Quality Checked</h1>
                    <p className='text-gray-600 text-[9px] md:text-[13px]'>Every Item Inspected</p>
                </div>
                <div className='flex flex-col border border-gray-200 py-5 lg:py-8 px-5 lg:px-8 rounded-2xl bg-gray-100 items-center transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                    <h1 className='text-4xl mb-2 lg:mb-5'>🔒</h1>
                    <h1 className='font-bold text-black text-xs md:text-[15px] mb-1'>Secure Payment</h1>
                    <p className='text-gray-600 text-[9px] md:text-[13px]'>Safe & Trusted Checkout</p>
                </div>
                <div className='flex flex-col border border-gray-200 py-5 lg:py-8 px-5 lg:px-8 rounded-2xl bg-gray-100 items-center transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                    <h1 className='text-4xl mb-2 lg:mb-5'>💬</h1>
                    <h1 className='font-bold text-black text-xs md:text-[15px] mb-1'>Customer Support</h1>
                    <p className='text-gray-600 text-[9px] md:text-[13px] '>WhatsApp & Email <br /> <span className='flex justify-center'>Assistance</span></p>

                </div>
            </div>
        </div>
    )
}

export default Confidence