import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="flex flex-wrap justify-between items-center py-4 px-6 bg-gray-900 text-white">
        <div className="flex items-center">
          <Link to="/" className="text-3xl font-bold font-heading">
            S-Kart
          </Link>
        </div>
        <div className="flex items-center">
          {/* Hamburger Icon */}
          <button className="xl:hidden text-white focus:outline-none" onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Mobile Menu */}
          <div className={`xl:hidden absolute top-16 left-0 w-full bg-gray-900 text-white ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col space-y-4 px-6 py-4">
              <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
              <li><Link to="/category" className="hover:text-gray-200">Category</Link></li>
              <li><Link to="/collections" className="hover:text-gray-200">Collections</Link></li>
              <li><Link to="/contact" className="hover:text-gray-200">Contact Us</Link></li>
            </ul>
          </div>
          {/* Desktop Menu */}
          <ul className="hidden xl:flex xl:space-x-12 xl:pr-6 xl:mr-6">
            <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
            <li><Link to="/category" className="hover:text-gray-200">Category</Link></li>
            <li><Link to="/collections" className="hover:text-gray-200">Collections</Link></li>
            <li><Link to="/contact" className="hover:text-gray-200">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
