import React from 'react'
import Footer from '../components/Footer/Footer.jsx'
import Header from '../components/Header/Header.jsx'
import Hero from '../components/Hero/Hero.jsx'
import Menu from '../components/Menu/Menu.jsx'
import Service from '../components/Service/Service.jsx'
const Home = () => {
  return (
      <div className='home'>
      <Header />
      <Hero />
      <Menu /> 
      <Service />
      <Footer/>
    </div>
  )
}

export default Home