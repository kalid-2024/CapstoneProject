import React from 'react'


const MovieCard = (props) => {
      return (
          <div className='grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 '>
              {props.movies.map((movie, index) => (
                  <div key={index} className = 'flex flex-col items-center justify-center gap-4   transition  ease-in-out  hover:-translate-y-1 hover:scale-110  hover:opacity-90  duration-300 	'>
                      <img src={movie.Poster} alt='movie poster not found' className='rounded-2xl hover:opacity-90'></img>
                      <h2>{movie.Title}</h2>
                      <p>{movie.Year}</p>
                  </div>
              ))}
          </div>
      );
  };


export default MovieCard