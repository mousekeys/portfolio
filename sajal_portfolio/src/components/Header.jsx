import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`
        fixed top-0 left-0 w-full z-50 
        p-4 flex justify-between items-center 
        text-white 
        ${isScrolled ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-transparent'} // Conditional background color
      `}
    >
      <a href="/" className="text-2xl font-bold">
        Sajal
      </a>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#portfolio" className="hover:text-gray-400">Portfolio</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
        </ul>
      </nav>
      <a
        href="#contact"
        className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Contact
      </a>
    </header>
  );
};

export default Header;