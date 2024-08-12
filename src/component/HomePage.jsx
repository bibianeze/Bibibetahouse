// import React from 'react'
import Navbar from "./Navbar";
import "../styles/Home.css";
// import secofthings from "../assets/secofthings.png";
import line from "../assets/line.png";
import reducebtn from "../assets/reducebtn.png";
import increasebtn from "../assets/increasebtn.png";

const HomePage = () => {
  return (
    <div>
      {/* section one */}
      <div className="bg-landing ">
        <Navbar />
        <div className="p-7">
          <div className=" flex flex-col items-center gap-12  lg:gap-24 pt-5 pb-8 lg:pt-0">
            <div className="">
              <h1 className="text-white text-3xl lg:text-5xl font-bold text-center p-2 lg:p-0">
                Browse Our Properties
              </h1>
              <p className="text-white text-center">
                Find your perfect home among our curated properties. Start
                browsing now!
              </p>
            </div>
            <div>{/* <img src={secofthings} alt="" /> */}</div>
          </div>
          <div className="bg-[#ffffffaa] p-5 mb-4">
            <div className="bg-white rounded-lg flex w-full  gap-3  flex-col md:flex-col lg:flex-row justify-between items-center">
              <div className="flex gap">
                <div className="flex flex-col pl-9">
                  <h1 className="text-l uppercase font-bold">Location</h1>
                  <p className="text-[#787878]">eg. Gbagada</p>
                </div>
              </div>
              <img src={line} alt="" className="  hidden lg:block" />
              <div className="flex ">
                <div className="flex flex-col items-center">
                  <h1 className="text-l uppercase font-bold">Property Type</h1>
                  <p className="text-[#787878]">eg. Duplex, Bedroom Flat</p>
                </div>
              </div>
              <img src={line} alt="" className="hidden lg:block" />
              <div>
                <div className="flex flex-col items-center ">
                  <h1 className="text-l uppercase font-bold">Bedroom</h1>
                  <div className="flex gap-4">
                    <img src={reducebtn} alt="" />
                    <p>0</p>
                    <img src={increasebtn} alt="" />
                  </div>
                </div>
              </div>
              {/* <img src={line} alt="" className=" p-4" /> */}

              <div className="">
                <button className="bg-[#3D9970] w-64 rounded-tr-lg rounded-br-lg py-3 lg:py-9">
                  <h1 className="text-l text-white font-bold">Find Property</h1>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section two */}
      <div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
