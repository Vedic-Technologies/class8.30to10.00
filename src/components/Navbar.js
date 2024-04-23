import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoes/vedic logo.png";

const Navbar = ({ setFilteredLevel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("default");

  const handleFilterChange = (level) => {
    setActive(level);
    setFilteredLevel(level);
  };

  return (
    <nav className="shadow-lg h-20 fixed top-0 right-0 left-0 z-10 bg-white">
      <div className="max-full mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex-shrink-0">
            <span className="text-gray-700">
              <img src={logo} alt="logo" className="h-20" />
            </span>
          </div>
          <div className="hidden md:block ">
            <div className="ml-10 mt-4 flex items-baseline space-x-4">
              <a
                href="/"
                onClick={() => handleFilterChange("default")}
                className={` ${active === "default" && "bg-gray-800 text-white "}   
                  text-gray-700  hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md  font-medium`}
              >
                Home
              </a>
              <a
                href="#"
                onClick={() => handleFilterChange("easy")}
                className={` ${active === "easy" && "bg-gray-800 text-white "}
                  text-gray-700  hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md  font-medium`}
              >
                Easy Projects
              </a>
              <a
                href="#"
                onClick={() => handleFilterChange("medium")}
                className={` ${active === "medium" && "bg-gray-800 text-white "}
                  text-gray-700  hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md  font-medium`}
              >
                Intermediate Projects
              </a>
              <a
                href="#"
                onClick={() => handleFilterChange("hard")}
                className={` ${active === "hard" && "bg-gray-800 text-white "}
                  text-gray-700  hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md  font-medium`}
              >
                Large Projects
              </a>
              <Link
                to="/students_projects"
                className="text-gray-700 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md  font-medium"
              >
                Student's Projects
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex relative gap-3 justify-between items-center">
            <input type="text" className='w-60 p-1 rounded-full pl-9 pr-3' placeholder='Search Projects...' />
            <div className=" absolute left-3 top-[14px]"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div className="bg-blue-200 py-1 px-8 rounded-md cursor-pointer hover:bg-blue-300">Search</div>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <a
            href="#"
            onClick={() => handleFilterChange("default")}
            className={`block ${active === "default" && "bg-gray-700 text-gray-300"
              } hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium`}
          >
            Home
          </a>
          <a
            href="#"
            onClick={() => handleFilterChange("about")}
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <a
            href="#"
            onClick={() => handleFilterChange("products")}
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Products
          </a>
        </div>
        <input type="text" />
      </div>
    </nav>
  );
};

export default Navbar;
