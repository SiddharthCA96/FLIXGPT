import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondryContainer = () => {

  const movies=useSelector((store)=>store.movies);
  if(!movies)return;
  console.log("inside secondry ");
  console.log(movies.popularMovies?.popularMovies?.length);
  
  
  return (
    (
      <div className='-mt-40 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList title={"Coming Soon"} movies={movies.upComingMovies} />
    </div>
    )
  )
}

export default SecondryContainer
