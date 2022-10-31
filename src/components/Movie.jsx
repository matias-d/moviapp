import React from 'react'
import { Link } from 'react-router-dom'
import placeholder from '../assets/placeholder.jpg'

export const Movie = ({movie}) => {
  return (
    <div className='w-40 text-center relative'>
        <Link to={`/movie/${movie.id}`}>
          <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}` : placeholder} className='rounded-xl hover:brightness-75 transition-all ' alt={movie.title}/>
          <h3 className='text-gray-300'>{movie.title}</h3>
          <p className='text-gray-300 bg-blue-600  text-sm rounded-lg py-[1px] px-1 absolute top-1 right-1'>{movie.onlyYear}</p>
        </Link>
    </div>
  )
}
