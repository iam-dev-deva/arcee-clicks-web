import React, { useEffect, useState } from 'react'
import './nav-bar.css'
import logo from '../../assets/logo.png'

const NavBar = () => {

  const [sticky,setSticky]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    })
  },[])

  return (
    <nav className={`container  ${sticky? `dark-nav` : ''}`} >
        <img className='logo' src={logo} alt="" />
        <ul>
            <li>Home</li>
            <li>Stories</li>
            <li>Services</li>
            <li>About us</li>
            <li><button className='btn'>Contact us</button></li>
        </ul>
    </nav>
  )
}

export default NavBar