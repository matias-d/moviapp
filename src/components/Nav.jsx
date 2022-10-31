import React from 'react'
import { Link } from 'react-router-dom';
import { 
  RiHome3Line,
  RiBracesLine,
  RiBarChartFill
 } from "react-icons/ri";

export const Nav = () => {
  return (
    <div className='flex  gap-4 order-1 lg:order-none'>
            <Link to='/'>
              <img src='/src/assets/multimedia.png' className='w-10 hidden lg:block'/>
            </Link>
            <ul className='flex items-center gap-4'>
              <li>
                <Link to='/' className='flex items-center gap-1 text-sm text-gray-300 lg:hover:bg-[#313244] py-3 lg:px-4 px-2 rounded-xl transition-colors'><RiHome3Line/>Home</Link>
              </li>
              <li>
                <a href='#' className='flex items-center gap-1 text-sm text-gray-300 lg:hover:bg-[#313244] py-3 lg:px-4 px-2 rounded-xl transition-colors'><RiBracesLine/> About</a>
              </li>
              <li>
                <Link to='/top' className='flex items-center gap-1 text-sm text-gray-300 lg:hover:bg-[#313244] py-3 lg:px-4 px-2 rounded-xl transition-colors'><RiBarChartFill/> Top </Link>
              </li>
            </ul>
    </div>
  )
}
