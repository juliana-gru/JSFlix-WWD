const apiKey = '011ebfcb6f751ca4ff79f0a61fcb6df1'; //v3 auth
const bearerKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTFlYmZjYjZmNzUxY2E0ZmY3OWYwYTYxZmNiNmRmMSIsInN1YiI6IjVmMTkxZDFlZGI5NTJkMDAzNzkxZDQ0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M1TXVhJ9SydXt8uCsH_EXV_Ru3NPdewERC_llO7jV-s'

const redirectURI = 'http://localhost:3000/browse';

const headers = {
  authorization: `Bearer ${bearerKey}`,
  'content-type': 'application/json;charset=utf-8'
};

let requestToken;
let accessToken;

const theMovieDB = {
  requestToken() {    
    fetch('https://api.themoviedb.org/4/auth/request_token', {
      headers: headers,
      method: 'POST',
      body: JSON.stringify({redirect_to: redirectURI}),
    }).then(response => response.json())
    .then(jsonResponse => jsonResponse.request_token)
    .then(token => {
      requestToken = token;
      localStorage.setItem('requestToken', requestToken);
      window.location = `https://www.themoviedb.org/auth/access?request_token=${requestToken}`;      
    })
  },

  getAccessToken() {
    requestToken = localStorage.getItem('requestToken');
    
    fetch(`https://api.themoviedb.org/4/auth/access_token`, {
      headers: headers,
      method: 'POST',
      body: JSON.stringify({"request_token": requestToken})
    })
    .then(response => response.json())
    .then(jsonResponse => accessToken = jsonResponse.access_token)             
  },

  getMovies() {
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
    .then(response => response.json())
    .then(jsonResponse => {
      if (jsonResponse.results) {
        return jsonResponse.results.map(movie => ({
          id: movie.id,
          title: movie.title,
          img: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`
        }))
      }
    });
  },

  getTVShows() {
    return fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`)
    .then(response => response.json())
    .then(jsonResponse => {
      if (jsonResponse.results) {
        return jsonResponse.results.map(TVShow => ({
          id: TVShow.id,
          title: TVShow.title,
          img: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${TVShow.poster_path}`
        }))
      }
    });    
  },
  
  getNowPlaying() {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
    .then(response => response.json())
    .then(jsonResponse => {
      if (jsonResponse.results) {
        return jsonResponse.results.map(movie => ({
          id: movie.id,
          title: movie.title,
          img: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`
        }))
      }
    })
  }
}
  
export default theMovieDB;
