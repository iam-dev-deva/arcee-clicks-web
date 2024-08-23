import React from 'react'
import NavBar from './components/nav-bar/nav-bar'
import Hero from './components/hero/hero'
import Stories from './components/stories/stories'
import Title from './components/Title/title'
import About from './components/About/About'
import Album from './components/Album/Album'
import Testimonials from './components/Testimonials/testimonials'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <div className="container">
          <Title subTitle='Some of Our' title='Stories' />
        <Stories/>
        <About/>
        <Title subTitle='Some of Fav' title='Album' />
        <Album/>
        <Title subTitle='Testimonials' title='Client Comments' />
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact/>
        </div>
        
    </div>
  )
}

export default App