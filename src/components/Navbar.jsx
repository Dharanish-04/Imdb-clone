import React from 'react'
import Logo from '../image.png' // Adjust the path as necessary
import { Link } from 'react-router-dom' // Import Link for navigation This is used to make smooth relod , reloading wont be visible in the browser
const Navbar = () => {
  return (
    <div className='flex border space-x-10 items-center pl-5  py-5 bg-gray-800 text-white'>
    
        <img src={Logo} className='w-[30px] 'alt="IMDb Clone Logo" style={{ width: '100px', height: 'auto' }} />

        <Link to = "/"  className='text-1xl hover:scale-110 duration-200 cursor-pointer'>MOVIES</Link>
        <Link to = "/watchlist" className='text-1xl hover:scale-110 duration-200 cursor-pointer ' > WATCHLIST </Link>
        <Link to = "/about" className='text-1xl hover:scale-120 duration-200 cursor-pointer ' > ABOUT </Link>
        <Link to = "/signin" className='text-1xl hover:scale-110 duration-200 cursor-pointer' > SIGN IN </Link>

    </div>
  )
}

export default Navbar
