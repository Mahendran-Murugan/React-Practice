import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/style.css'

export const Home = () => {
  return (
    <div>
        <nav className='navBar'>
            <Link to = '/'>Home</Link>
            <Link to = '/about'>About</Link>
            <Link to = '/contact'>Contact</Link>
            <Link to = '/service'>Service</Link>
        </nav>
    </div>
  )
}
