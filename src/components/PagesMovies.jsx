import { RiArrowLeftSFill, RiArrowRightSFill } from 'react-icons/ri'

export const PagesMovies = ({page, setPage}) =>{
    return ( 
        <div className='flex w-full justify-between py-2 px-12'>
            {
                page == 1 
                ? 
                <button onClick={() => null} className='bg-gray-600 rounded-xl text-2xl text-white'>
                <RiArrowLeftSFill/>
                </button> 
                :
                <button onClick={() => setPage(page - 1)}  className='bg-blue-500 rounded-xl text-2xl text-white'>
                <RiArrowLeftSFill/>
                </button> 
            }
                <button onClick={() => setPage(page + 1)}  className='bg-blue-500 rounded-xl text-2xl text-white'>
                <RiArrowRightSFill/>
                </button>
        </div>
    )
}