
import { Link, useLocation } from "react-router-dom";
import { Calendar, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">EventHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-primary bg-primary/5"
                  : "text-gray-700 hover:text-primary hover:bg-primary/5"
              }`}
            >
              Home
            </Link>
            <Link
              to="/events"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/events")
                  ? "text-primary bg-primary/5"
                  : "text-gray-700 hover:text-primary hover:bg-primary/5"
              }`}
            >
              Events
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/contact")
                  ? "text-primary bg-primary/5"
                  : "text-gray-700 hover:text-primary hover:bg-primary/5"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive("/")
                  ? "text-primary bg-primary/5"
                  : "text-gray-700 hover:text-primary hover:bg-primary/5"
              }`}
            >
              Home
            </Link>
            <Link
              to="/events"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive("/events")
                  ? "text-primary bg-primary/5"
                  : "text-gray-700 hover:text-primary hover:bg-primary/5"
              }`}
            >
              Events
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive("/contact")
                  ? "text-primary bg-primary/5"
                  : "text-gray-700 hover:text-primary hover:bg-primary/5"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
