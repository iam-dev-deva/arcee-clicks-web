import React from 'react'
import './Album.css'
import source from '../../assets/source.json'
import white_arrow from '../../assets/white-arrow.png'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const Album = () => {
  return (
    <div className='album'>
        <div className="gallery">
            <img src={source.albums[0]['album-1']} alt="" />
            <img src={source.albums[0]['album-2']} alt="" />
            <img src={source.albums[0]['album-3']} alt="" />
            <img src={source.albums[0]['album-4']} alt="" />
            <img src={source.albums[0]['album-5']} alt="" />
            <img src={source.albums[0]['album-6']} alt="" />
            <img src={source.albums[0]['album-7']} alt="" />
            <img src={source.albums[0]['album-8']} alt="" />
        </div>
        <a target='blank' href='https://www.instagram.com/arcee_clicks?igsh=NjNjNHkwMDM2bDFs' className='btn dark-btn'>See more<img src={white_arrow} alt="" /></a>
    </div>
  )
}

export default Album