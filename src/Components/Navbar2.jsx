// eslint-disable-next-line no-unused-vars
import React, { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import Menuicon from './Menuicon'
import Closeicon from './Closeicon'

const Navbar2 = () => {
  const [isMobile, setIsMobile] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };
  return  (
 <nav className="bg-transparent flex items-center justify-center align-middle max-w-full pt-20 mx-2">
  <div className='flex flex-row gap-44 sm:gap-14'>
  <div className={` flex items-center flex-row ${isMobile ? 'hidden' : ''}`}>
            <div className="flex flex-row justify-center items-center gap-3">
              <div className="circle rounded-full"></div>
              <img
                src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/logo.png"
                alt="Logo"
                className="w-20 h-16 sm:w-14 sm:h-10"
              />
            </div>
            <span className="logoname text-customwhite text-6xl font-bold font-body sm:text-3xl">BookAI</span>
          </div>
         <motion.div className={`card links flex flex-col flex-1 justify-between items-center text-customwhite font-body text-xl backdrop-blur-3xl font-bold ${isMobile ? '' : 'hidden'} sm:w-96 esm:w-80 exsm:w-72`}
          initial={{ x: '100%' }}
          animate={{ x:isMobile?'10%': '100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}>
            
          <div className='flex justify-around flex-row-reverse' onClick={toggleMobileMenu}>
         <Closeicon/>
         <div className='links flex flex-col justify-between items-center text-customwhite font-body text-xl backdrop-blur-3xl font-bold gap-6 flex-1 my-8 mx-8'>
              <a href="#features" className="font-body">Features</a>
              <a href="#how-it-works" className="font-body">How It Works</a>
              <a href="#roadmap" className="font-body">Roadmap</a>
              <a href="#api" className="font-body">API</a>
              <a href="#price" className="font-body">Price</a>
              <a href="#models" className="font-body">Models</a>
              <button className="btn text-customwhite px-6 py-3 rounded-md flex-nowrap flex-shrink-0 font-body">
                Login / Sign Up
              </button>
              </div>
              </div>
         </motion.div>
        

         <div className="relative justify-center items-center align-middle pt-3 sm:pt-1" onClick={toggleMobileMenu}>
          {!isMobile && <Menuicon />}
        </div>
          </div>
 </nav>
  );
}

export default Navbar2