import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

const Emailverification = () => {
  return (
    <div className="p-12 pt-0 mt-2 grid gap-36 justify-center text-center justify-items-center">
      <Image
        src="/download-removebg-preview.png"
        alt=""
        width={128}
        height={64}
        className="w-32 h-16"
      />
      <div className="grid gap-4 w-fit">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-medium">Email Verification</h1>

          <p className="text-gray-500 w-[450px] text-sm">
            We've sent an verification to{" "}
            <a href="" className="text-gray-800 font-medium">
              chmahar335@gmallcom
            </a>{" "}
            to verify your email address and activate you account
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Verification Code"
              required
              className="border border-gray-400 rounded-md"
            />
          </div>
          <div className="grid gap-4 mt-6 text-center">
            <button
              type="submit"
              className="text-white w-full text-center justify-center flex items-center gap-3 p-3 px-6 rounded text-sm bg-[#0a65cc]"
            >
              Verify My Account <FaArrowRight />
            </button>
            <p className="text-gray-500 text-sm">
              Don't recieve any code!{" "}
              <a href="" className="text-blue-600 cursor-pointer font-medium">
                Resend
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emailverification;
