import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

const Resetpassword = () => {
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
          <h1 className="text-2xl font-medium">Reset Password</h1>

          <p className="text-gray-500 w-[450px] text-sm">
            Duis luctus interdum metus, ut consectetur ante consectetur sed.
            Suspendisse euismod viverra massa sit amet mollis.
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-5">
            <input
              type="Password"
              placeholder="Password"
              className="text-sm border border-gray-400 rounded-md"
              required
            />
            <input
              type="Password"
              placeholder="Confirm Password"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resetpassword;
