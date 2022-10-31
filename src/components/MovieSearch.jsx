import React, { useState } from 'react'
import {RiSearchLine} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';


export const MovieSearch = () => {

    const [movies, setMovies] = useState('');
    const navigate = useNavigate()

    const handleChange = (e)=>{
        setMovies(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        navigate('/search/' + movies)
        setMovies('')
    }

  return (
    <form onSubmit={handleSubmit} className='relative'>
        <input
        value={movies}
        onChange={(e) => handleChange(e)  } 
        type='text' 
        placeholder='Search'
        className='rounded-full bg-[#313244] py-2 pl-8 pr-4 text-gray-400 outline-none text-sm'    
        />
        <RiSearchLine className='absolute top-3 left-3 text-sm' />
    </form>
  )
}
