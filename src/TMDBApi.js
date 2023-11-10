//*** fichier TMDBApi.js ***
  	
const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTdjYzc0OTU1MTQ5YmUyM2RmODM4MTNmMjAxYTRlOCIsInN1YiI6IjYyODM5OGJiZWM0NTUyMTAzMmE5NTcxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.REF4Oi-K06F7Jq8LolG5vPQtyeiGk3nBFdDyL1FLq7E";
  	
//le paramètre text = film cherché, page = nombre de page voulu
export function getFilmsFromTMdbWidthText(text, page) {
    
const url = "https://api.themoviedb.org/3/search/movie?api_key=" + API_TOKEN +
     "&language=fr&query=" + text + '&page=' + page;	
    
  return fetch(url)
    .then((response) => response.json)
    .catch((error) => console.log(error)
)}
