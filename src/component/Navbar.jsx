import { useState } from "react";
// import icon1 from "../assets/icon1.png";
import navicon from "../assets/navicon.png";
import dropdownicon from "../assets/dropdownicon.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent shadow-md">
      <div className="container w-11/12 mx-auto flex px-0 justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="bg-[#3D9970] p-4 rounded-full text-white font-bold text-2xl">
            <h1>BH</h1>
          </div>
          <h1 className="text-2xl font-bold text-white">Beta House</h1>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto ${
            isOpen
              ? "absolute bg-white top-16 left-0 right-0"
              : "hidden lg:block"
          }`}
        >
          <ul
            className={`flex flex-col lg:flex-row lg:items-center pb-3 lg:space-x-4 ${
              isOpen ? "py-4 pl-9" : " items-center"
            }`}
          >
            <li className="mt-4 lg:mt-0">
              <a href="#" className="block   text-white">
                Home
              </a>
            </li>
            <li className="mt-4 lg:mt-0">
              <a href="#" className="block text-black ">
                <span className="underline text-white">Properties</span>
              </a>
            </li>
            <li className="mt-4 lg:mt-0">
              <a href="#" className="block text-white">
                About Us
              </a>
            </li>
            <li className="mt-4 lg:mt-0">
              <a href="#" className="block text-white">
                Blog
              </a>
            </li>
            <li className="mt-4 lg:mt-0">
              <a href="#" className="block text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className=" p-3 rounded-md border-purple-800  hidden lg:block">
          <div className="flex items-center gap-3">
            <div>
              <img src={navicon} alt="" />
            </div>
            <div>
              <h2 className="uppercase text-white">Aisha Cucurella</h2>
            </div>
            <div>
              <img src={dropdownicon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
