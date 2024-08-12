import "../styles/signp.css";
import orimg from "../assets/orimg.png";
import { FcGoogle } from "react-icons/fc";
import greencheck from "../assets/greencheck.png";

const SignUp = () => {
  return (
    <div className="block xl:grid grid-cols-2 items-center w-full h-dvh overflow-y-hidden">
      <div className="w-[90%] md:w-[70%] xl:w-[80%] mx-auto py-5 xl:py-10 h-full overflow-y-scroll hide-scrollbar">
      <form>
        <div className="flex flex-col  gap-4">
          <h2 className="font-semibold">
            Join our community of home seekers and explore the possibilities
            that await.
          </h2>
          <p className=" text-sm font-semibold">
            Lets get started by filling out the information below{" "}
          </p>
        </div>

        <div className="flex w-full flex-col space-x-10 lg:flex-row  py-3 ">
          <div className="flex flex-col space-y-1 w-full">
            <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter Name"
            ></input>
          </div>
          <div className="flex flex-col space-y-1 w-full">
            <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter Name"
            ></input>
          </div>
        </div>

        <div className="flex flex-col pb-3">
          <div>
            <label form="" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id=""
              type="text"
              className="mt-1 block w-full   p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your Email"
            ></input>
          </div>
        </div>
        <div className="flex flex-col  pb-3">
          <div>
            <label form="" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id=""
              type="text"
              className="mt-1 block w-full   p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your Password"
            ></input>
          </div>
        </div>
        <div className="flex flex-col  pb-3">
          <div>
            <label form="" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id=""
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Confirm your password"
            ></input>
          </div>
        </div>
        <div className="flex my-2 gap-2 items-center">
          <img src={greencheck} alt="" className="h-5 items-center" />
          <p className="text-sm">
            I accept the{" "}
            <span className="text-[#3D9970]">Terms of Service</span> and{" "}
            <span className="text-[#3D9970]">Privacy Policies</span>
          </p>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full text-white p-2 rounded-xl shadow-sm hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 bg-[#3D9970]"
          >
            Sign up
          </button>

        <div className="flex justify-center w-full">
        <img src={orimg} alt="" className="py-3" />

        </div>

          <button
            type="submit"
            className="w-full text-black p-2 rounded-xl shadow-sm hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border-2 border-gray-500 flex justify-center"
          >
            <div className="flex items-center gap-2">
              <FcGoogle />
              Continue with Google
            </div>
          </button>
        </div>
        <div>
          <p className="text-center mb-5">
            Already have an account?
            <span className="text-[#3D9970]"> Sign in</span>
          </p>
        </div>
      </form>
      </div>

      <div className="bagimg w-full hidden h-full lg:block">
        <div className="flex gap-2 items-center p-3">
          <div className="bg-[#3D9970] p-4 rounded-full text-white font-bold text-xl">
            <h1>BH</h1>
          </div>
          <h1 className="text-2xl font-bold text-white">BetaHouse</h1>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
