import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import logo from "../assets/images/GACAL logo4.png .png";
import "../index.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/project", label: "Projects" },
    { path: "/contact", label: "Contact" },
    { path: "/donate", label: "Donate" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaPinterestP, href: "#", label: "Pinterest" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6 group">
              <img
                src={logo}
                alt="GACAL Logo"
                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-md">
              GET A CHILD A LIFE TODAY! Empowering children and transforming
              communities through education, healthcare, and sustainable
              development initiatives.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                <HiMail className="mr-3 text-blue-400" size={20} />
                <span className="text-sm">getachiildalife@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                <HiPhone className="mr-3 text-blue-400" size={20} />
                <span className="text-sm">+1 (925) 302-6486</span>
              </div>
              <div className="flex items-start text-gray-300 hover:text-white transition-colors duration-200">
                <HiLocationMarker
                  className="mr-3 text-blue-400 mt-1"
                  size={20}
                />
                <span className="text-sm" >
                  4169 RAVENWOOD PL CASTRO VALLEY, CA 94546
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigationLinks.slice(0, 3).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Get Involved
            </h3>
            <ul className="space-y-3">
              {navigationLinks.slice(3).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                  Community
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} GACAL. All Rights Reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-700 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-sm">
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
