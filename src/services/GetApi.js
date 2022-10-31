import { API_KEY } from "./apiconfig"

export function GetApi({page}){
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}&language=es-MX`)
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