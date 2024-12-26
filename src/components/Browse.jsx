
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
const Browse = () => {
  const dispatch=useDispatch();
  //fcn to get recenltly/now playing movies
  const nowPlayingMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTIONS);
    const json=await data.json();
   // console.log(json.results);
    dispatch(addNowPlayingMovies({nowPlayingMovies:json.results}));
  }

  //calling the nowplayingmovies from useeffect as you know
  useEffect(()=>{
    nowPlayingMovies();
  },[]); 
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from black z-10'>
      <Header />
    </div>
  )
}

export default Browse
