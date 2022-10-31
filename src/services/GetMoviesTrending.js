import { API_KEY } from "./apiconfig"


export function GetMoviesTrending({time}){
    return fetch(`https://api.themoviedb.org/3/trending/movie/${time}?api_key=${API_KEY}&language=es-MX`)
    .then((res) => res.json())
    .then((data) =>{
      const { results } = data
      const apiRes = results.map((movie) =>{
        const { id, title, overview, release_date, poster_path } = movie
        return {id, title, overview, release_date, poster_path }
      })
      return apiRes
    })
}