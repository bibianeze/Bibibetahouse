// import React from 'react'
import imghouse from "../assets/imghouse.png"
import frameleft from "../assets/frameleft.png"
import { TbCurrencyNaira } from "react-icons/tb";
import shortline from "../assets/shortline.png"
import { IoLocationOutline } from "react-icons/io5";
import frameright from "../assets/frameright.png";

const Discoversec = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl lg:text-5xl text-center my-4 font-bold p-4">
          Discover Our Popular Properties
        </h1>
        <div className="flex flex-col lg:flex-row gap-5 p-7 lg:ml-5">
          <div className="relative">
            <div>
              <img src={imghouse} alt="" className="md:w-full h-96" />
            </div>
            <div>
              <img src={frameleft} alt="" className="absolute frameleft" />
            </div>
            <div className="bg-[#9a919142] w-full absolute bottom-2 p-4">
              <div>
                <h1 className="font-bold text-white">Semi Detached Duplex</h1>
                <p className="flex items-center text-white font-bold">
                  <TbCurrencyNaira /> 1,430,000,000
                </p>
              </div>
              <div className="flex gap-3 ">
                <p className="text-sm text-white">6 bed</p>
                <img src={shortline} alt="" />
                <p className="text-sm text-white">3 Bath</p>
                <img src={shortline} alt="" />
                <p className="text-sm text-white">720 sq ft</p>
              </div>
              <div className="flex gap-2 items-center text-sm text-white">
                <IoLocationOutline />
                <p className="text-sm text-white">Victoria Island, Lagos</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div>
              <img src={imghouse} alt="" className="md:w-full h-96" />
            </div>

            <div className="bg-[#9a919142] w-full absolute bottom-2 p-4">
              <div>
                <h1 className="text-white font-bold">Semi Detached Duplex</h1>
                <p className="flex items-center text-white font-bold">
                  <TbCurrencyNaira /> 1,430,000,000
                </p>
              </div>
              <div className="flex gap-3 ">
                <p className="text-white text-sm">6 bed</p>
                <img src={shortline} alt="" />
                <p className="text-white text-sm">3 Bath</p>
                <img src={shortline} alt="" />
                <p className="text-white text-sm">720 sq ft</p>
              </div>
              <div className="flex gap-2 items-center text-white text-sm">
                <IoLocationOutline />
                <p>Victoria Island, Lagos</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div>
              <img src={imghouse} alt="" className="md:w-full h-96" />
            </div>

            <div className="bg-[#9a919142] w-full absolute bottom-2 p-4">
              <div>
                <h1 className="text-white font-bold">Semi Detached Duplex</h1>
                <p className="flex items-center text-white font-bold">
                  <TbCurrencyNaira /> 1,430,000,000
                </p>
              </div>
              <div className="flex gap-3 ">
                <p className="text-white text-sm">6 bed</p>
                <img src={shortline} alt="" />
                <p className="text-white text-sm">3 Bath</p>
                <img src={shortline} alt="" />
                <p className="text-white text-sm">720 sq ft</p>
              </div>
              <div className="flex gap-2 items-center text-white text-sm">
                <IoLocationOutline />
                <p>Victoria Island, Lagos</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div>
              <img src={imghouse} alt="" className="md:w-full h-96" />
            </div>
            <div>
              <img src={frameright} alt="" className="absolute  frameright " />
            </div>
            <div className="bg-[#9a919142] w-full absolute bottom-2 p-4">
              <div>
                <h1 className="font-bold text-white">Semi Detached Duplex</h1>
                <p className="flex items-center font-bold text-white">
                  <TbCurrencyNaira /> 1,430,000,000
                </p>
              </div>
              <div className="flex gap-3 ">
                <p className="text-sm text-white">6 bed</p>
                <img src={shortline} alt="" />
                <p className="text-sm text-white">3 Bath</p>
                <img src={shortline} alt="" />
                <p className="text-sm text-white">720 sq ft</p>
              </div>
              <div className="flex gap-2 items-center text-sm text-white">
                <IoLocationOutline />
                <p>Victoria Island, Lagos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discoversec