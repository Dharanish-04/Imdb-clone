import React from "react";
import { useState } from "react";
import WatchList from "./WatchList";



function MovieCard({
  poster_path,
  watchlist,
  original_title,
  movieObj,
  handleAddToWatchlist,
  handleRemovefromWatchlist,
}) {
  if (!poster_path) return null;

  function doesContain(movieObj) {
  
  for (let i = 0; i < watchlist.length; i++) {
    if (watchlist[i].id === movieObj.id) {
      return true;
    }
  }
  return false;
}


  return (
    <>
    
      <div className="w-[180px]">
        <div
          className="h-[40vh] bg-center bg-cover rounded-xl hover:scale-110 duration-200 cursor-pointer"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
          }}
        >
 {doesContain(movieObj) ? (
  <div
    onClick={() => {
         handleRemovefromWatchlist(movieObj)
         
    }
     
    }
    className="m-20 h-6 w-6 text-right transform translate-x-16 translate-y-2 cursor-pointer bg-gray-900/60 rounded-lg"
  >
    &#10084; {/* Red heart when movie is in the watchlist */}
  </div>
) : (
  <div
    onClick={() => 
      handleAddToWatchlist(movieObj)
    }
    className="m-20 h-6 w-6 text-right transform translate-x-16 translate-y-2 cursor-pointer bg-gray-900/60 rounded-lg"
  >
    &#129293; {/* White heart when movie is NOT in the watchlist */}
  </div>
)}

</div>
        <div className="w-full text-center text-white hover:scale-110 duration 250 mt-5 px-2 py-1 cursor-pointer border-radius-15px rounded-md border border-black-600 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 shadow-md text-sm font-semibold truncate">
          {original_title}
        </div>
      </div>
    </>
  );
}

export default MovieCard;
