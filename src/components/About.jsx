import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-neutral-700 flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full bg-gray-800 text-gray-100 rounded-2xl shadow-2xl p-10">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">
           About MovieDB Clone
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          Welcome to <span className="font-semibold">MovieDB Clone</span> — a modern web application 
          inspired by IMDB where you can explore movies, discover trending titles, 
          check ratings, and find your next binge-worthy watch.  
        </p>

        <div className="bg-gray-700 p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-xl font-semibold text-yellow-300 mb-3"> What You Can Do Here:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Browse movies by genres, ratings, and popularity.</li>
            <li>Search for your favorite films and TV shows instantly.</li>
            <li>Check trailers, posters, and short overviews of movies.</li>
            <li>Stay updated with trending titles across the globe.</li>
          </ul>
        </div>

        <div className="bg-gray-700 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-yellow-300 mb-3"> Built with Love for Movies</h2>
          <p className="leading-relaxed">
            This project is not just a clone — it’s a tribute to cinema. Whether 
            you’re into <span className="italic">action-packed blockbusters</span>, 
            <span className="italic"> heartwarming dramas</span>, or 
            <span className="italic"> mind-bending thrillers</span>, 
            this app is designed to help you connect with the world of movies in 
            a fun and interactive way.  
          </p>
        </div>

        <p className="text-center mt-10 text-gray-400 italic">
          "Movies touch our hearts and awaken our vision." – Martin Scorsese
        </p>
      </div>
    </div>
  )
}

export default About
