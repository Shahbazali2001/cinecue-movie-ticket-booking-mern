import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets.js'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5'>
       <Link className='max-md:flex-1' to={'/'}>
            <img src={assets.logo} className='w-36 h-auto' alt="" />
       </Link>
    </div>
  )
}

export default Navbar