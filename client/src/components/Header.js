import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Header = ({ user, onLogout }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handlePersonIconClick = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
    setMenuOpen(false);
  };

  const handleCartClick = () => {
    navigate("/cart");
    setMenuOpen(false);
  };

  const handleAboutClick = () => {
    navigate("/about");
    setMenuOpen(false);
  };

  const handleBlogClick = () => {
    navigate("/blog");
    setMenuOpen(false);
  };

  const handleProductsClick = () => {
    navigate("/products");
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex justify-between items-center py-4 px-4 md:px-10 lg:px-20 transition-all duration-300 fixed top-0 left-0 right-0 z-10 ${
        scrolled || menuOpen ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a href="/" className="flex items-center shrink-0">
        <img src="./assets/Cir.svg" alt="Logo" className="w-9 h-9" />
        <span className="ml-3 text-black font-dm-sans text-xl lg:text-2xl font-extrabold tracking-wider leading-normal">
          Furnitech
        </span>
      </a>

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center justify-center gap-6 lg:gap-10 px-4 py-2 text-[17px] lg:text-[20px] font-bold leading-[30px] text-brown-1000 font-dm-sans">
        <a href="/" className="hover:text-brown">Home</a>
        <a onClick={handleProductsClick} className="hover:text-brown cursor-pointer">Products</a>
        <a onClick={handleBlogClick} className="hover:text-brown cursor-pointer">Blogs</a>
        <a onClick={handleAboutClick} className="hover:text-brown cursor-pointer">About Us</a>
      </div>

      {/* Desktop icons */}
      <div className="hidden md:flex items-center gap-4 lg:gap-6">
        <a onClick={handlePersonIconClick} className="cursor-pointer hover:border-2 hover:border-brown rounded-full">
          <img src="./assets/person.svg" alt="person" className="w-10 h-10 lg:w-[50px] lg:h-[50px]" />
        </a>
        <a onClick={handleCartClick} className="cursor-pointer hover:border-2 hover:border-brown rounded-full">
          <img src="./assets/shopping.svg" alt="shopping cart" className="w-10 h-10 lg:w-[50px] lg:h-[50px]" />
        </a>
        {user && (
          <Button text="Log Out" onClick={onLogout} className="px-4 py-2 lg:px-6 lg:py-3" />
        )}
      </div>

      {/* Mobile hamburger button */}
      <button
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6 text-heading-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6 flex flex-col gap-4 border-t border-gray-100">
          <a href="/" className="text-lg font-bold text-brown-1000 hover:text-brown py-2">Home</a>
          <a onClick={handleProductsClick} className="text-lg font-bold text-brown-1000 hover:text-brown cursor-pointer py-2">Products</a>
          <a onClick={handleBlogClick} className="text-lg font-bold text-brown-1000 hover:text-brown cursor-pointer py-2">Blogs</a>
          <a onClick={handleAboutClick} className="text-lg font-bold text-brown-1000 hover:text-brown cursor-pointer py-2">About Us</a>
          <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
            <a onClick={handlePersonIconClick} className="cursor-pointer hover:border-2 hover:border-brown rounded-full">
              <img src="./assets/person.svg" alt="person" className="w-10 h-10" />
            </a>
            <a onClick={handleCartClick} className="cursor-pointer hover:border-2 hover:border-brown rounded-full">
              <img src="./assets/shopping.svg" alt="shopping cart" className="w-10 h-10" />
            </a>
            {user && <Button text="Log Out" onClick={onLogout} className="px-4 py-2" />}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
