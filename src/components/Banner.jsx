import React, { useState, useEffect } from "react";

function Banner({ movies, watchlist, handleAddToWatchlist }) { 
  const [search, setSearch] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const bannerMovies = movies.slice(0, 20);

  // Auto-rotate banner
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % bannerMovies.length);
        setFade(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, [bannerMovies.length]);

  const currentMovie = bannerMovies[currentIndex];

  const filteredMovies = movies.filter((movieObj) => {
    const title = movieObj.title || movieObj.name || "";
    return title.toLowerCase().includes(search.toLowerCase());
  });

  // Helper function to check if movie is in watchlist
  const isMovieInWatchlist = (movieObj) => watchlist?.some(m => m.id === movieObj.id);

  return (
    <>
      {/* Search bar */}
      <div className="flex justify-center my-8">
        <div className="relative w-full max-w-2xl">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
          </div>
          <input
            type="text"
            onChange={handleSearch}
            value={search}
            placeholder="Search title..."
            className="h-12 w-full pl-10 pr-4 bg-white rounded-md text-gray-800 border shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* Search Results */}
          {search && filteredMovies.length > 0 && (
            <div className="absolute top-14 left-0 w-full bg-white shadow-lg rounded-md max-h-80 overflow-y-auto z-50">
              {filteredMovies.map((movieObj) => (
                <div
                  key={movieObj.id}
                  className="p-6 border-b rounded-md hover:bg-gray-100 cursor-pointer flex gap-6 items-center"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w92/${movieObj.poster_path}`}
                    alt={movieObj.title || movieObj.name}
                    className="w-24 h-30 object-cover rounded-md"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold">{movieObj.title || movieObj.name}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{movieObj.overview}</p>
                  </div>

                  {/* Single button using ternary for class & text */}
                  <button
                    onClick={() => handleAddToWatchlist(movieObj)}
                    className={`px-4 py-2 font-semibold rounded-lg shadow transition ${
                      isMovieInWatchlist(movieObj)
                        ? "bg-green-500 text-white cursor-default"
                        : "bg-yellow-400 hover:bg-yellow-500 text-black"
                    }`}
                    disabled={isMovieInWatchlist(movieObj)}
                  >
                    {isMovieInWatchlist(movieObj) ? "Added" : "Add"}
                  </button>
                </div>
              ))}
            </div>
          )}

          {search && filteredMovies.length === 0 && (
            <div className="absolute top-14 left-0 w-full bg-white shadow-lg rounded-md p-3 text-gray-600 text-center z-50">
              No results found
            </div>
          )}
        </div>
      </div>

      {/* Rotating Banner */}
      {currentMovie && (
        <div className="flex justify-center my-6">
          <div
            className={`w-full max-w-6xl h-[60vh] md:h-[70vh] bg-cover bg-center flex items-end relative rounded-2xl overflow-hidden shadow-lg transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${currentMovie.backdrop_path})`,
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-0 w-full flex justify-center">
              <div className="bg-black/40 backdrop-blur-sm text-white text-2xl md:text-4xl font-semibold text-center p-4 w-full">
                {currentMovie.title || currentMovie.name}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Banner;
