import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';

const Browse = () => {
  
  //calling the hoook responsible to fetch nowplaying movie
  useNowPlayingMovies();
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from black z-10'>
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
