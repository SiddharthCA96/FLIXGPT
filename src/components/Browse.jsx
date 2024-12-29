import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';
import GptSearch from './GptSearch';

const Browse = () => {
  const showgptsearch=useSelector((store)=>store.gpt.gptsearch);
  //calling the hoook responsible to fetch nowplaying movie
  useNowPlayingMovies();

  //calling hook responsibl for fetching popular movies
  usePopularMovies();

  //calling hook responsibl for fetching top rated movies movies
  useTopRated();

   //calling hook responsibl for fetching upcoming movies movies
   useUpcomingMovies()
  return (
    <div>
      <Header />
      {
        showgptsearch?(
          <GptSearch />
        ):(
          <>
            <MainContainer />
            <SecondryContainer />
          </>
        )
      }
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
