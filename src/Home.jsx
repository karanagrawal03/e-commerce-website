import React from 'react'
import HeroSection from './components/HeroSection';
import Trusted from './components/Trusted';
import Services from './components/Services';
import FeaturedProducts from './components/FeaturedProducts';

function Home() {
  const data={
    name:"Agarwal's Store",
  }
  return (
    <>
   <HeroSection myData={data}/>
   <FeaturedProducts/>
   <Trusted/>
   <Services/>
   </>
  )
}

export default Home