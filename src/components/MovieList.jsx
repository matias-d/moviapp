
import { Movie } from './Movie';

export const MovieList = ({movies}) => {
    

  return (

    <div className='flex flex-col justify-center items-center'>
        <div className='grid grid-cols-2 lg:grid-cols-4 py-4 gap-8  '>
            {
                movies.map((movie) =>(
                <Movie key={movie.id} movie=
                {movie}/>
             ))
             }
        </div>

    </div>
  )
}
