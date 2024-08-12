import "../styles/signin.css";
// import { BiSolidCheckboxChecked } from "react-icons/bi";
import orimg from "../assets/orimg.png";
import { FcGoogle } from "react-icons/fc";
import greencheck from "../assets/greencheck.png";

const SignIn = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className=" w-full md:w-1/2 ">
        <div>
          <div className="flex w-11/12 mx-auto flex-col justify-center items-center gap-2">
            <div>
              <div className="flex flex-col  gap-4">
                <h2 className="text-4xl font-semibold">
                  Welcome back to BetaHouse!
                </h2>
                <p className=" text-sm font-semibold">
                  Lets get started by filling out the information below{" "}
                </p>
              </div>
              <form className=" w-full">
                <div className="flex flex-col my-4">
                  <div>
                    <label
                      form=""
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      id=""
                      type="text"
                      className="mt-1 block w-full  p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Enter your Email"
                    ></input>
                  </div>
                </div>
                <div className="flex flex-col  mb-4">
                  <div>
                    <label
                      form=""
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <input
                      id=""
                      type="text"
                      className="mt-1 block w-full   p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Enter your password"
                    ></input>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex my-2 gap-2 items-center">
                    <img src={greencheck} alt="" />
                    <p className="text-sm">Remember me</p>
                  </div>
                  <p className="text-sm text-red-600">Forgot Password</p>
                </div>

                <div className="mb-4">
                  <button
                    type="submit"
                    className="w-full text-white p-2 rounded-xl shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 bg-[#3D9970] 
"
                  >
                    Sign up
                  </button>

                  <img src={orimg} alt="" className="p-2" />

                  <button
                    type="submit"
                    className="w-full text-white p-2 rounded-xl shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 bg-[#3D9970] flex justify-center"
                  >
                    <div className="flex items-center gap-2">
                      <FcGoogle />
                      Continue with Google
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bagimg w-1/2 hidden  md:block">
        <div className="flex gap-2 items-center p-4">
          <div className="bg-[#3D9970] p-4 rounded-full text-white font-bold text-2xl">
            <h1>BH</h1>
          </div>
          <h1 className="text-2xl font-bold text-white">Beta House</h1>
        </div>
      </div>
     
    </div>
  );
};

export default SignIn;
