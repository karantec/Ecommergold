import React, { useState } from 'react';
import { FaUser, FaHeart, FaShoppingBag, FaSearch, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to toggle mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      {/* Top bar */}
      <div className="bg-[#6E3000] text-white text-center py-1 text-sm">
        Free express worldwide shipping. Subscribe to discover
      </div>

      {/* Main navigation */}
      <div className="bg-[#E9F1ED] px-8 py-4">
        {/* Search bar (only visible on larger screens) */}
        <div className="hidden md:flex justify-center mb-2">
          <div className="relative w-1/2">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="border border-[#C1C1C1] rounded-lg bg-[#E9F1ED] pl-10 pr-4 py-2 w-full focus:outline-none"
            />
          </div>
         
        </div>
        
        {/* Navigation bar for desktop */}
        <div className="hidden md:flex items-center justify-between">
          {/* Centered Navigation Links */}
          <div className="flex justify-center w-full">
            <div className="flex space-x-8 text-gray-700">
            <Link to href="#" className="cusive text-gray-700">What's New</Link>
            <Link to="#" className="text-gray-700">Gifting</Link>
            <Link to="#" className="text-gray-700">Shop By Categories</Link>
            <Link to ="#" className="text-gray-700">Shop By Collection</Link>
            <Link to ="#" className="text-gray-700">Shop By Material</Link>
            <Link to ="#" className="text-gray-700">Blogs</Link>
            </div>
          </div>

          {/* Icons */}
          <div className="flex space-x-6 items-center">
            {/* User icon */}
            <a href="#" className="text-gray-700">
              <FaUser className="text-xl" />
            </a>
            {/* Wishlist icon with badge */}
            <div className="relative">
              <a href="#" className="text-gray-700">
                <FaHeart className="text-xl" />
              </a>
              <span className="absolute -top-1 -right-2 bg-[#A45B32] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </div>
            {/* Cart icon with badge */}
            <div className="relative">
              <a href="#" className="text-gray-700">
                <FaShoppingBag className="text-xl" />
              </a>
              <span className="absolute -top-1 -right-2 bg-[#A45B32] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">5</span>
            </div>
          </div>
        </div>

        {/* Hamburger Icon (only visible on mobile view) */}
        <div className="md:hidden flex justify-between items-center">
          {/* Mobile View: Logo and Search */}
          <div className="flex items-center w-full">
            {/* Logo */}
            <img
              src="preview.png"  // Replace with actual logo URL
              alt="Logo"
              className="h-12 mr-2 "
            />
            {/* Search bar */}
            <div className="relative w-full">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="border border-[#C1C1C1] rounded-lg bg-[#E9F1ED] pl-10 pr-4 py-4 w-full  focus:outline-none"
              />
            </div>
          </div>

          {/* Hamburger Icon */}
          <FaBars
            className="text-gray-700  ml-4 text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>

        {/* Mobile Menu (shown when isMobileMenuOpen is true) */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#E9F1ED] flex flex-col items-center py-4 space-y-4">
            <Link to href="#" className="cusive text-gray-700">What's New</Link>
            <Link to="#" className="text-gray-700">Gifting</Link>
            <Link to="#" className="text-gray-700">Shop By Categories</Link>
            <Link to ="#" className="text-gray-700">Shop By Collection</Link>
            <Link to ="#" className="text-gray-700">Shop By Material</Link>
            <Link to ="#" className="text-gray-700">Blogs</Link>

            {/* Mobile icons */}
            <div className="flex space-x-6 items-center mt-4">
              {/* User icon */}
              <a href="#" className="text-gray-700">
                <FaUser className="text-xl" />
              </a>
              {/* Wishlist icon with badge */}
              <div className="relative">
                <a href="#" className="text-gray-700">
                  <FaHeart className="text-xl" />
                </a>
                <span className="absolute -top-1 -right-2 bg-[#A45B32] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </div>
              {/* Cart icon with badge */}
              <div className="relative">
                <a href="#" className="text-gray-700">
                  <FaShoppingBag className="text-xl" />
                </a>
                <span className="absolute -top-1 -right-2 bg-[#A45B32] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">5</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
