// Navbar.js
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Navbar2 from './Navbar2';

const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Conditionally render Navbar or AlternativeComponent
  return screenWidth <= 780 ? (
    <Navbar2 />
  ) : (
    <nav className="bg-transparent relative flex items-center justify-center align-middle max-w-full pt-10 mx-2 xl:pl-10">
      <div className="flex flex-row justify-center items-center relative max-w-full">
        <div className="flex flex-row gap-80 xl:gap-20">
          <div className="flex items-center flex-row">
            <div className="flex flex-row justify-center items-center gap-3">
              <div className="circle rounded-full"></div>
              <img
                src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/logo.png"
                alt="Logo"
                className="w-14 h-12"
              />
            </div>
            <span className="text-customwhite text-3xl font-bold font-body">BookAI</span>
          </div>
          <div className="flex-row flex gap-4">
            <div className="links flex items-center space-x-6 text-customwhite flex-nowrap flex-shrink-0 xl:gap-1">
              <a href="#features" className="font-body">Features</a>
              <a href="#how-it-works" className="font-body">How It Works</a>
              <a href="#roadmap" className="font-body">Roadmap</a>
              <a href="#api" className="font-body">API</a>
              <a href="#price" className="font-body">Price</a>
              <a href="#models" className="font-body">Models</a>
            </div>
            <div>
              <button className="btn text-customwhite px-6 py-3 rounded-md flex-nowrap flex-shrink-0 font-body">
                Login / Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
