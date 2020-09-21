/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import Header from '../components/Header/Header';

import './Home.css';

const Home = () => (
  <div className="page homepage">
    <Header loginBtn />
    <section className="content">
      <h1>See what's next</h1>
      <p> Watch anywhere. Cancel at anytime.</p>
      <a href="/browse">
        <button className="homepage-btn-cta" type="button">
          Try for 30 days free
        </button>
      </a>
    </section>
  </div>
);

export default Home;
