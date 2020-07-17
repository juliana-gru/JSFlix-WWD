import React from 'react'

import './MainMovie.css'
import movieLogo from './movie-logo.png'

const MainMovie = () => {
  return (
    <section className="hero-section">
      <img src={movieLogo} className="movie-logo"></img>
      <div className="movie-description">
        <button className="btn-hero">
          <i className="fas fa-play"></i>
          Play            
        </button>
        <button className="btn-hero">
          <i className="fas fa-plus"></i>
          My List</button>
        <h3>Watch Season 1 now</h3>
        <p>Yesterday, he dreamed of owning a food truck. Today, he's humanity's last hope. He's the Chosen One - and the last hero of his kind.</p>
      </div>
    </section>
  )
}

export default MainMovie;