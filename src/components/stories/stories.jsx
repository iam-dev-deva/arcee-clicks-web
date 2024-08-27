import React from 'react'
import './Stories.css'
import story_1 from '../../assets/program-1.jpg'
import story_2 from '../../assets/program-2.jpg'
import story_3 from '../../assets/program-3.jpg'
import story_icon_1 from '../../assets/program-icon-1.svg'
import story_icon_2 from '../../assets/program-icon-2.svg'
import story_icon_3 from '../../assets/program-icon-3.svg'

const Stories = () => {
  return (
    <div className='stories'>
        <div className='story'>
            <img src={story_1} alt="" />
            <div className="caption">
              <img src={story_icon_1} alt="" />
              <p>My Favorite</p>
            </div>
        </div>
        <div className='story'>
            <img src={story_2} alt="" />
            <div className="caption">
              <img src={story_icon_2} alt="" />
              <p>Classic One</p>
            </div>
        </div>
        <div className='story'>
            <img src={story_3} alt="" />
            <div className="caption">
              <img src={story_icon_3} alt="" />
              <p>Fav Art</p>
            </div>
        </div>
    </div>
  )
}

export default Stories