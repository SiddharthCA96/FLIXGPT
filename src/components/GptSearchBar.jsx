
const GptSearchBar = () => {
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder="Kya Dekhna Chahte Hai Aaj.."
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
        >
         Search
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;