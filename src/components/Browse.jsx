import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';

const Browse = () => {
  
  //calling the hoook responsible to fetch nowplaying movie
  useNowPlayingMovies();

  //calling hook responsibl for fetching popular movies
  usePopularMovies();

  //calling hook responsibl for fetching top rated movies movies
  useTopRated();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondryContainer />
      {/*
        MAIN CONTAINER
         -VIDEO IN BACKGROUND
         -VIDEO TITLE
        -SECONDRY CONTAINER
         -MOVIES LIST * N
          -CARD * N  
       */}
    </div>
  )
}

export default Browse
