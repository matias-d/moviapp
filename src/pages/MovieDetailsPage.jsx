import React from 'react'
import { MovieDetails } from '../components/MovieDetails'
import { MoviesSimilar } from '../components/MoviesSimilar'
import { MoviesTrending } from '../components/MoviesTrending'
import { Nav } from '../components/Nav'

export const MovieDetailsPage = () => {
  return (
    <div className=' tracking-widest'>
    <div className='fixed z-50 flex justify-center lg:block  pl-20 pr-24 py-5   top-0 w-full w-full bg-[#1e1e2e]'>
      <Nav />
    </div>
    <div className='pt-28'>
      <MovieDetails />
    </div>
      <div className='grid grid-cols-1 lg:grid-cols-6 py-6'>
        <div className='lg:col-span-4'>
          <MoviesSimilar />
        </div>
        <div className='lg:col-span-2'>
          <MoviesTrending />
        </div>
      </div>
    </div>
  )
}
