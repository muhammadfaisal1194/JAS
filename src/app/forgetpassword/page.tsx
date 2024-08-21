import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { IoBusiness } from "react-icons/io5";

const Forgetpassword = () => {
  return (
    <div className="flex items-start justify-between ms-4">
      <div className="p-12 pr-0 pt-0 pb-0 mt-2 grid gap-32">
        <Image
          src="/download-removebg-preview.png"
          alt=""
          width={128}
          height={64}
          className="w-32 h-16"
        />
        <div className="grid gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-medium">Forget Password</h1>
            <p className="text-gray-500">
              Go back to{" "}
              <a href="" className="text-blue-600 cursor-pointer font-medium">
                Sign In
              </a>
            </p>
            <p className="text-gray-500">
              Don&apos;t have account{" "}
              <a href="" className="text-blue-600 cursor-pointer font-medium">
                Create Account
              </a>
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-5">
              <input
                type="email"
                placeholder="example@gmail.com"
                className="text-sm border border-gray-400 rounded-md"
                required
              />
            </div>
            <div className="grid gap-4 mt-6 text-center">
              <button
                type="submit"
                className="text-white w-full text-center justify-center flex items-center gap-3 p-3 px-6 rounded text-sm bg-[#0a65cc]"
              >
                Reset Password <FaArrowRight />
              </button>
              <p>OR</p>
              <span className="flex items-center gap-4">
                <button className="flex items-center border gap-2 p-2 px-6 rounded text-sm bg-white">
                  <FaFacebookF className="text-[#0a65cc] text-lg" />
                  Sign up with Facebook
                </button>
                <button className="flex items-center border gap-2 p-2 px-6 rounded text-sm bg-white">
                  <FcGoogle className="text-lg" /> Sign up with Google
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          src="https://i0.wp.com/university.help.edu.my/wp-content/uploads/2023/11/HU-Prog-Biz-Entrepreneurship.jpg?fit=1024%2C733&ssl=1"
          alt=""
          width={700}
          height={800}
          className="h-[593px]"
        />
        <div className="absolute bottom-20 left-14 grid gap-6">
          <h1 className="text-4xl w-[490px] font-medium text-white">
            Over 1,75,324 candidates waiting for good employees.
          </h1>
          <div className="flex items-center gap-16">
            <div className="grid gap-3 items-center text-center justify-center justify-items-center">
              <span className="bg-white bg-opacity-25 w-fit rounded-md p-2 grid justify-center items-center">
                <MdOutlineBusinessCenter className="text-2xl text-white" />
              </span>
              <div className="text-[#c3c7ce] text-xs">
                <p className="text-white text-lg">38742</p>Live job
              </div>
            </div>
            <div className="grid gap-3 items-center text-center justify-center justify-items-center">
              <span className="bg-white bg-opacity-25 w-fit rounded-md p-2 grid justify-center items-center">
                <IoBusiness className="text-2xl text-white" />
              </span>
              <div className="text-[#c3c7ce] text-xs">
                <p className="text-white text-lg">1742</p>Companies
              </div>
            </div>
            <div className="grid gap-3 items-center text-center justify-center justify-items-center">
              <span className="bg-white bg-opacity-25 w-fit rounded-md p-2 grid justify-center items-center">
                <MdOutlineBusinessCenter className="text-2xl text-white" />
              </span>
              <div className="text-[#c3c7ce] text-xs">
                <p className="text-white text-lg">2942</p>Live job
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgetpassword;
