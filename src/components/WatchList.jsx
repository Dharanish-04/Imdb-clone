import React ,{useEffect, useState} from 'react';
import Banner from './Banner';
import genreids from '../Utility/Genre';

function WatchList({ watchlist, handleRemovefromWatchlist }) {

  const [search , setSearch] = useState('');
  const[genrelist , setGenrelist] = useState(['All genres']);
  const[currgenre , setCurrgenre] = useState('All genres');

  let handleFilter = (genre) =>{
    setCurrgenre(genre);
  }

  let handleSearch = (e ) =>{

    setSearch(e.target.value)

  }

  useEffect(()=>{
    let temp = watchlist.map((movieObj) =>{
      return genreids[movieObj.genre_ids[0]]
    })
    temp = new Set(temp);
    setGenrelist(['All genres' , ...temp])
    console.log(temp)

  }, [watchlist])


  return (
    <div className='bg-neutral-700 min-h-screen text-black p-6'>
      
      {/* Filter buttons */}
      <div className='flex justify-center my-4'>
<div className="flex flex-wrap">
  {genrelist.map((genre, index) =>
  currgenre === genre ? (
    <div
      key={index}
      onClick={() => handleFilter(genre)}
      className="flex justify-center items-center m-2 rounded-md font-bold h-[2rem] text-sm text-center px-3 truncate cursor-pointer bg-yellow-500"
      style={{ minWidth: "6rem" }}
    >
      {genre}
    </div>
  ) : (
    <div
      key={index}
      onClick={() => handleFilter(genre)}
      className="flex justify-center items-center m-2 rounded-md font-bold h-[2rem] text-sm text-center px-3 truncate cursor-pointer bg-gray-400"
      style={{ minWidth: "6rem" }}
    >
      {genre}
    </div>
  )
)}

</div>


        
        
      </div>

      {/* Search bar */}
      <div className='flex justify-center my-8'>
        <div className='relative w-full max-w-2xl'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <i className='fa-solid fa-magnifying-glass text-gray-500'></i>
          </div>
          <input
            type='text'
            onChange={handleSearch}
            value = {search}
            placeholder='Search title to add'
            className='h-12 w-full pl-10 pr-4 bg-white rounded-md text-gray-800 border shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400'
          />
        </div>
      </div>

      {/* Movie List */}
      <h2 className='text-lg font-semibold mb-4 text-white text-center'>My Watchlist</h2>

      <div className='flex flex-col gap-6 max-w-5xl mx-auto'>
        {watchlist.filter((movieObj) => {
          if(currgenre=='All genres')
          {
            return true;
          }
          else{
           return movieObj.genre_ids.some(
              (id) => genreids[id] === currgenre
            );

          }
        }).filter((movieObj) => {

             const title = movieObj.title || movieObj.name || "";
            return title.toLowerCase().includes(search.toLowerCase());
        }
           
        ).map((movieObj) => (
          <div
            key={movieObj.id}
            className='bg-white rounded-md shadow-md p-6 flex items-start gap-8 hover:scale-105 duration-500 cursor-pointer'
          >
            {/* Poster */}
            <img
              src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
              alt={movieObj.name || movieObj.title}
              className='w-28 h-40 object-cover rounded-md shadow-md'
            />

            {/* Details */}
            <div className='flex-grow'>
              <h3 className='font-bold text-lg'>{movieObj.name || movieObj.title}</h3>
              <div className='text-sm text-gray-700 flex items-center gap-6 mt-2'>
                <span className='text-yellow-500'>★ {movieObj.vote_average}</span>
                <span className='text-gray-500'>({movieObj.vote_count})</span>
              </div>
              <div className='text-sm text-gray-700 mt-1'>
                First Air Date: {movieObj.first_air_date}
              </div>
              <div className='text-sm text-gray-700 mt-1'>
                Genre: {movieObj.genre_ids.map(id => genreids[id]).join(", ")}
              </div>
              <p className='text-sm text-gray-600 mt-2 line-clamp-2'>{movieObj.overview}</p>
            </div>

            {/* Right Section */}
            <div className='flex flex-col items-end'>
              <button
                className='mt-14 self-start text-red-500 hover:scale-110 duration-200 cursor-pointer'
                onClick={() => handleRemovefromWatchlist(movieObj)}
              >
                <i className="fa-solid fa-trash w-3 h-3 text-red-400"></i>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WatchList;
