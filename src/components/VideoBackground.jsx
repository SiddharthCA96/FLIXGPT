import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ( movie_id ) => {
  console.log(movie_id);
  useMovieTrailer(movie_id);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  console.log("rendering vb");
  console.log(trailerVideo?.key);

  return (
    <div className="w-screen">
      {/* Video Background */}
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
