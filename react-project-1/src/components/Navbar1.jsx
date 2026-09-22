import React from 'react'
import { Check } from 'lucide-react'

const Navbar1 = () => {
  return (
    <div className="flex items-center text-sm mt-3 font-bold text-center justify-center gap-2 cursor-pointer">
      <Check size={16} color="#121212" strokeWidth={3} />
      <h1>Nationwide delivery across Pakistan</h1>
    </div>
  )
}

export default Navbar1