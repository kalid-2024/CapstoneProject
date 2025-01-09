import React from 'react'
import '../../index.css'
import Profile from '../../assets/images/profile.jpg'

const About = () => {
  return (
    <div className='about-page'>
    <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-12 mb-12 max-w-6xl mx-auto">
        <div className="w-full lg:w-1/2">
            <img src={Profile} alt="My-Image" className="rounded-lg shadow-lg w-full h-auto" />
        </div>
        <div className="w-full lg:w-1/2">
            <h1 className='text-3xl sm:text-4xl font-bold mb-4 '>Khalid Mohammed Abdela</h1>
            <h2 className='text-lg sm:text-xl mb-6' >Front End Developer</h2>
            <div space-y-4  sm:space-y-6  mb-8>
              <p > Hello! I'm Khalid Mohammed Abdela, a passionate front-end Web developer with a keen interest in creating intuitive and efficient Web applications. My journey in the world of development has been driven by a constant desire to learn and innovate.</p>
              <p> I'm also well-versed in front-end web technologies, continuously improving my skills in ReactJs to broaden my development capabilities.</p>
              <p>Beyond coding, I'm fascinated by the potential of the Metaverse and its implications for future digital interactions. I enjoy exploring new technologies and their potential applications in solving real-world problems.</p>
              <p>When I'm not immersed in lines of code, you might find me contributing to open-source projects, watching the latest TV series, or engaging in discussions about the future of technology. I'm always open to new challenges and opportunities to grow as a developer.</p>
              <p>Feel free to reach out if you want to discuss  front-end technologies, or if you're interested in collaborating on exciting projects. Let's create something amazing together!<br/><br/></p>
         </div>
            <h3 class="mb-4  text-xl">Connect with me:</h3>
         <div className='flex justify-start space-x-4'>  
           <div className=' p-4  rounded-full  hover:bg-slate-300  cursor-pointer'> <a href="https://x.com/km_se_2024"  target="_blank" > <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#485560" class="transition-colors duration-300 group-hover:fill-primary"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></a></div>
            <div className=' p-4  rounded-full  hover:bg-slate-300  cursor-pointer'><a href="https://www.linkedin.com/in/khalid-mohammed-56b840320/ "  target="_blank" > <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#485560" class="transition-colors duration-300 group-hover:fill-primary"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 
                    3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144  0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
            </svg></a></div>
         </div>
        </div>
    </div>
    </div>
  );
}

export default About