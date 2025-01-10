import {React, useState, useEffect} from 'react'
import Layout from '../layout/Layout'
import empty from '../../assets/images/empty.png'
import SearchBar from '../form/SearchBar'
import {fetchMovies , fetchMovieDetail} from '../Services/Api'
import MovieCard from '../MovieCard'
import errorimage from '../../assets/images/error.png'
import Pagination from '../common/Pagination'


const LandingPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage,setPostsPerPage] = useState(8);



  useEffect(()=>{

    const fetchData = async (searchValue)=> {
      if (!searchValue.trim()) return;
      setIsLoading(true);
      setError(null); // Clear previous errors
      try{
      const data = await fetchMovies(searchValue);
      if (data.Response === "True") {
        setMovies(data.Search);
        setError('');
      }else {
        setError(data.Error);
        setMovies([]);
        }
      }catch(error){
        setError("We couldn't find any movies or TV shows matching your search.");
      }finally{
        setIsLoading(false);
      }
    }

    if(searchValue){
        fetchData(searchValue);
      }
    },[searchValue]);

    // Handle user search input
  const handleSearch = (query) => {
    setSearchValue(query);
      // setSelectedMovie(null); // Reset selected movie when a new search is performed
    };

const lastPostIndex = currentPage*postsPerPage;
const firstPostIndex = lastPostIndex-postsPerPage;
const currentPosts = movies.slice(firstPostIndex,lastPostIndex);

  return (
  <Layout 
    heroContent={
      <div className="text-center mb-48 "> 
        <h1 className='text-green-600  text-6xl mt-16 font-bold'>What would you like to watch now?</h1>
        <p className='text-green-600 text-2xl mt-8 mb-8 font-bold'>Your ultimate movie and Tv show search engine.</p>
        
       <SearchBar  onSearch={handleSearch} />

        {/* <div className='flex flex-wrap justify-center gap-2 mt-4 max-w-[600px] mx-auto'>
          <select className=" text-black  border rounded-xs w-auto min-w-[120px]  font-semibold">
            <option value>Media Type</option>
            <option value="movie">Movie</option>
            <option value="tv">Tv Show</option>
          </select>
          <select className=" text-black  border rounded-xs w-auto min-w-[120px]  font-semibold">
            <option value>Genre</option>
            <option value="28">Action</option>
            <option value="35">Comedy</option>
            <option value="18">Drama</option>
          </select>
          <select className=" text-black  border rounded-xs w-auto min-w-[120px]  font-semibold">
            <option value="vote_average.desc">Highest Rating</option>
            <option value="vote_average.asc">Lowest Rating</option>
          </select>
        </div> */}

      </div>
    }
    pageContent={
      <div className='mb-60 text-center text-green-600 font-bold'>
              { error ? (<div> 
                <img src={errorimage} alt="search result not found!" className='w-24 h-24 sm:w-32 sm:h-32  mx-auto mb-4'/>
              <p>{error}</p>
              </div>)  : isLoading ? (<p>Loading...</p>) : movies.length >0? (
                <div >
                  <h1 className='pb-44 '>Search Results</h1>
                  <MovieCard movies={currentPosts}/>
                  <Pagination
                   totalPosts={movies.length} 
                   postsPerPage={postsPerPage}
                   setCurrentPage={setCurrentPage} 
                   currentPage={currentPage}/>
              </div>
            ):(
            <div>
                  <img src={empty} alt="No Search Results" className='w-24 h-24 sm:w-32 sm:h-32  mx-auto mb-4'/>
                  <p>Start searching for movies or TV shows to see results here.</p>
            </div>
            )}
    </div>
    }
    />
  );
}

export default LandingPage