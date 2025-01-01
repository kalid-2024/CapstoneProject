 import React from 'react'
 import { useParams } from 'react-router-dom';
 import { useState ,useEffect } from 'react';
 import { fetchMovieDetail } from './Services/Api';



 const MovieDetails = () => {
  const { id } = useParams();  // Get recipe ID from the URL
  const [movie, setSelectedMovie] = useState(null);

  useEffect(()=>{
    const fetchData = (id)=>{
      try{
        const movieDetail = fetchMovieDetail(id);
        setSelectedMovie(movieDetail);
      }catch(error){
        console.error("Error fetching the Movie Details:",error)
      }
    }
    fetchData(id);
  },[id]); // Re-fetch when the id changes


 if(!movie) {
  return (<p>Loading movie details...</p>);
 }


   return (
     <div>
        <div>
          <img src={movie.Poster} alt='movie poster not found' className='rounded-3xl hover:opacity-90'></img>
        </div>

        <div>
          <h1>{movie.Title}</h1>
          {movie.Type}
          {}
          {}
          {movie.Actors}
          {movie.Director}
          {movie.Writer}
          <p>{movie.Plot}</p>

Cast: Main actors and their roles.
Ratings: Ratings from different sources (e.g., IMDB, Rotten Tomatoes).
Genre: Categories the movie belongs to (e.g., Action, Drama, Comedy).



         </div>
     </div>
   )
 }
 
 export default MovieDetails