import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies=useSelector((store)=>store.movies?.nowPlayingMovies?.nowPlayingMovies);

  if (!movies) return;

  const randomInt = Math.floor(Math.random() * movies.length);
    
  const  mainMovie=movies[randomInt]; 
  console.log("mc");
  
  console.log(mainMovie);
  

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};
export default MainContainer;

