import React from 'react'
import Logo from './Logo'
import {Link} from 'react-router-dom'


const Footer = () => {
  return (
<footer className="footer  p-4  border-t-2 border-grey-100 ">
  <div className="container mx-auto px-4 max-w-7xl ">
    <div  className="w-full flex flex-col items-center lg:flex-row lg:justify-between lg:items-start ">
      <aside className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
        <div className='tex-center lg:text-left '><Logo /></div>
        <p className='text-center lg:text-left mt-2 mb-2 text-sm font-semibold lg:pl-4 '>MovieLovers &copy; 2024 | Crafted with ❤️ by <a href="https://github.com/kalid-2024/CapstoneProject" target="_blank" className='hover:underline font-semibold text-red-600'>Kalid</a></p>
      </aside>

      <div className="flex flex-col items-center lg:items-end w-full lg:w-auto">
        <nav className="flex flex-wrap justify-center lg:justify-end items-center gap-2 sm:gap-6 mb-4 sm:mb-8 lg:pr-4">
          <Link  to="/About" target="_blank" className="text-green-600 font-extrabold px-2 hover:underline">About Me</Link>
          <a href="https://kalidmohammed236@gmail.com" target="_blank" className="text-green-600 font-extrabold px-2 hover:underline ">Get in Touch</a>
          <a href="https://www.omdbapi.com/" target="_blank" className="text-green-600 font-extrabold px-2  hover:underline "> API</a>
        </nav>
        <div className='flex gap-2' >
          <div className=' p-4  rounded-full  hover:bg-slate-300  cursor-pointer'><a href="https://x.com/km_se_2024"  target="_blank" ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#485560" className="transition-colors duration-300 group-hover:fill-primary"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></a></div>
          <div className=' p-4  rounded-full  hover:bg-slate-300  cursor-pointer'><a href="https://www.linkedin.com/in/khalid-mohammed-56b840320/ "  target="_blank" ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#485560" className="transition-colors duration-300 group-hover:fill-primary"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a></div>
          <div className=' p-4   rounded-full  hover:bg-slate-300  cursor-pointer'><a href="https://github.com/kalid-2024/CapstoneProject" target="_blank" ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#485560" className="transition-colors duration-300 group-hover:fill-primary"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg></a></div>
        </div>
      </div>
    </div>
    </div>
</footer>
  
  );
}

export default Footer