import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movie_id }) => {
  console.log(movie_id);
  useMovieTrailer(movie_id);
  const trailerVideo=useSelector((store)=>store.movies?.trailerVideo);
  console.log("rendering vb");
  console.log("ye vb");
  
  console.log(trailerVideo?.key);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       ></iframe>
    </div>
  );
};

export default VideoBackground;
