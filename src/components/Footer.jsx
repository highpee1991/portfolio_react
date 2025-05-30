import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaSquareXTwitter,
  FaSquareEnvelope,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" bg-black text-white py-8 mt-10 text-center lg:text-left">
      <div className=" max-w-7xl ml-auto pl-4">
        <div className=" w-full mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* branding */}
          <div>
            <h3 className=" text-xl font-bold mb-2">Ipadeola Taiwo</h3>
            <p className=" text-sm text-gray-400">
              Building clean and modern web experiences.
            </p>

            <div className=" font-semibold text-sm text-white">
              Email:{" "}
              <span className=" text-sm text-gray-400">
                ipadeola.it@gmail.com
              </span>
            </div>
          </div>

          {/* quick links */}
          <div>
            <ul className=" space-y text-gray-300 text-sm">
              <li>
                <a
                  href="#contact"
                  className="hover:text-white"
                  onClick={() => {
                    const el = document.getElementById("home");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Move to top
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white"
                  onClick={() => {
                    const el = document.getElementById("about");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-white"
                  onClick={() => {
                    const el = document.getElementById("portfolio");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white"
                  onClick={() => {
                    const el = document.getElementById("contacts");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* social media */}
          <div className=" flex flex-col items-center  lg:items-start ">
            <h4 className=" font-semibold mb-2">Connect with Me</h4>
            <div className=" flex space-x-4 mt-2">
              <a
                href="https://x.com/highpee3"
                target="_blank"
                rel="noopener noreferrer"
                className=" p-3 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md text-gray-800 hover:text-black transition"
              >
                <FaSquareXTwitter size={20} />
              </a>
              <a
                href="https://x.com/highpee3"
                target="_blank"
                rel="noopener noreferrer"
                className=" p-3 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md text-gray-800 hover:text-black transition"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://x.com/highpee3"
                target="_blank"
                rel="noopener noreferrer"
                className=" p-3 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md text-gray-800 hover:text-black transition"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className=" text-center text-sm text-gray-500 mt-6">
          @ {new Date().getFullYear()} Ipadeola Taiwo. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
