// import React from 'react'
// import icon1 from "../assets/icon1.png"
// import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import Icon1 from "../assets/Icon1.png"
import Icon2 from "../assets/Icon2.png"
import Icon3 from "../assets/Icon3.png"

const Footer = () => {
  return (
    <>
      <div className="bg-red-600">
        <div className="bg-[#035A33] text-white p-7">
          <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:items-center gap-8">
            <div className=" flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <div className="bg-[#3D9970] p-4 rounded-full text-white font-bold text-2xl">
                  <h1>BH</h1>
                </div>
                <h1 className="text-2xl font-bold text-white">Beta House</h1>
              </div>
              <p className="text-sm">
                Discover, rent, and find your ideal home hassle-free with
                BetaHouse. Take control of your rental journey today!
              </p>
              <div className="flex gap-2">
                <img src={Icon1} alt="" />
                <p>95 Tinubu Estate, Lekki, Lagos</p>
              </div>
              <div className="flex gap-2">
                <img src={Icon2} alt="" />
                <p>+234 675 8935 675</p>
              </div>
              <div className="flex gap-2">
                <img src={Icon3} alt="" />
                <p>support@rentbetahouse.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Properties
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">More</h3>
              <ul className="text-sm space-y-2">
                <li>
                  {" "}
                  <a href="#" className="hover:underline">
                    Agents
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#" className="hover:underline">
                    Affordable homes
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#" className="hover:underline">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Popular Search</h3>
              <ul className="text-sm space-y-2">
                <li>
                  {" "}
                  <a href="#" className="hover:underline">
                    Apartment for sale
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#" className="hover:underline">
                    Apartment for rent
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#" className="hover:underline">
                    3 bedroom Flat
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#" className="hover:underline">
                    Bungalow
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-8 border-gray-700" />
          <div className="grid grid-cols-1  lg:grid-cols-2 p-6 m-">
            <div className="mt-4 lg:mt-0">
              <p className="text-sm text-center md:text-start">
                {" "}
                Copyright 2023 Betahouse | Designed by Michael.fig
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <ul
                className={`flex flex-col lg:flex-row lg:items-center pb-3 lg:space-x- `}
              >
                <li className="mt-4 lg:mt-0 text-sm ml-4">
                  <p>Privacy Policy</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
