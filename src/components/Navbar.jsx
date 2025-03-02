import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get current route path

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Function to check if the current route is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black text-2xl p-0 shadow-md z-20 font-roboto.">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/digitalworldlogo.jpg" alt="Logo" className="h-22" />
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menu Items for Desktop */}
        <ul className="hidden lg:flex gap-6 items-center">
          <li>
            <Link
              to="/"
              className={`${
                isActive("/") ? "text-blue-500 font-semibold" : "hover:text-blue-400"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`${
                isActive("/services") ? "text-blue-500 font-semibold" : "hover:text-blue-400"
              }`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`${
                isActive("/about") ? "text-blue-500 font-semibold" : "hover:text-blue-400"
              }`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={`${
                isActive("/blog") ? "text-blue-500 font-semibold" : "hover:text-blue-400"
              }`}
            >
              Blog
            </Link>
          </li>
          <li>
  <a
    href="https://wa.me/918887813257" // Replace with your actual WhatsApp number
    target="_blank"
    rel="noopener noreferrer"
    className={`px-6 border-2 py-2 rounded-lg font-semibold transition duration-300 ${
      isActive("/contact")
        ? "bg-black text-white border-black"
        : "bg-white text-black border-black hover:bg-black hover:text-white"
    }`}
  >
    Contact
  </a>
</li>

        </ul>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute top-22 left-0 w-full">
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <Link
                to="/"
                className={`${
                  isActive("/") ? "text-blue-500 font-semibold" : "hover:text-blue-400"
                }`}
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`${
                  isActive("/services") ? "text-blue-500 font-semibold" : "hover:text-blue-400"
                }`}
                onClick={toggleMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${
                  isActive("/about") ? "text-blue-500 font-semibold" : "hover:text-blue-400"
                }`}
                onClick={toggleMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={`${
                  isActive("/blog") ? "text-blue-500 font-semibold" : "hover:text-blue-400"
                }`}
                onClick={toggleMenu}
              >
                Blog
              </Link>
            </li>
            <li className="mt-2">
            <a
    href="https://wa.me/918887813257" 
    target="_blank"
    rel="noopener noreferrer"
    className={`px-6 border-2 py-2 rounded-lg font-semibold transition duration-300 ${
      isActive("/contact")
        ? "bg-black text-white border-black"
        : "bg-white text-black border-black hover:bg-black hover:text-white"
    }`}
  >
    Contact
  </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
