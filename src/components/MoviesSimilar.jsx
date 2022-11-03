import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GetMoviesSimilar } from '../services/GetMoviesSimilar';
import { Movie } from './Movie';

export const MoviesSimilar = () => {

    const [movies, setMovies] = useState([]);
    const { movie } = useParams()

  useEffect(() => {
    GetMoviesSimilar({id : movie}).then((res) => {
      const resSplice = res.splice(0, 16)
      setMovies(resSplice)
    })

  }, [movie]);

  console.log(movies)

  return (
    <div className='flex flex-col items-center mb-8 lg:mb-0'>
      <h2 className='text-center mb-4 text-[#bac2de] font-semibold '> Movies Similar</h2>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
          {
            movies.map((movie) =>(
              <div>
                <Movie movie={movie}/>
              </div>
            ))
          }
      </div>
    </div>
  )
}
