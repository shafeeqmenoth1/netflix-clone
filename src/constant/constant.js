const baseUrl = 'https://api.themoviedb.org/3';

const API_KEY = 'b6547fb1e843d9bc827cc367e41d756a';
const imgUrl = 'https://image.tmdb.org/t/p/original';

const originalUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`


const actionUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`

const comedyurl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`

const horrorUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`

const romanceUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`


export  {
    baseUrl,
    API_KEY,
    imgUrl,
    originalUrl,
    actionUrl,
    horrorUrl,
    comedyurl,
    romanceUrl
    
}

    