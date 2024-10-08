import React from 'react'
import './stories.css'
import source from '../../assets/source.json'
import story_icon_1 from '../../assets/program-icon-1.svg'
import story_icon_2 from '../../assets/program-icon-2.svg'
import story_icon_3 from '../../assets/program-icon-3.svg'

const stories = () => {
  return (
    <div className='stories'>
        <div className='story'>
            <img src={source['program-1']} alt="" />
            <div className="caption">
              <img src={story_icon_1} alt="" />
              <p>My Favorite</p>
            </div>
        </div>
        <div className='story'>
            <img src={source['program-2']} alt="" />
            <div className="caption">
              <img src={story_icon_2} alt="" />
              <p>Classic One</p>
            </div>
        </div>
        <div className='story'>
            <img src={source['program-3']} alt="" />
            <div className="caption">
              <img src={story_icon_3} alt="" />
              <p>Fav Art</p>
            </div>
        </div>
    </div>
  )
}

export default stories