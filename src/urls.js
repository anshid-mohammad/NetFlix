import { API_KEY } from "./constants/constants"


 export const originals =`discover/tv?api_key=${API_KEY}&with_networks=213`
 export const actions= `discover/movie?api_key=${API_KEY}&with_genres=28`
 export const animation=`discover/movie?api_key=${API_KEY}&with_genres=16`
 export const fantasy=`discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=14&api_key=${API_KEY}`
 export const crime=`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=80&api_key=${API_KEY}`