import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    //get the movies data from store (using selecter)
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies?.nowPlayingMovies);
    //early return
    if(!movies)return;
    //console.log(movies.length);
    
    const randomInt = Math.floor(Math.random() * movies.length);
    
    const  mainMovie=movies[randomInt]; 
    console.log(mainMovie);
    
    const {original_title,overview,id}=mainMovie;
    console.log('Rendering MainContainer');
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movie_id={id} />
    </div>
  )
}

export default MainContainer
