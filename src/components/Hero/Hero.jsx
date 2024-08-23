import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1 className="hero-title">We're more than just Photographers.<br></br> We're StoryTellers</h1>
            <p className="hero-subtitle">We're passionate about using photography as a form of artistic expression. Our goal is to create stunning visuals that not only tell a story but also evoke a sense of wonder and beauty.</p>
            <br></br> 
            <button className="btn">Explore More <img className='hero-arrow' src={dark_arrow} alt="" /></button>
        </div>

    </div>
  )
}

export default Hero