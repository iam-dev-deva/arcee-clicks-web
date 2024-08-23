import React from 'react'
import './Album.css'
import gallery_1 from '../../assets/gallery/gallery-1.jpg'
import gallery_2 from '../../assets/gallery/gallery-2.jpg'
import gallery_3 from '../../assets/gallery/gallery-3.jpg'
import gallery_4 from '../../assets/gallery/gallery-4.jpg'
import gallery_5 from '../../assets/gallery/gallery-5.jpg'
import gallery_6 from '../../assets/gallery/gallery-6.jpg'
import gallery_7 from '../../assets/gallery/gallery-7.jpg'
import gallery_8 from '../../assets/gallery/gallery-8.jpg'
import white_arrow from '../../assets/white-arrow.png'

const Album = () => {
  return (
    <div className='album'>
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
            <img src={gallery_5} alt="" />
            <img src={gallery_6} alt="" />
            <img src={gallery_7} alt="" />
            <img src={gallery_8} alt="" />
        </div>
        <button className='btn dark-btn'>See more<img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Album