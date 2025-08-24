import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';
import Pagination from './Pagination';
import Banner from './Banner';

function Movies({handleAddToWatchlist , handleRemovefromWatchlist,watchlist}) {
  const [movies, setMovies] = useState([]);
  const[pageNo, setpageNo] = useState(1);   // this use state is for pagination , to make pages dynamically changes....

  const HandlePrev = ()=>{
    if(pageNo>1)
    {                           // use these fns. as props in pagination component to use this functionality simpleeeee
     
    setpageNo(pageNo-1)   
    }           // this fn handles when previouis button is clicked it moves to previous page
  }

  const HandleNext = ()=>{
    setpageNo(pageNo + 1)       // this function handles when next page button is clicked it moves to next page
  }


  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=51290782857008b2131ddfce1185c130&language=en-US&page= ${pageNo}`)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.error('Failed to fetch movies:', err);
      });
  }, [pageNo]);

  return (
    
    <div className="bg-black min-h-screen bg-neutral-900 p-4">
      <Banner handleAddToWatchlist={handleAddToWatchlist} handleRemovefromWatchlist={handleRemovefromWatchlist}  movies={movies} watchlist={watchlist} />

      <h1 className="text-2xl font-bold mb-4 text-white text-center">Trending Shows</h1>

      <div className="flex flex-wrap justify-center gap-6 m-5">
        {movies.map((movieObj) => (
          <MovieCard
            key={movieObj.id}
            movieObj={movieObj}
            poster_path={movieObj.poster_path}
            original_title={movieObj.original_title || movieObj.original_name}
            handleAddToWatchlist={handleAddToWatchlist}
            handleRemovefromWatchlist={handleRemovefromWatchlist}
            watchlist={watchlist}
          />
        ))}
      </div>
      
      <Pagination pageNo={pageNo}  HandlePrev={HandlePrev} HandleNext={HandleNext}/>
   
    </div>
    
  );
}

export default Movies;
