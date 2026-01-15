import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore Jobs", path: "/jobs" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 
        flex items-center justify-between
        px-4 md:px-16 lg:px-24 xl:px-32
        transition-all duration-500
        ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-md text-gray-700 py-1.5 md:py-4"
            : "bg-primary text-gray-700 py-1.5 md:py-4"
        }
      `}
    >
      
      <Link to="/" className="flex items-center">
        <img
          src={assets.logo}
          alt="SparkRise Careers"
          className={`
            h-8 sm:h-9 md:h-10
            w-auto object-contain transition-all duration-300
            ${isScrolled ? "invert opacity-90" : ""}
          `}
        />
      </Link>

      
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className={`group flex flex-col gap-0.5 font-medium
              ${isScrolled ? "text-gray-700" : "text-gray-700"}
            `}
          >
            {link.name}
            <div
              className={`
                h-0.5 w-0 group-hover:w-full transition-all duration-300
                ${isScrolled ? "bg-gray-700" : "bg-white"}
              `}
            />
          </Link>
        ))}
      </div>

      
      <div className="hidden md:flex items-center gap-3">
        {!user ? (
          <Link
            to="/login"
            className="px-6 py-2 border active:scale-95 hover:bg-slate-50
            transition-all rounded-full text-slate-700"
          >
            Login
          </Link>
        ) : (
          <>
            <span className="text-sm text-slate-700">
              Hi, {user.name || "User"}
            </span>

            <button
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className="px-5 py-1.5 border rounded-full text-sm
              text-gray-600 hover:bg-gray-50 transition-all"
            >
              Logout
            </button>
          </>
        )}
      </div>

      {/* MOBILE MENU ICON */}
      <div className="flex items-center gap-3 md:hidden">
        <img
          onClick={() => setIsMenuOpen(true)}
          src={assets.menuIcon}
          alt="menu"
          className={`h-5 cursor-pointer ${isScrolled ? "invert" : ""}`}
        />
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed top-0 left-0 w-full h-screen bg-white
          flex flex-col items-center justify-center gap-6
          text-gray-800 font-medium
          transition-all duration-500 md:hidden
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={assets.closeIcon} alt="close" className="h-6" />
        </button>

        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="text-lg"
          >
            {link.name}
          </Link>
        ))}

        {/* MOBILE AUTH */}
        {!user ? (
          <Link
            to="/login"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg"
          >
            Login
          </Link>
        ) : (
          <button
            onClick={() => {
              logout();
              setIsMenuOpen(false);
              navigate("/login");
            }}
            className="text-lg text-red-600"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;