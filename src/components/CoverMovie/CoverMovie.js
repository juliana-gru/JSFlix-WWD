import React from 'react';

import './CoverMovie.css';
import movieLogo from './movie-logo.png';

const CoverMovie = () => (
  <section className="hero-section">
    <img src={movieLogo} className="movie-logo" alt="movie logo" />
    <div className="movie-description">
      <button className="btn-hero">
        <span>
          <i className="fas fa-play" />
          Play
        </span>
      </button>
      <button className="btn-hero">
        <span>
          <i className="fas fa-plus" />
          My List
        </span>
      </button>
      <h3>Watch Season 1 now</h3>
      <p>
        Yesterday, he dreamed of owning a food truck. Today, he's humanity's
        last hope. He's the Chosen One - and the last hero of his kind.
      </p>
    </div>
  </section>
);

export default CoverMovie;
