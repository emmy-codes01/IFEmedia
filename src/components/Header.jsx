import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; // 👈 import router tools
import logo from "../assets/images/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsMobileMenuOpen(false);
      setIsServicesDropdownOpen(false);
    };
    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  const navigationLinks = [
    { name: "Home", path: "/" }, // 👈 use paths for pages
    { name: "About", path: "/about" },
    {
      name: "Services",
      path: "#services", // still scrolls within the same page
      dropdown: [
        { name: "Photography", path: "/services/photography" },
        { name: "Videography", path: "/services/videography" },
      ],
    },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavClick = (path) => {
    if (path.startsWith("#")) {
      // In-page scroll
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Route navigation
      navigate(path);
    }
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all montserrat duration-300 ${
          isScrolled
            ? "bg-black/50 backdrop-blur-lg shadow-2xl shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => handleNavClick("/")}
                className="cursor-pointer group flex items-center space-x-3 transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={logo}
                  alt="IFEMedia Logo"
                  className="size-5 w-auto"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                  loading="eager" // Ensure logo is eagerly loaded
                  onLoad={(e) => e.target.classList.remove('blur-xs')}
                />
                <div
                  className="hidden text-2xl font-thin tracking-wider text-white"
                  style={{ display: "none" }}
                >
                  IFE<span className="text-red-500">Media</span>
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    >
                      <button className="cursor-pointer flex items-center space-x-1 text-white hover:text-red-400 transition-colors duration-300 group">
                        <span className="font-light tracking-wide">
                          {link.name}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isServicesDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></div>
                      </button>

                      {/* Services Dropdown */}
                      <div
                        className={`absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-lg border border-gray-800 rounded-lg shadow-2xl transition-all duration-300 ${
                          isServicesDropdownOpen
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible -translate-y-2"
                        }`}
                      >
                        <div className="py-2">
                          {link.dropdown.map((subLink) => (
                            <button
                              key={subLink.name}
                              onClick={() => handleNavClick(subLink.path)}
                              className="cursor-pointer block w-full px-4 py-3 text-left text-white hover:text-red-400 hover:bg-red-500/10 transition-all duration-300 font-light tracking-wide"
                            >
                              {subLink.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavClick(link.path)}
                      className="cursor-pointer relative text-white hover:text-red-400 transition-colors duration-300 font-light tracking-wide group"
                    >
                      {link.name}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></div>
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center space-x-4">
              <button className="cursor-pointer hidden lg:inline-flex items-center space-x-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 font-medium tracking-wide">
                <Phone className="w-4 h-4" />
                <span>Book Now</span>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                className="cursor-pointer lg:hidden p-2 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors duration-300"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

        <div
          className={`absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-gray-800 transition-all duration-300 ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-w-7xl mx-auto px-4 py-8">
            <nav className="space-y-6">
              {navigationLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() =>
                          setIsServicesDropdownOpen(!isServicesDropdownOpen)
                        }
                        className="cursor-pointer flex items-center justify-between w-full text-xl font-light text-white hover:text-red-400 transition-colors duration-300 py-3"
                      >
                        <span className="tracking-wide">{link.name}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            isServicesDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isServicesDropdownOpen
                            ? "max-h-48 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pl-6 space-y-3 py-3 border-l-2 border-red-500/30">
                          {link.dropdown.map((subLink) => (
                            <button
                              key={subLink.name}
                              onClick={() => handleNavClick(subLink.path)}
                              className="cursor-pointer block w-full text-left text-lg text-gray-300 hover:text-red-400 transition-colors duration-300 py-2 font-light tracking-wide"
                            >
                              {subLink.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavClick(link.path)}
                      className="cursor-pointer block w-full text-left text-xl font-light text-white hover:text-red-400 transition-colors duration-300 py-3 tracking-wide"
                    >
                      {link.name}
                    </button>
                  )}
                </div>
              ))}
              <div className="pt-6 border-t border-gray-800">
                <button className="cursor-pointer w-full flex items-center justify-center space-x-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 font-medium tracking-wide text-lg">
                  <Phone className="w-5 h-5" />
                  <span>Book Now</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
