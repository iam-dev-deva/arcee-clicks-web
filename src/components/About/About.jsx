import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />
        </div>
        <div className="about-right">
            <h3>ABOUT ME</h3>
            <h2>Capturing the Heart of Your Story</h2>
            <p>Every photograph is a piece of a larger narrative.
                 We're dedicated to crafting compelling stories
                 through our images, ensuring that each shot contributes to a cohesive and meaningful experience.</p>
            <p>Our images are more than just snapshots; 
                they're time capsules filled with emotions, memories, 
                and the essence of your story.
                 We believe in capturing the intangible moments that define who you are.</p>
            <p>
            Our passion lies in capturing the unique beauty and personality of every individual. 
            We believe that the most memorable portraits are those that tell a story and evoke genuine emotions.
             With a warm and inviting approach,
              we strive to create timeless images that you'll cherish for years to come.
            </p>
        </div>
    </div>
  )
}

export default About