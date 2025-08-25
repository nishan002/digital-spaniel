import React, { useState, useEffect } from "react";
import logo from "/assets/img/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 bg-opacity-95">
        {/* Logo */}
        <div className="w-1/2 px-8 mt-2">
          <img src={logo} alt="Digital Spaniel Logo" className="md:h-15" />
        </div>

        {/* Links */}
        <div className="w-1/2 flex justify-center items-center relative">
          <div className="hidden md:flex space-x-8 text-white font-medium absolute left-1/2 transform -translate-x-1/2">
            <a href="#services" className="border-b-2 border-white">
              Services
            </a>
            <a href="#work" className="hover:border-b-2 border-white">
              Work
            </a>
            <a href="#about" className="hover:border-b-2 border-white">
              About
            </a>
            <a href="#blog" className="hover:border-b-2 border-white">
              Blog
            </a>
            <a href="#contact" className="hover:border-b-2 border-white">
              Contact
            </a>
          </div>

          {/* Hamburger Button for Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden absolute right-0 focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="font-opensans font-semibold md:hidden bg-blue-900 bg-opacity-95 text-white flex flex-col space-y-4 px-6 py-6">
          <a href="#services" className="border-b border-gray-600 pb-2">
            Services
          </a>
          <a href="#work" className="border-b border-gray-600 pb-2">
            Work
          </a>
          <a href="#about" className="border-b border-gray-600 pb-2">
            About
          </a>
          <a href="#blog" className="border-b border-gray-600 pb-2">
            Blog
          </a>
          <a href="#contact" className="border-b border-gray-600 pb-2">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
