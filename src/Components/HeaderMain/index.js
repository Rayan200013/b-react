import React, { useState } from "react";
import "./style.css";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-background">
      <div className="container mx-auto flex items-center justify-between py-6 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            className="h-10 w-10 mr-2"
            src="/path/to/your/logo.png"
            alt="Logo"
          />
          {/* <span className="text-white font-bold text-lg">Brava 360 Digital</span> */}
        </div>

        {/* Mobile Menu Icon - Shown on Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 6h18v2H3V6zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation - Shown on Desktop and Mobile */}
        <nav
          className={`md:flex items-center space-x-6 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <a
            href="#!"
            className="font-inter font-MenuItem text-white text-listItem relative"
          >
            Skyrocket Your ROI
            <span className="hover-border"></span>
          </a>
          <a
            href="#!"
            className="font-inter font-MenuItem text-white text-listItem relative"
          >
            BRAVA 360
            <span className="hover-border"></span>
          </a>
          <a
            href="#!"
            className="font-inter font-MenuItem text-white text-listItem relative"
          >
            Services
            <span className="hover-border"></span>
          </a>
          <a
            href="#!"
            className="font-inter font-MenuItem text-white text-listItem relative"
          >
            Portfolio
            <span className="hover-border"></span>
          </a>
          <a
            href="#!"
            className="font-inter font-MenuItem text-white text-listItem relative"
          >
            Team
            <span className="hover-border"></span>
          </a>
          <a
            href="#!"
            className="font-inter font-MenuItem text-white text-listItem relative"
          >
            Clients
            <span className="hover-border"></span>
          </a>
          <a
            href="#!"
            className="font-inter font-MenuItem text-white text-listItem relative"
          >
            Blog
            <span className="hover-border"></span>
          </a>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Book a Consultancy
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
