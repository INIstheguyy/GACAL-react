import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import logo from "../assets/images/GACAL logo4.png .png";
import "../index.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  const handleLinkClick = () => {
    setToggle(false);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/project", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300 ${
        scrolled ? "shadow-lg py-3" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src={logo}
              alt="GACAL Logo"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleLinkClick}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                  isActive(link.path)
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></span>
                )}
              </Link>
            ))}
            <Link
              to="/donate"
              onClick={handleLinkClick}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 hover:from-blue-700 hover:to-blue-800"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMenuToggle}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle menu"
          >
            {toggle ? (
              <IoClose size={28} className="text-gray-700" />
            ) : (
              <HiMenuAlt3 size={28} className="text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            toggle ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={handleMenuToggle}
          style={{ top: scrolled ? '64px' : '80px' }}
        >
          <div
            className={`absolute right-0 top-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
              toggle ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex-1 space-y-1">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={handleLinkClick}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      isActive(link.path)
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: toggle ? "slideInRight 0.3s ease-out" : "none",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <Link
                to="/donate"
                onClick={handleLinkClick}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;