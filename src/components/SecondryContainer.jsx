import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';
import MovieCard from './MovieCard';

const SecondryContainer = () => {

  const movies=useSelector(store=>store.movies);
  console.log("inside secondry ");
  console.log(movies.popularMovies.length);
  
  
  return (
    movies.nowPlayingMovies&&movies.popularMovies&&(
      <div className='-mt-40 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Action"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Kids"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Comedy"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Thriller"} movies={movies.nowPlayingMovies} />
    </div>
    )
  )
}

export default SecondryContainer
