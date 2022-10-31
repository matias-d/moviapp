import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { GetMoviesRated } from '../services/GetMoviesRated';

import { PagesMovies } from './PagesMovies';
import { Spinner } from './spinner/Spinner';

export const MovieTopRated = () => {

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1)
    const [loading , setLoading] = useState(true)

    useEffect(()=>{
        setLoading(true)
        GetMoviesRated({page : page }).then(res =>{
            setMovies(res)
            setLoading(false)
        })
    },[page])

  return (
    <div className='flex items-center flex-col '>
        <h2 className='text-center mb-2 lg:pt-12 text-[#bac2de] font-semibold flex items-center justify-center gap-1 '>Top Movies Rated</h2>
        <PagesMovies page={page} setPage={setPage}/>

        {
            loading ? <Spinner />
            : 
            (
                <div className='grid  grid-cols-2 lg:grid-cols-5 gap-4  p-3 rounded-xl  lg:w-[970px]'>
                    {
                        movies.map((movie) =>(
                            <div className=' relative flex flex-col items-center' key={movie.id}>
                            <Link to={`/movie/${movie.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path }`} className='rounded-xl w-40 lg:w-100 hover:brightness-75  transition-all' />
                                <h3 className='text-center text-gray-400 w-40 text-center text-sm'>{movie.title}</h3>
                                <p className='absolute top-1 left-3  font-normal text-gray-200 text-sm bg-blue-700 rounded-full  text-center p-[2px]'>{movie.vote_average}</p>
                            </Link>
                            </div>
                        ))
                    }
             </div>
            )
        }

        <PagesMovies page={page} setPage={setPage}/>
    </div>
  )
}
