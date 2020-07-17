const axios = require("axios");

const api = axios({
    "method": "GET",
    "url": "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
      "x-rapidapi-key": "55681d239dmshc2f46301b90b49ap1b69cfjsn43206ea829af",
      "useQueryString": true
    },
    "params": {
    "q": "get:new7:AU",
    "p": "1",
    "t": "ns",
    "st": "adv"
    }
    })
    .then(response => {
      console.log(response);
      console.log(response.data.ITEMS);
      if (response.data.ITEMS) {
        return response.data.ITEMS.map( item => ({
          id: item.netflixid,
          title: item.title,
          img: item.image, 
        }))
      }      
    })
    .catch((error)=>{
      console.log(error)
    })
  


export default api;



