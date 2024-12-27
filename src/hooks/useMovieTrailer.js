import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

// Hook to fetch the movie trailer from the API and add to the store
const useMovieTrailer = ( movie_id ) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    try {
      // Fetch the videos related to that movie
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
        API_OPTIONS
      );
      console.log("chala");  
      const json = await response.json();
      console.log(json);

      // Get the trailer from the extracted JSON
      const trailer = json.results.find((video) => video.type === "Trailer");
      if (trailer) {
        console.log("Trailer found:", trailer);
        console.log(trailer.key);
        // Add trailer to Redux store
        dispatch(addTrailer(trailer));
        console.log(
          "Trailer URL:",
          `https://www.youtube.com/watch?v=${trailer.key}`
        );
      } else {
        console.warn("No trailer found in the video results.");
        // If no trailer, you could optionally set any video to trailer:
        // trailer = json.results[0];
      }
    } catch (error) {
      console.error("Error fetching movie trailer:", error);
    }
  };

  useEffect(() => {
    if (movie_id) {
      getMovieTrailer();
    }
  }, [movie_id]); 
};

export default useMovieTrailer;
