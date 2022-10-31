import { API_KEY } from "./apiconfig"


export function GetMoviesSimilar({id}){
    return fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=es-MX`)
    .then((res) => res.json())
    .then((data) =>{
      const { results } = data
      const apiRes = results.map((movie) =>{
        const { id, title, release_date, poster_path } = movie
        const date = new Date(release_date)
        const onlyYear = date.getFullYear()
        return {id, title, onlyYear, poster_path }
      })
      return apiRes
    })
}