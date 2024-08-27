import React, { useState } from 'react'
import NavBar from './components/nav-bar/nav-bar'
import Hero from './components/Hero/Hero'
import Stories from './components/stories/stories'
import Title from './components/Title/title'
import About from './components/About/About'
import Album from './components/Album/Album'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
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
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact/>
        <Footer/>
        </div>
        <VideoPlayer playerState={playerState} setPlayerState={setPlayerState}/>
    </div>
  )
}

export default App