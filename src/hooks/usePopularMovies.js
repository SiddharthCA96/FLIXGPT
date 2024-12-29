import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

//this hook is used to get the nowplayingmovies from tmdb

const usePopularMovies = () => {
    console.log("rendering popular");
    
  const dispatch = useDispatch();

  //fcn to get recenltly/now playing movies
  const popularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
     console.log("rendering inside pm");
     //console.log(json.results);
     dispatch(addPopularMovies({ popularMovies: json.results }));
    //dispatch(addPopularMovies(json.results))
  };

  //calling the nowplayingmovies from useeffect as you know
  useEffect(() => {
    popularMovies();
  }, []);
};

export default usePopularMovies;
