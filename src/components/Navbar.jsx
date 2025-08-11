"use client";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import cygnusLogo from "../assets/logo/cygnus.png";
// import anim1 from "../assets/anim/ai1.mp4";
// import anim2 from "../assets/anim/ai2.mp4";
// import anim4 from "../assets/anim/ai4.mp4";
// import anim5 from "../assets/anim/ai5.mp4";
import { caseData } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();
  // const [showCompany, setShowCompany] = useState(false);
  const [showCaseStudies, setShowCaseStudies] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // We'll use a subset of case studies for the navbar dropdown for visual appeal.
  const featuredCaseStudies = caseData.slice(0, 3);

  return (
    <div className="h-20 px-6 py-4 flex justify-between items-center bg-white">
      {/* Logo */}
      <div>
        <img
          onClick={() => navigate("/")}
          src={cygnusLogo}
          alt="Logo"
          className="h-10 cursor-pointer"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-10 relative">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-800 font-semibold" : "text-gray-800"
          }
        >
          HOME
        </NavLink>
        <div className="relative">
          <NavLink
            to="/solutions"
            className={({ isActive }) =>
              isActive ? "text-blue-800 font-semibold" : "text-gray-800"
            }
          >
            SOLUTIONS
          </NavLink>
        </div>
        <NavLink
          to="/industries"
          className={({ isActive }) =>
            isActive ? "text-blue-800 font-semibold" : "text-gray-800"
          }
        >
          INDUSTRIES
        </NavLink>
        <div
          className="relative"
          onMouseEnter={() => setShowCaseStudies(true)}
          onMouseLeave={() => setShowCaseStudies(false)}
        >
          <NavLink
            to="/casestudies"
            className={({ isActive }) =>
              isActive ? "text-blue-800 font-semibold" : "text-gray-800"
            }
          >
            CASE STUDIES
          </NavLink>
          {showCaseStudies && (
            <div className="absolute h-80 w-[68rem] -right-72 bg-white rounded-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 z-10 shadow-lg">
              {featuredCaseStudies.map((item, index) => (
                <Link
                  key={index}
                  to={`/casestudies/${item.slug}`}
                  onClick={() => setShowCaseStudies(false)}
                  className="relative w-full max-w-sm group/card cursor-pointer overflow-hidden rounded-md transition-transform duration-300 hover:scale-105"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition duration-300 group-hover/card:from-black/80 z-0"></div>

                  <div className="flex flex-col justify-end min-h-64 h-full p-4 z-10">
                    <h2 className="font-bold text-md md:text-xl text-white relative">
                      {item.heading}
                    </h2>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        <div
          className="relative"
          // onMouseEnter={() => setShowCompany(true)}
          // onMouseLeave={() => setShowCompany(false)}
        >
          <NavLink
            to="/company"
            className={({ isActive }) =>
              isActive ? "text-blue-800 font-semibold" : "text-gray-800"
            }
          >
            COMPANY
          </NavLink>
          {/* {showCompany && (
            <div className="absolute w-48 left-0 bg-white border border-gray-300 shadow-lg rounded-xl py-2 z-10">
              {[
                {
                  label: "Our Story",
                  path: "/company/our-story",
                  imgSrc: anim4,
                },
                { label: "Values", path: "/company/values", imgSrc: anim1 },
                { label: "Team", path: "/company/team", imgSrc: anim2 },
                { label: "Careers", path: "/company/careers", imgSrc: anim5 },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => navigate(item.path)}
                  className="flex items-center w-full mb-2 px-4 py-2 text-left hover:bg-blue-400 hover:text-white text-gray-800"
                >
                  <img
                    src={item.imgSrc}
                    alt={item.label}
                    className="h-8 w-8 mr-3"
                  />
                  {item.label}
                </button>
              ))}
            </div>
          )} */}
        </div>
      </ul>

      {/* Contact Button */}
      <Link
        to="/contact"
        className="hidden lg:block text-white bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none shadow-lg shadow-blue-500/50 dark:shadow-lg font-medium rounded-2xl text-sm px-5 py-2.5 text-center"
      >
        Contact Us
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-gray-800"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h26M4 12h26M4 18h26"}
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg z-10 lg:hidden">
          <ul className="flex flex-col items-start p-4 space-y-4">
            <NavLink
              to="/"
              className="text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </NavLink>
            <NavLink
              to="/solutions"
              className="text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              SOLUTIONS
            </NavLink>
            <NavLink
              to="/industries"
              className="text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              INDUSTRIES
            </NavLink>
            <NavLink
              to="/casestudies"
              className="text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              CASE STUDIES
            </NavLink>
            <NavLink
              to="/company"
              className="text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              COMPANY
            </NavLink>
            <Link
              to="/contact"
              className="text-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT US
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
