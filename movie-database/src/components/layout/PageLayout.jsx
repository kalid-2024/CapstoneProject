import React from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import { Outlet } from 'react-router-dom'
import  '../../index.css'



const PageLayout = () => {
  return (
    <div className=' h-lvh'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  );
}

export default PageLayout