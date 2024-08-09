import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex bg-[#f6f6f6] justify-between items-center pt-6 pb-10 px-10 ">
      <div>
        <Image
          src="/download-removebg-preview.png"
          alt=""
          className="w-32 h-16"
        />
      </div>
      <div>
        <ul className="list-none flex gap-10 items-center font-medium">
          <li className="hover:text-blue-600">Home</li>
          <li className="hover:text-blue-600">Jobs</li>
          <li className="hover:text-blue-600">Service</li>
          <li className="hover:text-blue-600">Contact Us</li>
          <li className="hover:text-blue-600">Blog</li>
          <li className="hover:text-blue-600">About Us</li>
        </ul>
      </div>
      <div className="flex bg-white gap-2 rounded-xl items-center px-2 p-1">
        <IoSearch />
        <input
          type="search"
          className="p-2 bg-white outline-none border-none"
          placeholder="search"
        />
      </div>
      <div>
        <button className="p-2 px-4 bg-white text-sm rounded-md font-medium hover:text-blue-600">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
