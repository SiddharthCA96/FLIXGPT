import React, { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';

const VideoBackground = ({ movie_id }) => {
    console.log(movie_id);
    
  const getMovieTrailer = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error('Error fetching movie trailer:', error);
    }
  };

  useEffect(() => {
    if (movie_id) {
      getMovieTrailer();
    }
  }, [movie_id]);

  return <div>Video Background</div>;
};

export default VideoBackground;
