import React from 'react'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Process from './sections/Process'
import Reviews from './sections/Reviews'
import Faq from './sections/Faq'
import Contact from './sections/Contact'
import Footer from './components/Footer'

const App = () => {
   useEffect(() => {
      window.scrollTo(0, 0)
    }, []);
  return (
    <div className='bg-[#f7f9f6]'>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Process />
      <Reviews />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
