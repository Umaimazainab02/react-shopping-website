import React from 'react'


const DeskSetup = () => {

  const images = [
    '/images/desk1.jpg',
    '/images/desk2.jpg',
    '/images/desk3.jpg',
    '/images/desk4.jpg'
  ]

  return (
    <div className='p-8'>

      <p className='text-gray-500'>
        Home / Desk Setup
      </p>

      <h1 className='text-3xl font-bold mt-3'>
        Desk Setup
      </h1>

      <p className='mt-2 text-gray-600'>
        This page has {images.length} images
      </p>

    </div>
  )
}

export default DeskSetup 