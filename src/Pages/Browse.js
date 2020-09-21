import React, { useEffect, useState } from 'react';

import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import CoverMovie from '../components/CoverMovie/CoverMovie';
import Carousel from '../components/Carousel/Carousel';
import theMovieDB from '../util/theMovieDB';

import './Browse.css';

const Browse = () => {
  const [movieList, setMovieList] = useState([]);
  const [tvShowList, setTVShowsList] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    theMovieDB.getAccessToken();

    theMovieDB.getMovies().then((response) => {
      setMovieList(response);
    });

    theMovieDB.getTVShows().then((response) => {
      setTVShowsList(response);
    });

    theMovieDB.getNowPlaying().then((response) => {
      setNowPlaying(response);
    });
    console.log('mounted');
  }, []);

  return (
    <div className="Browse">
      <div className="wrapper-hero-section">
        <Header loginBtn={false}>
          <Navbar />
        </Header>
        <CoverMovie />
      </div>
      <div className="carousels-container">
        <div className="gradient" />
        <Carousel
          type="now-playing"
          heading="Now Playing"
          itemsList={nowPlaying}
        />
        <Carousel
          type="movies"
          heading="Popular on JSflix"
          itemsList={movieList}
        />
        <Carousel type="tv-shows" heading="TV Shows" itemsList={tvShowList} />
      </div>
    </div>
  );
};

export default Browse;

// const inDev = [
//   {
//     id: '1231235243',
//     title: 'the old guard',
//     img: 'https://image.tmdb.org/t/p/w220_and_h330_face/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg',
//   },
//   {
//     id: '3243245243',
//     title: 'the old fart',
//     img: 'https://image.tmdb.org/t/p/w220_and_h330_face/kjMbDciooTbJPofVXgAoFjfX8Of.jpg',
//   },
//   {
//     id: '17547443',
//     title: 'the osdadas',
//     img: 'https://image.tmdb.org/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
//   },
//   {
//     id: '1287691235243',
//     title: 'the movie',
//     img: 'https://image.tmdb.org/t/p/w220_and_h330_face/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
//   },
//   {
//     id: '125325241235243',
//     title: 'the guard',
//     img: 'https://image.tmdb.org/t/p/w220_and_h330_face/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg',
//   },
//   {
//     id: '12864585243',
//     title: 'dead',
//     img: 'https://image.tmdb.org/t/p/w220_and_h330_face/pfte7wdMobMF4CVHuOxyu6oqeeA.jpg',
//   },
//   {
//     id: '12123155243',
//     title: 'deadpool',
//     img: 'https://image.tmdb.org/t/p/w220_and_h330_face/iBGRbLvg6kVc7wbS8wDdVHq6otm.jpg',
//   },
//   {
//     id: '1745363735243',
//     title: 'someday',
//     img: 'https://image.tmdb.org/t/p/w220_and_h330_face/7AIU4rH3ExBHQg92UHYxFYxP82M.jpg',
//   },
//   {
//     id: '1275343673531235243',
//     title: 'oasis',
//     img: 'https://image.tmdb.org/t/p/w220_and_h330_face/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg',
//   },
//   {
//     id: '1298734526443',
//     title: 'Kol',
//     img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
//   },
//   {
//     id: '1233264641235243',
//     title: 'the old guard',
//     img: 'https://image.tmdb.org/t/p/w220_and_h330_face/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg',
//   },
//   {
//     id: '32479963245243',
//     title: 'the old fart',
//     img: 'https://image.tmdb.org/t/p/w220_and_h330_face/kjMbDciooTbJPofVXgAoFjfX8Of.jpg',
//   },
//   {
//     id: '3523434717547443',
//     title: 'the osdadas',
//     img: 'https://image.tmdb.org/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
//   },
//   {
//     id: '1216585695423155243',
//     title: 'deadpool',
//     img: 'https://image.tmdb.org/t/p/w220_and_h330_face/iBGRbLvg6kVc7wbS8wDdVHq6otm.jpg',
//   },
//   {
//     id: '1773734745364443735243',
//     title: 'someday',
//     img: 'https://image.tmdb.org/t/p/w220_and_h330_face/7AIU4rH3ExBHQg92UHYxFYxP82M.jpg',
//   },
//   {
//     id: '97996971275343673531235243',
//     title: 'oasis',
//     img: 'https://image.tmdb.org/t/p/w220_and_h330_face/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg',
//   },
// ]
