import React, { useEffect, useState } from 'react'

import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Carousel from '../components/Carousel/Carousel'
import MainMovie from '../components/MainMovie/MainMovie'
import api from '../services/api'

import './Dashboard.css'

const Dashboard = () => {
  const [movieList, setMovieList] = useState([]);


  useEffect(() => {
    //api.then( response => console.log(response))
    api.then( response => setMovieList(response));
  })

  return (
    <div className="dashboard">
      <Header loginBtn={false}>
        <Navbar />
      </Header>
      <MainMovie />
      <Carousel heading="Popular on JSflix" movieList={movieList} />      
    </div>
  )
}

export default Dashboard;