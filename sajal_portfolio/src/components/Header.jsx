import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 
        p-4 flex justify-between items-center 
        text-white 
        ${isScrolled ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-transparent'}
      `}
    >
      <a href="/" className="text-2xl font-bold hover:text-[#B098C8]">
        Sajal
      </a>

      {/* Hamburger menu for mobile */}
      <button
        className="block md:hidden text-white focus:outline-none"
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

      {/* Navigation links */}
      <nav
        className={`
          absolute top-full left-0 w-full bg-gray-900 transition-transform 
          transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} 
          md:relative md:top-auto md:left-auto md:w-auto md:bg-transparent md:transform-none
        `}
      >
        <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
          <li>
            <a
              href="#portfolio"
              className="block py-2 md:py-0 text-white hover:text-gray-400"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block py-2 md:py-0 text-white hover:text-gray-400"
            >
              About
            </a>
          </li>
        </ul>
      </nav>

      {/* Contact button */}
      <a
        href="#contact"
        className="hidden md:inline-block bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Contact
      </a>
    </header>
  );
};

export default Header;
