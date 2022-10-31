import { useEffect, useState } from "react"
import { GetApi } from '../services/GetApi';
import { GetSearchMovies } from '../services/GetSearchMovies';


export const useMovies = ({id}) =>{

    const [movies, setMovies] = useState([]);
    const [loader, setLoader] = useState(true)
    const [page, setPage] = useState(1)

    useEffect(()=>{
        setLoader(true)
        if(id){
            GetSearchMovies({movie : id, page : page}).then((res) =>{
                setMovies(res)
                setLoader(false)
            })
        }else{
            GetApi({page : page}).then((res) =>{
                setMovies(res)
                setLoader(false)
            })
        }
    },[id, page])

    return {movies, loader, page, setPage}
} 