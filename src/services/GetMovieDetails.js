import { API_KEY } from "./apiconfig"


export function GetMoviesDetails({id}){
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es-MX`)
    .then((res) => res.json())
    .then((response) =>{
        const {id, backdrop_path, overview, title, poster_path, release_date, tagline, vote_average, original_title } = response
        const date = new Date(release_date)
        const onlyYear = date.getFullYear()
        return { id, backdrop_path, overview, title, poster_path, onlyYear, tagline, vote_average, original_title}
      })
}