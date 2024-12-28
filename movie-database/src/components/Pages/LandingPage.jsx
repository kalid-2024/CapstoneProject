import React from 'react'
import Hero from '../common/Hero'
import Layout from '../layout/Layout'



const LandingPage = () => {
  return (
  <Layout 
    heroContent={
      <div className="text-center"> 
        <h1>What would you like to watch now?</h1>
        <p>Your ultimate movie and Tv show search engine.</p>
        <p>Search Bar</p>
      </div>
    }
    pageContent={
      <p>Coming Soon!</p>
    }
  />
  )
}

export default LandingPage