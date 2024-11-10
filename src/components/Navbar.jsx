import React, { useState } from 'react';
import Logo from '../assets/images/integrity.svg';
import Image from '../assets/images/integrity.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className='flex'>
      <div className="mx-auto hidden md:block">
    <img src={Image} alt="Large Image" className="w-1/3 h-auto object-cover ml-8" />
  </div>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
      <div className="w-1/2 hidden md:block">
    </div>
        

        <button className="block md:hidden" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>

        <div className={`md:flex md:flex-row md:items-center md:space-x-4 ${isOpen ? 'flex flex-col' : 'hidden'}`}>
          <a href="/" className="p-2 hover:bg-gray-700 hover:rounded">Home</a>
          <a href="/about" className="p-2 hover:bg-gray-700 hover:rounded">About</a>
          <a href="/services" className="p-2 hover:bg-gray-700 hover:rounded">Services</a>
          <a href="/contact" className="p-2 hover:bg-gray-700 hover:rounded">Contact</a>
        </div>
      </div>
      </div>
    
    </nav>
  );
}

export default Navbar;