import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTopRatedMovies } from '../utils/moviesSlice'
const useTopRated = () => {
    
    const dispatch=useDispatch();

    //function to fetch top rated movies
    const topRated= async ()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);

        const json=await data.json();

        //dispatch action to add toprated to store

        dispatch(addTopRatedMovies({topRatedMovies:json.results}));
    }

    useEffect(()=>{
        topRated();
    },[]);
}

export default useTopRated
