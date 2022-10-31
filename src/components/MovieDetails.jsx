import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GetMoviesDetails } from '../services/GetMovieDetails';
import { Spinner } from './spinner/Spinner';



export const MovieDetails = () => {

  const [movieDetail, setMovieDetail] = useState([]);
  const [loading, setLoading] = useState(true)

  const { movie } = useParams()

  useEffect(() => {
    setLoading(true)
    GetMoviesDetails({id : movie}).then((res) =>{
      setMovieDetail(res)
      setLoading(false)
    })
  }, [movie]);
  
  return (
    <div className='flex flex-col items-center justify-center relative'>
      {
        loading ? <Spinner />
        : 
        (
          <>

          <img src={`https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path} `} className='h-[500px] w-full brightness-50 blur-[2px] object-cover hidden lg:block'/>
          <div className='flex items-center flex-col lg:flex-row lg:absolute top-15 left-70 gap-4 '>
            <img src={`https://image.tmdb.org/t/p/w300/${movieDetail.poster_path}`} className='rounded-lg w-[200px] lg:w-[300px]'/>
            <div className='text-center lg:text-start  flex justify-center items-center lg:items-start flex-col w-full lg:w-[500px] gap-3'>
              <h1 className='text-gray-200 text-4xl font-semibold'>{movieDetail.title}</h1>
              <h3 className='text-sm text-gray-400 font-medium'>{movieDetail.original_title}</h3>
              <div className='flex gap-4'>
                <p className='text-gray-300 bg-blue-600 w-12 text-sm rounded-lg py-[1px] px-1'>
                {movieDetail.onlyYear}</p>
                <p className='text-sm text-gray-200 border-b-2 border-[#df8e1d]'>{movieDetail.vote_average}</p>
              </div>
              <h3 className='text-gray-300 font-semibold'>{movieDetail.tagline}</h3>
              <p className='text-gray-300 text-sm'>{movieDetail.overview}</p>
            </div>
          </div>
          </>
        )
      }
    </div>
  )
}
