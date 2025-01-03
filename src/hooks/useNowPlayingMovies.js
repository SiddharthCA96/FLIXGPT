import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

//this hook is used to get the nowplayingmovies from tmdb

const useNowPlayingMovies = () => {
    console.log("rendering now playing");
    
  const dispatch = useDispatch();

  //fcn to get recenltly/now playing movies
  const nowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
     console.log("rendering now playing");
     //console.log(json.results);
    dispatch(addNowPlayingMovies({ nowPlayingMovies: json.results }));
    //dispatch(addNowPlayingMovies(data.results));
  };

  //calling the nowplayingmovies from useeffect as you know
  useEffect(() => {
    nowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
