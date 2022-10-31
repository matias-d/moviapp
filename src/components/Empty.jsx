import React from 'react'
import { useParams } from 'react-router-dom'
import { useMovies } from '../hooks/useMovies'

export const Empty = () => {

   const { id }  = useParams()
   const { movies, loader} = useMovies({id : id})

  return (
    <div className='flex justify-center items-center gap-3 flex-col p-2'>  
    {
        movies.length == 0 && !loader ? 
        <>
            <h2 className='text-lg text-white'>"{id}" not found...</h2>
            <img src='https://media.tenor.com/IHdlTRsmcS4AAAAC/404.gif' className='w-[400px]'/>
        </>
        : null
    }
    </div>
  )
}
