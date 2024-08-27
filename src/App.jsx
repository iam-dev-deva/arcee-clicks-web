import React, { useState } from 'react'
import NavBar from './components/nav-bar/nav-bar'
import Hero from './components/Hero/Hero'
import Stories from './components/stories/stories'
import Title from './components/Title/title'
import About from './components/About/About'
import Album from './components/Album/Album'
import Testimonial from './components/Testimonials/testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/footers'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {
  const [playerState,setPlayerState]=useState(false);
  return (
    <div>
        <NavBar/>
        <Hero/>
        <div className="container">
          <Title subTitle='Some of Our' title='Stories' />
        <Stories/>
        <About setPlayerState={setPlayerState}/>
        <Title subTitle='Some of Fav' title='Album' />
        <Album/>
        <Title subTitle='Testimonials' title='Client Comments' />
        <Testimonial/>
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact/>
        <Footer/>
        </div>
        <VideoPlayer playerState={playerState} setPlayerState={setPlayerState}/>
    </div>
  )
}

export default App