// import React from 'react'
import { RiEqualizer3Line } from "react-icons/ri";
// import { RiArrowDropDownLine } from "react-icons/ri";
import dropdownblack from "../assets/dropdownblack.png";
import cdimage from "../assets/cdimage.png";
import { FaLocationDot } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { TbCurrencyNaira } from "react-icons/tb";
import { CiShare2 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
// import { IoIosLink } from "react-icons/io";
// import { FaVideo } from "react-icons/fa";
// import { MdInsertPhoto } from "react-icons/md";
import { MdOutlineCompareArrows } from "react-icons/md";
import linkimage from "../assets/linkimage.png";
import photoimg from "../assets/photoimg.png";
import videoimg from "../assets/videoimg.png";

const CardPage = () => {
  return (
    <div>
      {/* the heading of the card section */}
      <div className="flex justify-between p-4">
        <div className="flex gap-3">
          <div className="flex items-center gap-2">
            <RiEqualizer3Line />
            <p className="font-semibold">More Filter</p>
          </div>
          <div className="mt-1/2">
            <p className="font-semibold">Showing 1-10 of 15</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <p>Sort by:</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-semibold">Default </p>
            <img src={dropdownblack} alt="" />
          </div>
        </div>
      </div>

      {/* card section */}
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col  m-5 ">
          <div className="relative">
            <img
              src={cdimage}
              alt=""
              className="rounded-t-md w-full relative object-cover"
            />
            <div className="absolute inset-0 px-5 py-8 mx-auto h-full flex flex-col justify-between">
              <div className="flex justify-between w-full">
                <button className="bg-[#3D9970] rounded-md text-white p-1 w-20">
                  Featured
                </button>
                <button className="bg-slate-300 rounded-md text-white p-2 w-20">
                  For Sale
                </button>
              </div>
              <div className="flex space-x-3 justify-end">
                <img src={linkimage} alt="" />
                <img src={videoimg} alt="" />
                <img src={photoimg} alt="" />
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-3 p-4 border rounded-b-md  ">
            <h1 className="text-[#444444] font-semibold text-lg">
              {" "}
              Real House Luxury Villa
            </h1>
            <div className="flex items-center gap-2">
              <FaLocationDot />
              <p className="text-[#444444] text-sm">Victoria Island, Lagos</p>
            </div>
            <div className="flex gap-7">
              <div className="flex gap-2 items-center">
                <IoBedOutline />
                <p className="text-[#444444] text-sm">6 Bedrooms</p>
              </div>
              <div className="flex gap-2 items-center">
                <LiaBathSolid />
                <p className="text-[#444444] text-sm">3 Bathrooms</p>
              </div>
            </div>
            <hr />
            <div className=" flex justify-between">
              <div className="flex items-center">
                <TbCurrencyNaira />
                <p className="font-bold">3,340,000,000</p>
              </div>
              <div className="flex gap-9">
                <MdOutlineCompareArrows />
                <CiShare2 />
                <CiHeart />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  m-5 ">
          <div className="relative">
            <img
              src={cdimage}
              alt=""
              className="rounded-t-md w-full relative object-cover"
            />
            <div className="absolute inset-0 px-5 py-8 mx-auto h-full flex flex-col justify-between">
              <div className="flex justify-between w-full">
                <button className="bg-[#3D9970] rounded-md text-white p-1 w-20">
                  Featured
                </button>
                <button className="bg-slate-300 rounded-md text-white p-2 w-20">
                  For Sale
                </button>
              </div>
              <div className="flex space-x-3 justify-end">
                <img src={linkimage} alt="" />
                <img src={videoimg} alt="" />
                <img src={photoimg} alt="" />
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-3 p-4 border rounded-b-md  ">
            <h1 className="text-[#444444] font-semibold text-lg">
              {" "}
              Equisite Haven Villa
            </h1>
            <div className="flex items-center gap-2">
              <FaLocationDot />
              <p className="text-[#444444] text-sm">Festac, Lagos</p>
            </div>
            <div className="flex gap-7">
              <div className="flex gap-2 items-center">
                <IoBedOutline />
                <p className="text-[#444444] text-sm">5 Bedrooms</p>
              </div>
              <div className="flex gap-2 items-center">
                <LiaBathSolid />
                <p className="text-[#444444] text-sm">3 Bathrooms</p>
              </div>
            </div>
            <hr />
            <div className=" flex justify-between">
              <div className="flex items-center">
                <TbCurrencyNaira />
                <p className="font-bold">3,340,000,000</p>
              </div>
              <div className="flex gap-9">
                <MdOutlineCompareArrows />
                <CiShare2 />
                <CiHeart />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  m-5 ">
          <div className="relative">
            <img
              src={cdimage}
              alt=""
              className="rounded-t-md w-full relative object-cover"
            />
            <div className="absolute inset-0 px-5 py-8 mx-auto h-full flex flex-col justify-between">
              <div className="flex justify-between w-full">
                <button className="bg-[#3D9970] rounded-md text-white p-1 w-20">
                  Featured
                </button>
                <button className="bg-slate-300 rounded-md text-white p-2 w-20">
                  For Sale
                </button>
              </div>
              <div className="flex space-x-3 justify-end">
                <img src={linkimage} alt="" />
                <img src={videoimg} alt="" />
                <img src={photoimg} alt="" />
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-3 p-4 border rounded-b-md  ">
            <h1 className="text-[#444444] font-semibold text-lg">
              {" "}
              Luxe Palatial Villa
            </h1>
            <div className="flex items-center gap-2">
              <FaLocationDot />
              <p className="text-[#444444] text-sm">Gbagagda, Lagos</p>
            </div>
            <div className="flex gap-7">
              <div className="flex gap-2 items-center">
                <IoBedOutline />
                <p className="text-[#444444] text-sm">7 Bedrooms</p>
              </div>
              <div className="flex gap-2 items-center">
                <LiaBathSolid />
                <p className="text-[#444444] text-sm">3 Bathrooms</p>
              </div>
            </div>
            <hr />
            <div className=" flex justify-between">
              <div className="flex items-center">
                <TbCurrencyNaira />
                <p className="font-bold">3,340,000,000</p>
              </div>
              <div className="flex gap-9">
                <MdOutlineCompareArrows />
                <CiShare2 />
                <CiHeart />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col  m-5 ">
          <div className="relative">
            <img
              src={cdimage}
              alt=""
              className="rounded-t-md w-full relative object-cover"
            />
            <div className="absolute inset-0 px-5 py-8 mx-auto h-full flex flex-col justify-between">
              <div className="flex justify-between w-full">
                <button className="bg-[#3D9970] rounded-md text-white p-1 w-20">
                  Featured
                </button>
                <button className="bg-slate-300 rounded-md text-white p-2 w-20">
                  For Sale
                </button>
              </div>
              <div className="flex space-x-3 justify-end">
                <img src={linkimage} alt="" />
                <img src={videoimg} alt="" />
                <img src={photoimg} alt="" />
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-3 p-4 border rounded-b-md  ">
            <h1 className="text-[#444444] font-semibold text-lg">
              {" "}
              Harmony Luxury Villa
            </h1>
            <div className="flex items-center gap-2">
              <FaLocationDot />
              <p className="text-[#444444] text-sm">Mushin, Lagos</p>
            </div>
            <div className="flex gap-7">
              <div className="flex gap-2 items-center">
                <IoBedOutline />
                <p className="text-[#444444] text-sm">4 Bedrooms</p>
              </div>
              <div className="flex gap-2 items-center">
                <LiaBathSolid />
                <p className="text-[#444444] text-sm">3 Bathrooms</p>
              </div>
            </div>
            <hr />
            <div className=" flex justify-between">
              <div className="flex items-center">
                <TbCurrencyNaira />
                <p className="font-bold">4,000,000,000</p>
              </div>
              <div className="flex gap-9">
                <MdOutlineCompareArrows />
                <CiShare2 />
                <CiHeart />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  m-5 ">
          <div className="relative">
            <img
              src={cdimage}
              alt=""
              className="rounded-t-md w-full relative object-cover"
            />
            <div className="absolute inset-0 px-5 py-8 mx-auto h-full flex flex-col justify-between">
              <div className="flex justify-between w-full">
                <button className="bg-[#3D9970] rounded-md text-white p-1 w-20">
                  Featured
                </button>
                <button className="bg-slate-300 rounded-md text-white p-2 w-20">
                  For Sale
                </button>
              </div>
              <div className="flex space-x-3 justify-end">
                <img src={linkimage} alt="" />
                <img src={videoimg} alt="" />
                <img src={photoimg} alt="" />
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-3 p-4 border rounded-b-md  ">
            <h1 className="text-[#444444] font-semibold text-lg">
              {" "}
              Real House Luxury Villa
            </h1>
            <div className="flex items-center gap-2">
              <FaLocationDot />
              <p className="text-[#444444] text-sm">Victoria Island, Lagos</p>
            </div>
            <div className="flex gap-7">
              <div className="flex gap-2 items-center">
                <IoBedOutline />
                <p className="text-[#444444] text-sm">6 Bedrooms</p>
              </div>
              <div className="flex gap-2 items-center">
                <LiaBathSolid />
                <p className="text-[#444444] text-sm">3 Bathrooms</p>
              </div>
            </div>
            <hr />
            <div className=" flex justify-between">
              <div className="flex items-center">
                <TbCurrencyNaira />
                <p className="font-bold">3,340,000,000</p>
              </div>
              <div className="flex gap-9">
                <MdOutlineCompareArrows />
                <CiShare2 />
                <CiHeart />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  m-5 ">
          <div className="relative">
            <img
              src={cdimage}
              alt=""
              className="rounded-t-md w-full relative object-cover"
            />
            <div className="absolute inset-0 px-5 py-8 mx-auto h-full flex flex-col justify-between">
              <div className="flex justify-between w-full">
                <button className="bg-[#3D9970] rounded-md text-white p-1 w-20">
                  Featured
                </button>
                <button className="bg-slate-300 rounded-md text-white p-2 w-20">
                  For Sale
                </button>
              </div>
              <div className="flex space-x-3 justify-end">
                <img src={linkimage} alt="" />
                <img src={videoimg} alt="" />
                <img src={photoimg} alt="" />
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-3 p-4 border rounded-b-md  ">
            <h1 className="text-[#444444] font-semibold text-lg">
              {" "}
              Real House Luxury Villa
            </h1>
            <div className="flex items-center gap-2">
              <FaLocationDot />
              <p className="text-[#444444] text-sm">Lekki-Ajah, Lagos</p>
            </div>
            <div className="flex gap-7">
              <div className="flex gap-2 items-center">
                <IoBedOutline />
                <p className="text-[#444444] text-sm">6 Bedrooms</p>
              </div>
              <div className="flex gap-2 items-center">
                <LiaBathSolid />
                <p className="text-[#444444] text-sm">3 Bathrooms</p>
              </div>
            </div>
            <hr />
            <div className=" flex justify-between">
              <div className="flex items-center">
                <TbCurrencyNaira />
                <p className="font-bold">4,340,000,000</p>
              </div>
              <div className="flex gap-9">
                <MdOutlineCompareArrows />
                <CiShare2 />
                <CiHeart />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col  m-5 ">
          <div className="relative">
            <img
              src={cdimage}
              alt=""
              className="rounded-t-md w-full relative object-cover"
            />
            <div className="absolute inset-0 px-5 py-8 mx-auto h-full flex flex-col justify-between">
              <div className="flex justify-between w-full">
                <button className="bg-[#3D9970] rounded-md text-white p-1 w-20">
                  Featured
                </button>
                <button className="bg-slate-300 rounded-md text-white p-2 w-20">
                  For Sale
                </button>
              </div>
              <div className="flex space-x-3 justify-end">
                <img src={linkimage} alt="" />
                <img src={videoimg} alt="" />
                <img src={photoimg} alt="" />
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-3 p-4 border rounded-b-md  ">
            <h1 className="text-[#444444] font-semibold text-lg">
              {" "}
              Infinite Bliss Villa
            </h1>
            <div className="flex items-center gap-2">
              <FaLocationDot />
              <p className="text-[#444444] text-sm">Ishiagu, Enugu</p>
            </div>
            <div className="flex gap-7">
              <div className="flex gap-2 items-center">
                <IoBedOutline />
                <p className="text-[#444444] text-sm">6 Bedrooms</p>
              </div>
              <div className="flex gap-2 items-center">
                <LiaBathSolid />
                <p className="text-[#444444] text-sm">3 Bathrooms</p>
              </div>
            </div>
            <hr />
            <div className=" flex justify-between">
              <div className="flex items-center">
                <TbCurrencyNaira />
                <p className="font-bold">3,340,000,000</p>
              </div>
              <div className="flex gap-9">
                <MdOutlineCompareArrows />
                <CiShare2 />
                <CiHeart />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  m-5 ">
          <div className="relative">
            <img
              src={cdimage}
              alt=""
              className="rounded-t-md w-full relative object-cover"
            />
            <div className="absolute inset-0 px-5 py-8 mx-auto h-full flex flex-col justify-between">
              <div className="flex justify-between w-full">
                <button className="bg-[#3D9970] rounded-md text-white p-1 w-20">
                  Featured
                </button>
                <button className="bg-slate-300 rounded-md text-white p-2 w-20">
                  For Sale
                </button>
              </div>
              <div className="flex space-x-3 justify-end">
                <img src={linkimage} alt="" />
                <img src={videoimg} alt="" />
                <img src={photoimg} alt="" />
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-3 p-4 border rounded-b-md  ">
            <h1 className="text-[#444444] font-semibold text-lg">
              {" "}
              Real House Luxury Villa
            </h1>
            <div className="flex items-center gap-2">
              <FaLocationDot />
              <p className="text-[#444444] text-sm">Works Layout, Owerri</p>
            </div>
            <div className="flex gap-7">
              <div className="flex gap-2 items-center">
                <IoBedOutline />
                <p className="text-[#444444] text-sm">6 Bedrooms</p>
              </div>
              <div className="flex gap-2 items-center">
                <LiaBathSolid />
                <p className="text-[#444444] text-sm">3 Bathrooms</p>
              </div>
            </div>
            <hr />
            <div className=" flex justify-between">
              <div className="flex items-center">
                <TbCurrencyNaira />
                <p className="font-bold">3,340,000,000</p>
              </div>
              <div className="flex gap-9">
                <MdOutlineCompareArrows />
                <CiShare2 />
                <CiHeart />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  m-5 ">
          <div className="relative">
            <img
              src={cdimage}
              alt=""
              className="rounded-t-md w-full relative object-cover"
            />
            <div className="absolute inset-0 px-5 py-8 mx-auto h-full flex flex-col justify-between">
              <div className="flex justify-between w-full">
                <button className="bg-[#3D9970] rounded-md text-white p-1 w-20">
                  Featured
                </button>
                <button className="bg-slate-300 rounded-md text-white p-2 w-20">
                  For Sale
                </button>
              </div>
              <div className="flex space-x-3 justify-end">
                <img src={linkimage} alt="" />
                <img src={videoimg} alt="" />
                <img src={photoimg} alt="" />
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-3 p-4 border rounded-b-md  ">
            <h1 className="text-[#444444] font-semibold text-lg">
              {" "}
              Real House Luxury Villa
            </h1>
            <div className="flex items-center gap-2">
              <FaLocationDot />
              <p className="text-[#444444] text-sm">Ikeja, Lagos</p>
            </div>
            <div className="flex gap-7">
              <div className="flex gap-2 items-center">
                <IoBedOutline />
                <p className="text-[#444444] text-sm">6 Bedrooms</p>
              </div>
              <div className="flex gap-2 items-center">
                <LiaBathSolid />
                <p className="text-[#444444] text-sm">3 Bathrooms</p>
              </div>
            </div>
            <hr />
            <div className=" flex justify-between">
              <div className="flex items-center">
                <TbCurrencyNaira />
                <p className="font-bold">3,340,000,000</p>
              </div>
              <div className="flex gap-9">
                <MdOutlineCompareArrows />
                <CiShare2 />
                <CiHeart />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default CardPage;
