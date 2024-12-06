// file to create the navbar for the application

// importing the required modules
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/home" className="text-white text-2xl font-bold">
          <img
            src="data:image/jpeg;base64,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"
            alt="logo"
            className="h-24 w-24 rounded-full"
          />
        </Link>

        <ul className="hidden md:flex space-x-6 text-white text-sm font-medium">
          <li>
            {currentUser ? (
              <Link to="/profile" className="hover:text-blue-400 transition">
                Profile
              </Link>
            ) : (
              <div className="flex flex-row gap-6">
                <button
                  onClick={() => navigate("/")}
                  className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold tracking-wide text-sm transitio"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/signup")}
                  className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold tracking-wide text-sm transitio"
                >
                  signup
                </button>
              </div>
            )}
          </li>
        </ul>

        <div
          className="md:hidden text-white cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>

      <div
        className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <ul className="space-y-4 mt-4 text-center text-white text-sm font-medium">
          <li>
            {currentUser ? (
              <Link to="/profile" className="hover:text-blue-400 transition">
                Profile
              </Link>
            ) : (
              <div className="flex flex-col gap-6">
                <button
                  onClick={() => navigate("/")}
                  className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold tracking-wide text-sm transitio"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/signup")}
                  className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold tracking-wide text-sm transitio"
                >
                  signup
                </button>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
