import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import LandingPage from '../components/Pages/LandingPage';
import About from '../components/Pages/About';
import MovieDetails from '../components/MovieDetails';


const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout/> ,
      children: [
        {
          path: '/',
          index: true,
          element: <LandingPage/> ,
        },
        {
          path: "/About",
          element: <About/>,
        },
        {
          path: "/MovieDetails/:id",
          element: <MovieDetails/>,
        },


        // {
        //   path:"/catagory/action",
        //   element: action ,
        // },
        // {
        //   path:"/catagory/comedy",
        //   element: comedy 
        // },
        // {
        //   path:"/catagory/drama",
        //   element: drama 
        // },
        // {
        //   path:"/catagory/sci-fi",
        //   element: sci-fi 
        // },
        // {
        //   path:"/favorites",
        //   element: favorites 
        // },
      ],
    },

  ])






export default router