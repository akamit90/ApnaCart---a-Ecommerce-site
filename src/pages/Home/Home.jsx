import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Service from '../../components/service/Service'
import Gallery from '../../components/Gallery/Gallery'
import PopularProducts from '../../components/PopularProducts/PopularProducts'
import Testimonial from '../../components/Testimonial/Testimonial'

function Home({AddToCart}) {
  return (
    <>
      <HeroSection/>
      <Service/> 
      <PopularProducts AddToCart={AddToCart}/>
      <Gallery/>
      <Testimonial/>
    </>
  )
}

export default Home
