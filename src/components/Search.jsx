const Search = () => {
  return (
    <div className="h-28 mt-32 mx-12">
      <div className=" h-14 flex items-center">
      <input type="search" className="bg-white h-10 w-60 mt-2 mx-2 ring-2 ring-black rounded-full pl-3 transition duration-200 ease-in-out " placeholder="Search" />
        <button className=" bg-white h-10 w-20 mt-2 mx-2 ring-2 ring-black rounded-full">Search</button>
      </div>
        <button className="bg-button w-16 h-7 mt-2 mx-2 text-black font-semibold ring-2 ring-black rounded-full shadow-xl hover:shadow-2xl transition duration-200 ease-in-out transform hover:scale-105 active:scale-95">All</button>
        <button className="bg-button w-16 h-7 mt-2 mx-2 text-black font-semibold ring-2 ring-black rounded-full shadow-xl hover:shadow-2xl transition duration-200 ease-in-out transform hover:scale-105 active:scale-95">Rock</button>
        <button className="bg-button w-16 h-7 mt-2 mx-2 text-black font-semibold ring-2 ring-black rounded-full shadow-xl hover:shadow-2xl transition duration-200 ease-in-out transform hover:scale-105 active:scale-95">Country</button>
        <button className="bg-button w-16 h-7 mt-2 mx-2 text-black font-semibold ring-2 ring-black rounded-full shadow-xl hover:shadow-2xl transition duration-200 ease-in-out transform hover:scale-105 active:scale-95">Pop</button>
        <button className="bg-button w-16 h-7 mt-2 mx-2 text-black font-semibold ring-2 ring-black rounded-full shadow-xl hover:shadow-2xl transition duration-200 ease-in-out transform hover:scale-105 active:scale-95">Jazz</button>
        <button className="bg-button w-16 h-7 mt-2 mx-2 text-black font-semibold ring-2 ring-black rounded-full shadow-xl hover:shadow-2xl transition duration-200 ease-in-out transform hover:scale-105 active:scale-95">Rap</button>
      </div>
  )
}

export default Search