import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center text-gray-400 backdrop-filter backdrop-blur-md bg-black bg-opacity-70 transition-all duration-300"
    >
      {/* Display only "Sajal" on small screens */}
      <a href="/" className="text-2xl font-italic hover:text-[#B098C8] md:hidden">
        Sajal
      </a>

      {/* Hamburger menu for mobile */}
      <button
        className="block md:hidden text-gray-400 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Navigation links for larger screens */}
      <nav
        className={`absolute top-full left-0 w-full bg-gray-900 bg-opacity-80 transition-transform transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:relative md:top-auto md:left-auto md:w-auto md:bg-transparent md:transform-none`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
          <li>
            <a href="#hero" className="block py-2 md:py-0 text-gray-400 hover:text-white">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#about" className="block py-2 md:py-0 text-gray-400 hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="block py-2 md:py-0 text-gray-400 hover:text-white">
              Projects
            </a>
          </li>
        </ul>
      </nav>

      {/* Contact button for larger screens */}
      <a
        href="#Contact"
        className="hidden md:inline-block bg-blue-600 hover:text-white py-2 px-4 rounded-md"
      >
        Contact
      </a>
    </header>
  );
};

export default Header;
