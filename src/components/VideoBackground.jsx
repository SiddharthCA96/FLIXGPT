import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";

const VideoBackground = ({ movie_id }) => {
  console.log(movie_id);
  const dispatch=useDispatch();

  const trailerVideo=useSelector((store)=>store.movies?.trailerVideo);
  const getMovieTrailer = async () => {
    try {
      //fetch the videos related to that movie
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await response.json();
      console.log(json);

      //get the trailer from the extracted json
      const trailer = json.results.find((video) => video.type === "Trailer");
      if (trailer) {
        console.log("Trailer found:", trailer);
        console.log(trailer.key);
        //add trailer in redux store
        dispatch(addTrailer(trailer));
        console.log(
          "Trailer URL:",
          `https://www.youtube.com/watch?v=${trailer.key}`
        );
      } else {
        console.warn("No trailer found in the video results.");
        //if no trailer then set any video to trailer
        //trailer = json.results[0];
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

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+trailerVideo.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       ></iframe>
    </div>
  );
};

export default VideoBackground;
