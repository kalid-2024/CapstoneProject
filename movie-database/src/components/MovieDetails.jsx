 import React from 'react'
 import { useParams } from 'react-router-dom';
 import { useState, useEffect } from 'react';
 import { fetchMovieDetail } from './Services/Api';



 const MovieDetails = () => {
    const { id } = useParams();  // Get movie ID from the URL
    const [movie, setMovie] = useState({});
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async (id) => {
      try {
        setLoading(true);  // Start loading
        setError(null);  // Clear previous errors

        const data = await fetchMovieDetail(id);
        if (data && data.Response === "True") {
          setMovie(data);  // Set movie data if found
        } else {
          setError("Movie not found or invalid ID.");  // Handle invalid or missing data
        }
      } catch (error) {
        setError("Error fetching movie details.");
        console.error("Error fetching the Movie Details:", error);
      } finally {
        setLoading(false);  // Stop loading
      }
    };

    if (id) {
      fetchData(id);  // Fetch data when ID changes
    }
  }, [id]);  // Re-fetch if `id` changes


  if(loading){
    return (<div className="w-full h-full "><p className="mx-auto" >Loading movie details...</p></div>);
      }  
  if(error){
    return (<div>{error}</div>)
  };
  
  return (
<div className='max-w-7xl mx-auto px-4 sm:py-12 py-4 relative z-10'>
  <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12'>
        <div className="md:col-span-1 relative">
         <img src={movie.Poster} alt={movie.Title} className="w-full rounded-xl shadow-2xl"/>
        </div>
    <div className="md:col-span-2 sm:pt-8 pt-0 md:pt-28">
      <div className="relative mb-4 pr-16">
        <div className="max-w-full">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold break-words pr-2">{movie.Title}</h1>
        </div>
        <div className="absolute top-0 right-0">
          <button className="btn btn-ghost btn-circle btn-lg text-gray-400">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <span className="px-3 py-2 rounded-full text-sm font-bold bg-purple-600 text-white">{movie.Type}</span>
        <div className="flex items-center">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-400 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
          </svg>
          <span className="font-bold">{movie.imdbRating}</span>
        </div>
        <a href={`https://www.imdb.com/movie/${movie.imdbID}`}  target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline flex items-center font-bold">imdb</a>
      </div>
      <div className="mb-6">
        {movie.Genre  && movie.Genre.split(", ").map((genre,index)=>(
            <span
            key={index}
            className={`inline-block px-3 py-2 mr-2 mb-2 text-sm font-bold text-white rounded-full bg-${index % 3 === 0 ? 'blue':index % 3 === 1 ?'green':'red'}-600`}
            >
              {genre}
            </span>
        
          ))}
      </div>
      <p className="text-base md:text-lg mb-6">
        {movie.Plot}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex items-center">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="mr-2 text-gray-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path>
          </svg>
          <span className="font-bold mr-2">Release Date:</span><span>{movie.Released}</span>
        </div>
        <div className="flex items-center">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="mr-2 text-gray-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path>
          </svg>
          <span className="font-bold mr-2">Duration:</span><span>{movie.Runtime}</span>
        </div>
      </div>
      
      <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Cast</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {movie.Actors &&
                movie.Actors.split(', ').map((actor, index) => (
                  <div key={index} className="flex items-center p-2 rounded-lg shadow-md bg-theme-adaptive border border-theme-adaptive">
                    <h3 className="text-sm font-semibold">{actor}</h3>
                  </div>
                  ))}
                </div>
                 <h2 className="text-xl md:text-2xl font-semibold mb-4 mt-4">Director</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                 
                 {movie.Director &&
                 movie.Director.split(', ').map((director,index) => (
                  <div key={index} className="flex items-center p-2 rounded-lg shadow-md bg-theme-adaptive border border-theme-adaptive">
                    <h3 className="text-sm font-semibold">{director}</h3>
                  </div>
                 ))}
                </div>
                <h2 className="text-xl md:text-2xl font-semibold mb-4 mt-4" >Writers</h2> 
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {movie.Writer &&
                movie.Writer.split(', ').map((writer, index) => (
                  <div key={index} className="flex items-center p-2 rounded-lg shadow-md bg-theme-adaptive border border-theme-adaptive">
                    <h3 className="text-sm font-semibold">{writer}</h3>
                  </div>
                  ))}
                </div>
        </div>
      </div>
    </div>
  </div>

  );
}
 


 export default MovieDetails