import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'

const Browse = () => {
  
  //calling the hoook responsible to fetch nowplaying movie
  useNowPlayingMovies();
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from black z-10'>
      <Header />
    </div>
  )
}

export default Browse
