import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Services from '../components/Services'
import Contact from '../components/Contact'
import TeamMembers from '../components/TeamMembers'
import AboutUs from '../components/AboutUs'

const Homepage = () => {
  return (
    <div className='home'>
      <Navbar />
      <Carousel />
      <Services />
      <AboutUs />
      <TeamMembers />
      <Contact />
      <Footer />
    </div>
  )
}

export default Homepage