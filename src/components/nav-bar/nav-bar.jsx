import React, { useEffect, useState } from 'react'
import './nav-bar.css'
import source from '../../assets/source.json'
import menu_icon from '../../assets/menu-icon.png'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const NavBar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    })
  }, [])
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container  ${sticky ? `dark-nav` : ''}`} >
      <img className='logo' src={source.logo} alt="" />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='stories' smooth={true} offset={-250} duration={800}>Stories</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={800}>About us</Link></li>
        <li><Link to='album' smooth={true} offset={-180} duration={800}>Album</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-220} duration={800}>Testimonials</Link></li>
        <li><Link className='btn' to='contact' smooth={true} offset={-220} duration={800}>Contact us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default NavBar