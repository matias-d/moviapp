import { API_KEY } from "./apiconfig"


export function GetMoviesRated({page}){
    return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${page}&language=es-MX`)
    .then((res) => res.json())
    .then((data) =>{
      const { results } = data
      const apiRes = results.map((movie) =>{
        const { id, title, release_date, poster_path, vote_average } = movie
        return {id, title, release_date, poster_path, vote_average}
      })
      return apiRes
    })
}