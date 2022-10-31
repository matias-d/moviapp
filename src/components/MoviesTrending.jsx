import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { GetMoviesTrending } from '../services/GetMoviesTrending';


export const MoviesTrending = () => {

    const [movies, setMovies] = useState([]);
    const [time, setTime] = useState('day')

    useEffect(()=>{
        GetMoviesTrending({time : time }).then(setMovies)
    },[time])



  return (
    <div className='flex items-center flex-col gap-3'>
       
        <div className='flex gap-8'>
            <button className={`text-gray-300 border-b-2 ${time === 'day' ? ' border-[#fab387]': 'border-none'} hover:text-gray-400 transition-colors`} onClick={() => setTime('day')}>Day</button>
            <button className={`text-gray-300 border-b-2 ${time === 'week' ? ' border-[#fab387]': 'border-none'}  hover:text-gray-400 transition-colors`}  onClick={() => setTime('week')}>Week</button>
        </div>
        <div className='grid  grid-cols-4 lg:grid-cols-3 gap-3 bg-[#313244] p-3 rounded-xl w-sm lg:w-[300px]'>
            {
                movies.map((movie) =>(
                    <div className='w-20 relative' key={movie.id}>
                        <Link to={`/movie/${movie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path }`} className='rounded-xl w-30 hover:brightness-75  transition-all' />
                            <h3 className='text-gray-400 text-center text-sm'>{movie.title}</h3>
                        </Link>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
