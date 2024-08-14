// eslint-disable-next-line no-unused-vars
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-purple-900 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img
          src="/path-to-your-logo.png"
          alt="Logo"
          className="w-8 h-8 mr-2"
        />
        <span className="text-white text-lg font-bold">BookAI</span>
      </div>
      <div className="flex items-center space-x-6 text-white">
        <a href="#features" className="hover:underline">Features</a>
        <a href="#how-it-works" className="hover:underline">How It Works</a>
        <a href="#roadmap" className="hover:underline">Roadmap</a>
        <a href="#api" className="hover:underline">API</a>
        <a href="#price" className="hover:underline">Price</a>
        <a href="#models" className="hover:underline">Models</a>
      </div>
      <div>
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full">
          Login / Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar