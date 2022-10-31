import React from 'react'
import { MovieList } from '../components/MovieList'
import { MovieSearch } from '../components/MovieSearch';
import { useParams } from 'react-router-dom';
import { MoviesTrending } from '../components/MoviesTrending';
import { Nav } from '../components/Nav';
import { useMovies } from '../hooks/useMovies';
import { PagesMovies } from '../components/PagesMovies';
import { Spinner } from '../components/spinner/Spinner';
import { Empty } from '../components/Empty';




export const HomePage = () => {

  const {id}  = useParams()

 const {movies, loader, page, setPage } = useMovies({id : id})


  return (
    <div>
        <header className=' fixed w-full z-40 bg-[#1e1e2e] text-white py-5 pl-20 pr-24 lg:mb-3 font-bold tracking-widest flex flex-col lg:flex-row items-center gap-3  lg:gap-0 lg:justify-between '>
        <Nav/>
        <MovieSearch />
      </header>

      <div className='grid grid-cols-1 pt-[130px] lg:pt-[100px] lg:grid-cols-6'>
        <div className='lg:col-span-4 mb-4 '>
          <h2 className='t text-[#bac2de]
          text-center  font-semibold capitalize '>{id ? `Movies ${id}` : 'Movies Populares'}</h2>
          {
            loader 
            ? <Spinner />
            :
            <>
              <PagesMovies page={page} setPage={setPage}/>
              <MovieList movies={movies} />
              <Empty />
              <PagesMovies page={page} setPage={setPage}/>
            </> 
          }
        </div>
        <div className='lg:col-span-2 pt-2'>
          <h2 className='text-center mb-2 text-[#bac2de] font-semibold '> Movies Trending</h2>
          <MoviesTrending/>
        </div>
      </div>
    </div>
  )
}
