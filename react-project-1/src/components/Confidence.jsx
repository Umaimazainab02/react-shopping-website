import React from 'react'

const Confidence = () => {
    return (
    <div>
        <div className="flex flex-col items-center justify-center text-center mt-14">
            
            <h1 className="text-4xl font-bold">
                Shop with Confidence
            </h1>

            <p className="mt-2 text-gray-600 ">
                Trusted service, reliable products, and customer-first delivery.
            </p>
             </div>
            <div className='flex flex-row gap-4 justify-center mt-10 mb-25'>
                <div className='flex flex-col border border-gray-200 py-8 px-12  rounded-2xl bg-gray-100 items-center  transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                  <h1 className='text-4xl mb-5'>🚚 </h1> 
                   <h1 className='font-bold text-black'>Fast Delivery</h1>
                    <p className='text-gray-600 text-sm'>Across Pakistan</p>
                </div>
                <div className='flex flex-col border border-gray-200 py-8 px-9 rounded-2xl bg-gray-100  items-center transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                   <h1 className='text-4xl mb-5'>💵</h1> 
                    <h1 className='font-bold text-black'>Cash On Delivery</h1>
                    <p className='text-gray-600 text-sm '>Pay at You Door Step</p>
                </div> 
                <div className='flex flex-col border border-gray-200 py-8 px-8 rounded-2xl bg-gray-100 items-center transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                    <h1 className='text-4xl mb-5'>📦</h1>
                    <h1 className='font-bold text-black'>Check Parcel First</h1>
                    <p className='text-gray-600 text-sm '>Inspect Before Payment</p>
                </div> 
                <div className='flex flex-col border border-gray-200 py-8 px-8 rounded-2xl bg-gray-100 items-center transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                    <h1 className='text-4xl mb-5'>🛡️</h1>
                    <h1 className='font-bold text-black'>Quality Checked</h1>
                    <p className='text-gray-600 text-sm '>Every Item Inspected</p>
                </div> 
                <div className='flex flex-col border border-gray-200 py-8 px-8 rounded-2xl bg-gray-100 items-center transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                   <h1 className='text-4xl mb-5'>🔒</h1>
                    <h1 className='font-bold text-black'>Secure Payment</h1>
                    <p className='text-gray-600 text-sm '>Safe & Trusted Checkout</p>
                </div>
                <div className='flex flex-col border border-gray-200 py-8 px-8 rounded-2xl bg-gray-100 items-center transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                    <h1 className='text-4xl mb-5'>💬</h1>
                    <h1 className='font-bold text-black'>Customer Support</h1>
                    <p className='text-gray-600 text-sm '>WhatsApp & Email <br /> <span className='flex justify-center'>Assistance</span></p>
               
            </div>
        </div>
        </div>
    )
}

export default Confidence