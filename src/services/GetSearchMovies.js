import { API_KEY } from "./apiconfig"

export function GetSearchMovies({movie, page}){
    return fetch(`http://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${API_KEY}&language=es-MX&page=${page}`)
    .then((res) => res.json())
    .then((data) =>{
      const { results } = data
      const apiRes = results.map((movie) =>{
        const { id, title, release_date, poster_path } = movie
        const date = new Date(release_date)
        const onlyYear = date.getFullYear()
        return {id, title, onlyYear, poster_path}
      })
      return apiRes
    })
}