import React from 'react'
import {useState, useEffect} from 'react'
import Logo from './Logo'
import '../../index.css'
import { useNavigate, useLocation } from 'react-router-dom';




const Navbar = () => {

    const [darkMode, setDarkMode] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
  
    const isHomePage = location.pathname === '/';
  

    // Load dark mode state from localStorage on component mount
    useEffect(() => {
      const savedMode = localStorage.getItem('darkMode') === 'true';
      setDarkMode(savedMode);
      document.body.classList.toggle('dark', savedMode);
    }, []);
  
    // Toggle dark mode and save state to localStorage
    const toggleDarkMode = () => {
      const newMode = !darkMode;
      setDarkMode(newMode);
      localStorage.setItem('darkMode', newMode);
      document.body.classList.toggle('dark', newMode);
    }


  return (
    <nav className="w-full min-h-24 flex  flex p-4 items-center" >
     
        {/* Back Button */}
        {!isHomePage && (
        <button
            onClick={() => navigate('/')}
            className="p-4  rounded-full  hover:bg-slate-300  lg:ml-20"
            aria-label="Back"
          >
          <svg xmlns="http://www.w3.org/2000/svg"className="size-5 text-green-600 font-extrabold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
        </button>
        )}
          
        <button  className="hamburger-menu p-4  rounded-full  hover:bg-slate-300  lg:ml-20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-green-600 font-extrabold">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
     

       <div className="mx-auto ">
        <Logo />
       </div>

     <div className="lg:mr-20">
      <div className="toggle-container">
        {/* Hidden checkbox for toggling */}
        <input
          type="checkbox"
          id="toggle_Switch"
          className="toggleSwitch"
          onChange={toggleDarkMode}
        />

        {/* Dark Mode Button */}
        <button className="darkSwitch px-4 py-4 rounded-full text-green-600  hover:bg-slate-300 ">
        <label htmlFor="toggle_Switch" className="flex items-center space-x-4 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
          </label>
        </button>

        {/* Light Mode Button */}
        <button className="lightSwitch px-4 py-4 rounded-full text-green-600 hover:bg-slate-300 ">
        <label htmlFor="toggle_Switch" className="flex items-center space-x-4 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
          </label>
        </button>
      
      </div>
    </div>
    </nav>
  );
}

export default Navbar