import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Movies from "./components/Movies.jsx";
import WatchList from "./components/WatchList.jsx";
import { BrowserRouter, Routes ,Route } from "react-router-dom"; // Import if you plan to use routing in the future
import About from "./components/About.jsx";
import SignIn from "./components/SignIn.jsx";
import Banner from "./components/Banner.jsx";
import WatchListBanner from "./components/WatchlistBanner.jsx";
import { useState } from "react";


function App() {

  let [watchlist,setWatchlist] = useState([]);

 const handleAddToWatchlist = (movieObj) => {
  setWatchlist((prev) => {
    // ✅ Check if already exists
    if (prev.some((m) => m.id === movieObj.id)) {
      return prev; // no duplicate
    }
    return [...prev, movieObj];
  });
};

const handleRemovefromWatchlist = (movieObj) => {
  setWatchlist(prevWatchlist => {
    const newWatchlist = prevWatchlist.filter(movie => movie.id !== movieObj.id);
    localStorage.setItem('moviesApp', JSON.stringify(newWatchlist));
    return newWatchlist;
  });
};


useEffect(() => {
  let moviesfrmlocalst = localStorage.getItem('moviesApp');
  if (!moviesfrmlocalst) {
    return;
  }
  setWatchlist(JSON.parse(moviesfrmlocalst));
}, []); // ✅ runs only once on mount use dependency mustttt or it runs infinitely opr renders infinetly


  return (
    <>
      <BrowserRouter>
       
        {/*
                the BrowserRouter is used to enable routing in your app; it wraps
                entire components under BrowserRouter
        */}
       
        <Navbar />
        <Routes>        // this roues is implemented to enable routing only betweeen movies and watchlist , navbar shud remain constant for both movris and watchlist
          
          <Route path = "/" element = { <>  <Movies 
  watchlist={watchlist} 
  handleAddToWatchlist={handleAddToWatchlist} 
  handleRemovefromWatchlist={handleRemovefromWatchlist} 
/>
  </>}/> //Route comes under Routes
          <Route path = "/watchlist" element = { <><WatchList  handleRemovefromWatchlist={handleRemovefromWatchlist}  watchlist={watchlist}/></>}/>
          <Route path = "/about" element = {<About />}/>
          <Route path = "/signin" element = {<SignIn />}/>
        
          
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
