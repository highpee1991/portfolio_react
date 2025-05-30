import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav id="home" className={`w-full pt-[60px] flex justify-end ${className}`}>
      {/* hamburger */}
      <div
        className=" lg:hidden z-50 text-white cursor-pointer pr-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* desktop menu */}
      <ul className="hidden lg:flex gap-5 text-white pr-36">
        <li
          className="cursor-pointer hover:text-gray-300"
          onClick={() => scrollToSection("about")}
        >
          About me
        </li>
        <li
          className="cursor-pointer hover:text-gray-300"
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </li>
        <li
          className="cursor-pointer hover:text-gray-300"
          onClick={() => scrollToSection("portfolio")}
        >
          Portfolio
        </li>
        <li
          className="cursor-pointer hover:text-gray-300"
          onClick={() => scrollToSection("pitch")}
        >
          Elevator pitch
        </li>
        <li
          className="cursor-pointer text-black hover:text-gray-700 rounded-2xl px-4 py-1 bg-white"
          onClick={() => scrollToSection("contacts")}
        >
          Contact me
        </li>
      </ul>

      {/* mobile */}
      <ul
        className={`lg:hidden fixed top-0 right-0 w-2/3 h-full bg-black text-white transform ${
          isOpen ? "translate-x-0 " : "translate-x-full"
        } transition-transform duration-300 ease-in-out flex-col gap-6 pt-24 px-6 z-40`}
      >
        <li
          className=" cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          About Me
        </li>
        <li
          className=" cursor-pointer"
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </li>
        <li
          className=" cursor-pointer"
          onClick={() => scrollToSection("portfolio")}
        >
          Portfolio
        </li>
        <li
          className=" cursor-pointer"
          onClick={() => scrollToSection("pitch")}
        >
          Elevator Pitch
        </li>
        <li
          className=" cursor-pointer"
          onClick={() => scrollToSection("contacts")}
        >
          Contact Me
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
