import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, Search, Flame } from "lucide-react";
import logo from "../pages/image/image.png";
import { Slide, ToastContainer } from "react-toastify";
import { useCart } from "../Context/CartContext";

export const Navbar = () => {
    const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const navItems = [
    { name: "Shop", path: "/shop" },
    { name: "Phones", path: "/product/phone" },
    { name: "Laptops", path: "/product/pc" },
    { name: "TVs", path: "/product/tv" },
  ];

  const isActive = (path: any) => location.pathname === path;

  const handleSearch = (e: any) => {
    e.preventDefault();
    // Handle search logic, e.g., redirect to a search results page
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav className="bg-[#053262] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center justify-between p-4">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
              <img
                src={logo}
                alt="Techshop Logo"
                className="w-[10px] sm:w-[64px]"
              />
              <span className="text-2xl font-bold cursor-pointer hover:text-yellow-400 transition-colors sm:text-3xl">
                Techshop
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="ml-10 flex items-baseline space-x-4">
              <div className="flex items-center space-x-2">
                <p className="text-lg font-semibold">Popular:</p>
                <Flame className="text-red-500 w-8 h-8" />
              </div>{" "}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-1 py-2 rounded-md text-sm font-medium ${
                    isActive(item.path)
                      ? "text-yellow-400 underline"
                      : "hover:text-yellow-400"
                  } transition-colors`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* Search Input */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search..."
                autoComplete="true"
                value={searchQuery}
                required
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-3 py-2 rounded-full text-black max-w-[500px] w-[400px]  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black"
              >
                <Search size={20} />
              </button>
            </form>
          </div>

          {/* Cart & Login */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 relative">
              <Link
                to="/cart"
                className="p-2 rounded-full bg-yellow-400 text-gray-800 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-yellow-500 transition-colors relative"
              >
                <span className="absolute rounded-full top-1.5 right-3 text-red-800   text-[15px] font-bold transform translate-x-1/2 -translate-y-1/2">
                {cartItems.map((item) => (
                  item.quantity
                ))}
                </span>
                <ShoppingCart className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">View shopping cart</span>
              </Link>
              <Link
                to="/login"
                className="ml-3 px-4 py-2 rounded-md text-sm font-medium bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-500 transition-colors"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? "bg-gray-900 text-yellow-400"
                    : "hover:bg-gray-700 hover:text-yellow-400"
                } transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Search Input for Mobile */}
            <form onSubmit={handleSearch} className="mt-3">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full px-3 py-2 rounded-md text-sm  text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="mt-2 w-full px-3 py-2 rounded-md bg-yellow-400 text-gray-800 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-yellow-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      )}
      <ToastContainer
        position="top-left"
        autoClose={500}
        transition={Slide}
        closeOnClick
        hideProgressBar
        limit={1}
        stacked
        className="top-3 max-w-[337px] w-[10px] left-[50%] -translate-x-[50%]"
      />
    </nav>
  );
};
