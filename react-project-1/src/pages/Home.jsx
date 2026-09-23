import React from 'react'

import Hero from '../components/Hero'
import Confidence from '../components/Confidence'
import Lifestyle from '../components/Lifestyle'
import FeaturedProducts from '../components/FeaturedProducts'
import Brands from '../components/Brands'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <Confidence />
      <Lifestyle />
      <FeaturedProducts />
      <Brands />
      <Reviews />
      <Footer />
    </>
  )
}

export default Home