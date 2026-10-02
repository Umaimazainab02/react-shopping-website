import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const Login = () => {

  const [email, setEmail] = useState("")

  return (
    <div className="min-h-screen">

      <div className="flex justify-center items-center">
        <h1 className="font-medium text-4xl italic mt-10 w-fit text-center p-4 rounded-lg text-black">
          SooperMall
        </h1>
      </div>

      {/* Login Box */}
      <div className="w-full max-w-md mx-auto mt-6 border border-gray-300 px-10 py-23 rounded-2xl">

        <h1 className="text-2xl font-medium">
          Sign in
        </h1>

        <p className="text-gray-500 mt-2">
          Sign in or create an account
        </p>

        {/* Shop Button */}
        <button className="w-full rounded-2xl bg-[#5433EB] font-bold text-white py-3 mt-8">
          Continue with Shop
        </button>

        {/* OR */}
        <div className="flex items-center gap-4 my-6">
          <div className="h-px bg-gray-300 flex-1"></div>

          <span className="text-gray-500 text-sm">
            OR
          </span>

          <div className="h-px bg-gray-300 flex-1"></div>
        </div>

        {/* Email */}
<div
  className={`flex items-center rounded-xl w-full overflow-hidden transition ${
    email
      ? "border border-[#5433EB] shadow-[0_-3px_8px_rgba(84,51,235,0.15)]"
      : "border border-gray-300"
  }`}
>
  <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="outline-none flex-1 px-5 py-3"
  />

  <button
    className={`p-3.5 rounded-r-xl ${
      email ? "bg-[#5433EB] text-white" : "bg-white"
    }`}
  >
    <ArrowRight strokeWidth={1.5} size={20} />
  </button>
</div>
</div>
    </div>
  )
}

export default Login