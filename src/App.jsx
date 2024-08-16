
import ReactSwitch from 'react-switch';
// eslint-disable-next-line no-unused-vars
import React, { useState,useEffect } from 'react';
import './App.css'
import Navbar from './Components/Navbar'
import { createContext } from 'react';

export const ThemeContext = createContext(null) 

function App() {
 const [theme, setTheme] = useState('dark');

 const toggleTheme =() => {
  setTheme((curr)=>(curr === 'light' ? 'dark' :'light'));
 };

  return (
    <>
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className='app' id={theme}>
    <div className='flex w-ull h-fit justify-end items-center pt-10 pr-10 gap-3 '>
      <label className='font-body'>{theme === 'light' ? '🌞Light-Mode' : '🌜Dark-Mode'}</label>
      <ReactSwitch onChange={toggleTheme} checked={theme ==='dark'}/>
      </div>
      
      <Navbar/>
      </div>
      
      </ThemeContext.Provider>
    </>
  )
}

export default App
