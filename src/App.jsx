
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { MovieDetailsPage } from './pages/MovieDetailsPage'
import { TopMoviesPage } from './pages/TopMoviesPage'

function App() {

  return (
    <div className="bg-[#1e1e2e] min-h-screen ">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/search/:id' element={<HomePage />}/>
        <Route path='/top' element={<TopMoviesPage />}/>
        <Route path='/movie/:movie' element={<MovieDetailsPage />}/>
      </Routes>
    </div>
  )
}

export default App
