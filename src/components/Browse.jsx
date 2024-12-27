import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';

const Browse = () => {
  
  //calling the hoook responsible to fetch nowplaying movie
  useNowPlayingMovies();
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
