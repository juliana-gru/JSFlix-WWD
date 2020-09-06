import React from 'react';

import Header from '../components/Header/Header';

import './Home.css'

const Home = () => {
  return (
    <div className="page homepage">
      <Header loginBtn={true} />
      <section className="content" >
        <h1>See what's next</h1>
        <p> Watch anywhere. Cancel at anytime.</p>
        <a href="/browse"> <button className="homepage-btn-cta"> Try for 30 days free </button> </a>
      </section>      
    </div>
  )
}

export default Home;