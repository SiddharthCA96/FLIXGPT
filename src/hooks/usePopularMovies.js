import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  console.log("Inside popular movies");

  const dispatch = useDispatch();
  //fcn to get popular movies
  const getPopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();
    console.log(data);
    dispatch(addPopularMovies(data.results));
    //dispatch the action to add the popular movies to store
    //dispatch(addPopularMovies({popularMovies:data.results}));
  };

  //calling above fcn inside useeffevt
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
