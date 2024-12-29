import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("inside MovieList");
  console.log(movies);

  return (
    <div className="px-6 py-2 bg-black w-full">
      <h1 className="text-4xl text-white font-semibold pb-4">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {title === "Now Playing" && movies?.nowPlayingMovies?.map(movie => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
          {title === "Popular" && movies?.popularMovies?.map(movie => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
          {title === "Top Rated" && movies?.topRatedMovies?.map(movie => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;