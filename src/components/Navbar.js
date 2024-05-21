import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoes/vedic logo.png";
import logo_compact from "../assets/logoes/vedic_logo_compact.png";
import { motion } from 'framer-motion';
import AnimateCharacter from "./AnimateCharacter";
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
              <img src={logo} alt="logo" className="h-20 hidden md:flex" />
             <div className="flex items-center gap-5">
             <i className="fa-solid fa-bars text-4xl md:hidden cursor-pointer"
             onClick={() => setIsOpen(!isOpen)}
             ></i>
               <img src={logo_compact} alt="logo" className="h-20 mt-3 md:hidden" />    
             </div>                   
          </div>
       
            <div className="ml-10 mt-4 flex items-baseline space-x-4  text-5xl uppercase tracking-widest font-bold text-gray-700">
           <AnimateCharacter text={['P','R','O','J','E','C','T','S']} delay={1} duration={0.3} stagger={0.15} />                  
            </div>
       
{/*         
          <div className="relative gap-3 justify-between items-center bg-red-200 hidden lg:flex">
            <input type="text" className='w-60 p-1 rounded-full pl-9 pr-3' placeholder='Search Projects...' />
            <div className=" absolute left-3 top-[14px]"><i class="fa-solid fa-magnifying-glass"></i></div>
            <div className="bg-blue-200 py-1 px-8 rounded-md cursor-pointer hover:bg-blue-300">Search</div>
          </div> */}
          <div className="">.</div>
        </div>
        
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
       
        <input type="text" />
      </div>
    </nav>
  );
};

export default Navbar;
