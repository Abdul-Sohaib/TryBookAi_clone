// eslint-disable-next-line no-unused-vars
import React, { useState,useEffect } from 'react';
import Closeicon from './Closeicon'
import Menuicon from './Menuicon'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <nav className="bg-transparent p-4 flex items-center justify-between gap-72 pl-20 pt-20 xl:gap-20 mx-2 xl:pl-10">
    <div className="flex items-center flex-row">
        <div className='flex flex-row justify-center items-center gap-3'>
        <div className="circle rounded-full"></div>
      <img
        src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/logo.png"
        alt="Logo"
        className="w-14 h-12"
      />
      </div>
      <span className="text-white text-3xl font-bold font-body ">BookAI</span>
    </div>
    <div className='flex-row  flex gap-4 '>
    <div className={`links flex items-center space-x-6 text-white flex-nowrap flex-shrink-0 xl:gap-1 ${isMobile ? '' : 'hidden'} xl:flex`}>
      <a href="#features" className=" font-body ">Features</a>
      <a href="#how-it-works" className=" font-body ">How It Works</a>
      <a href="#roadmap" className=" font-body ">Roadmap</a>
      <a href="#api" className=" font-body ">API</a>
      <a href="#price" className=" font-body ">Price</a>
      <a href="#models" className=" font-body ">Models</a>
    </div>
    <div>
      <button className="btn text-white px-6 py-3 rounded-md flex-nowrap flex-shrink-0 font-body">
        Login / Sign Up
      </button>
    </div>
    {screenWidth < 780 &&( 
      <div className="" onClick={toggleMobileMenu}>
      {isMobile ? <Menuicon/> : <Closeicon/>}
      </div>
    )}
    
    </div>
  </nav>
  )
}

export default Navbar