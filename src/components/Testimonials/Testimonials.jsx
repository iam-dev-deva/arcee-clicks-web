import React, { useRef } from 'react'
import './ctestimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import source from '../../assets/source.json'

const Testimonial = () => { 
    const slider = useRef();
    let tx = 0; 

    const slideForward = ()=>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = ()=>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
    <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={source['user-1']} alt="" />
                        <div>
                            <h3>Kiruthi</h3>
                            <span>Karur, TamilNadu</span>
                        </div>
                    </div>
                    <p>I am so pleased with these headshots. 
                        I can’t tell you how nice it is to see some photos of myself looking happy 
                        and normal! I am absolutely thrilled to have some photos that I can share with
                         my children and use for my website.</p>

                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={source['user-2']} alt="" />
                        <div>
                            <h3>SK</h3>
                            <span>Chennai, TamilNadu</span>
                        </div>
                    </div>
                    <p>I am absolutely thrilled with the photos.
                         Louise perfectly captured Caleb’s personality, 
                         and I look better than I imagined I would after so little sleep. 
                         The photos are absolutely stunning</p>
                         
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={source['user-3']} alt="" />
                        <div>
                            <h3>Sakura</h3>
                            <span>Leaf Village</span>
                        </div>
                    </div>
                    <p>Thank you so so much, Ronny! 
                        I am starting to look at them now and wow!!
                         they are absolutely amazing! I will give you great reviews!
                          So many compliments on the night about you capturing all the moments </p>
                         
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={source['user-4']} alt="" />
                        <div>
                            <h3>Luffy</h3>
                            <span>Marine</span>
                        </div>
                    </div>
                    <p>Wow, we are absolutely in love with the photographs you captured of our special day! 
                        Thank you so much!! It was really wonderful and meaningful when we viewed
                         your photos - we felt we got to relive it.</p>
                         
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={source['user-5']} alt="" />
                        <div>
                            <h3>Itachi</h3>
                            <span>Konan</span>
                        </div>
                    </div>
                    <p>Wow, we are absolutely in love with the photographs you captured of our special day! 
                        Thank you so much!! It was really wonderful and meaningful when we viewed
                         your photos - we felt we got to relive it.</p>
                         
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={source['user-2']} alt="" />
                        <div>
                            <h3>Konan</h3>
                            <span>rain</span>
                        </div>
                    </div>
                    <p>Wow, we are absolutely in love with the photographs you captured of our special day! 
                        Thank you so much!! It was really wonderful and meaningful when we viewed
                         your photos - we felt we got to relive it.</p>
                         
                </div>
            </li>
        </ul>
    </div>
    </div>
  )
}

export default Testimonial