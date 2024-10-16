import React from 'react';
import logo from './logo.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6">
      <div className="flex items-center space-x-4">
        <img
          alt="Limbiks Logo"
          className="h-10"
          height="40"
          src={logo} 
          width="150"
        />
        <nav className="hidden md:flex space-x-8">
          <a className="hover:text-gray-400" href="#"> Generators </a>
          <a className="hover:text-gray-400" href="#"> Features </a>
          <a className="hover:text-gray-400" href="#"> Examples </a>
          <a className="hover:text-gray-400" href="#"> Company </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;