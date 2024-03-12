import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/navStyleUseLink.css'

export const NavBarUseLink = () => {
  return (
    <nav className='navBar'>
        <NavLink to = '/'>Home</NavLink>
        <NavLink to = '/about'>About</NavLink>
        <NavLink to = '/contact'>Contact</NavLink>
        <NavLink to = '/service'>Service</NavLink>
        <NavLink to = '/product'>Product</NavLink>
    </nav>
  )
}
