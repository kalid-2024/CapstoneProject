import axios from 'axios'


const API_KEY = 'c5cd2a06';
const BASE_URL = 'http://www.omdbapi.com/';


export const fetchMovies = async (query, page=1)=> {
    try{
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}`);
        return response.data ;
     }catch(error){
        console.error("We couldn't find any movies or TV shows matching your search.", error);
        return { items: [], total_count: 0 }; // Return default empty structure
    }     
};




export const fetchMovieDetail = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
    return response.data; // Return the movie details
  } catch (error) {
    console.error("Failed to fetch movie details:", error.message);
    throw new Error("Could not fetch movie details. Please try again later.");
  }
};
