const VideoTitle = ({ title, overview }) => {
  console.log('Rendering VideoTitle');
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start px-10 text-white z-10 bg-gradient-to-r from-black via-transparent to-transparent">
      {/* Title and Overview */}
      <h1 className="text-6xl font-serif mb-4">{title}</h1>
      <p className="text-lg w-1/2 mt-2">{overview}</p>
      <div className="mt-4 flex space-x-2">
        {/* Play Button */}
        <button className="flex items-center justify-center w-32 h-12 bg-white text-black rounded-lg shadow-lg hover:bg-gray-200 focus:outline-none transition duration-300">
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          Play
        </button>

        {/* More Info Button */}
        <button className="flex items-center justify-center w-32 h-12 bg-gray-500 text-white rounded-lg shadow-lg hover:bg-black focus:outline-none transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="mr-2">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-15h2v2h-2zm0 4h2v8h-2z" />
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;