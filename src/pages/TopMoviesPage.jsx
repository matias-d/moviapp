import React from 'react'
import { MovieTopRated } from '../components/MovieTopRated'
import { Nav } from '../components/Nav'

export const TopMoviesPage = () => {
  return (
    <div className='text-white font-bold tracking-widest '>
        <div className='fixed z-50 flex justify-center lg:block  pl-20 pr-24 py-5   top-0 w-full w-full bg-[#1e1e2e]'>

          <Nav />
        </div>
        <div className='pt-24 pb-4 lg:pt-14 lg:mt-0'>
          <MovieTopRated />
        </div>
    </div>
  )
}
