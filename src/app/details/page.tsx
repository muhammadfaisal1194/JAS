"use client";
import Navbar from "@/components/nav-bar";
import React, { useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import cities from "./../../data/cities.json";
import { GiSettingsKnobs } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import Pagination from "@mui/material/Pagination";
import Footer from "@/components/footer";
import Image from "next/image";

const Page = () => {
  const catMenu = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const closeOpenMenus = (e: MouseEvent) => {
    if (
      isOpen &&
      catMenu.current &&
      !catMenu.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus);
    return () => {
      document.removeEventListener("mousedown", closeOpenMenus);
    };
  }, [isOpen]);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-between px-10 p-4 bg-[#ececec]">
        <p className="text-lg font-medium cursor-pointer hover:text-blue-600">
          Find jobs
        </p>
        <span className="flex gap-1">
          <p className="text-[#767F8C] text-sm cursor-pointer hover:text-blue-600">
            Home /
          </p>
          <p className="text-sm cursor-pointer hover:text-blue-600">Find Job</p>
        </span>
      </div>
      <div className="flex flex-col gap-16 px-10 bg-white p-4">
        <div className="flex items-center rounded-xl p-2 gap-3 shadow-md">
          {/* search */}
          <div className="flex border w-full bg-white gap-2 rounded-xl items-center px-2 p-1">
            <IoSearch />
            <input
              type="text"
              className="p-2 w-full border-none"
              placeholder="search"
            />
          </div>
          {/* city */}
          <div ref={catMenu} className="relative inline-block border">
            <button
              type="button"
              className="gap-4 w-72 px-6 p-3 bg-white font-medium rounded-lg text-sm inline-flex items-center"
              onClick={toggleDropdown}
            >
              <FaLocationDot />
              City
            </button>

            {isOpen && (
              <div className="absolute left-0 mt-2 h-96 w-72 overflow-y-auto  rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="fixed z-10 bg-white h-20">
                  <div className="flex m-4 bg-white gap-2  rounded-xl border items-center px-2 p-1">
                    <IoSearch />
                    <input
                      type="search"
                      className="p-2 bg-white focus:outline-none rounded-xl border-none"
                      placeholder="search"
                    />
                  </div>
                </div>
                <ul className="relative p-4 w-full">
                  <div className="mt-14">
                    {cities.map((city) => (
                      <li className="p-2 hover:bg-gray-100">{city.name}</li>
                    ))}
                  </div>
                </ul>
              </div>
            )}
          </div>
          {/* Filters */}
          <div className="flex gap-4">
            <button className="flex items-center p-2 px-4 gap-2 bg-[#f6f6f6] w-28 rounded-md font-semibold hover:bg-white border hover:border-blue-600">
              <GiSettingsKnobs className="font-semibold" />
              Filters
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 w-28 p-2 px-4 rounded-md text-white font-semibold">
              Find Job
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex justify-between">
            <div className="border shadow-sm p-8 h-fit grid gap-2">
              <h1 className="text-2xl font-medium text-[#18191C]">
                Techical Support Specialist
              </h1>
              <div className="flex items-center gap-6">
                <span className="text-sm text-[#0BA02C] bg-[#E7F6EA] p-1">
                  Part-time
                </span>
                <p className="text-sm text-[#767F8C]">
                  Salary: $20,000 - $25,000
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/download-removebg-preview.png"
                  alt=""
                  className="w-14 h-14 rounded-full border"
                />
                <div>
                  <h1 className="text-xl font-medium text-[#18191C]">JAS</h1>
                  <span>
                    <p className="text-sm text-[#767F8C]">Dhaka, Bangladesh</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="border shadow-sm p-8 h-fit grid gap-2">
              <h1 className="text-2xl font-medium text-[#18191C]">
                Techical Support Specialist
              </h1>
              <div className="flex items-center gap-6">
                <span className="text-sm text-[#0BA02C] bg-[#E7F6EA] p-1">
                  Part-time
                </span>
                <p className="text-sm text-[#767F8C]">
                  Salary: $20,000 - $25,000
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/download-removebg-preview.png"
                  alt=""
                  className="w-14 h-14 rounded-full border"
                />
                <div>
                  <h1 className="text-xl font-medium text-[#18191C]">JAS</h1>
                  <span>
                    <p className="text-sm text-[#767F8C]">Dhaka, Bangladesh</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="border shadow-sm p-8 h-fit grid gap-2">
              <h1 className="text-2xl font-medium text-[#18191C]">
                Techical Support Specialist
              </h1>
              <div className="flex items-center gap-6">
                <span className="text-sm text-[#0BA02C] bg-[#E7F6EA] p-1">
                  Part-time
                </span>
                <p className="text-sm text-[#767F8C]">
                  Salary: $20,000 - $25,000
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/download-removebg-preview.png"
                  alt=""
                  className="w-14 h-14 rounded-full border"
                />
                <div>
                  <h1 className="text-xl font-medium text-[#18191C]">JAS</h1>
                  <span>
                    <p className="text-sm text-[#767F8C]">Dhaka, Bangladesh</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="border shadow-sm p-8 h-fit grid gap-2">
              <h1 className="text-2xl font-medium text-[#18191C]">
                Techical Support Specialist
              </h1>
              <div className="flex items-center gap-6">
                <span className="text-sm text-[#0BA02C] bg-[#E7F6EA] p-1">
                  Part-time
                </span>
                <p className="text-sm text-[#767F8C]">
                  Salary: $20,000 - $25,000
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/download-removebg-preview.png"
                  alt=""
                  className="w-14 h-14 rounded-full border"
                />
                <div>
                  <h1 className="text-xl font-medium text-[#18191C]">JAS</h1>
                  <span>
                    <p className="text-sm text-[#767F8C]">Dhaka, Bangladesh</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="border shadow-sm p-8 h-fit grid gap-2">
              <h1 className="text-2xl font-medium text-[#18191C]">
                Techical Support Specialist
              </h1>
              <div className="flex items-center gap-6">
                <span className="text-sm text-[#0BA02C] bg-[#E7F6EA] p-1">
                  Part-time
                </span>
                <p className="text-sm text-[#767F8C]">
                  Salary: $20,000 - $25,000
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/download-removebg-preview.png"
                  alt=""
                  className="w-14 h-14 rounded-full border"
                />
                <div>
                  <h1 className="text-xl font-medium text-[#18191C]">JAS</h1>
                  <span>
                    <p className="text-sm text-[#767F8C]">Dhaka, Bangladesh</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="border shadow-sm p-8 h-fit grid gap-2">
              <h1 className="text-2xl font-medium text-[#18191C]">
                Techical Support Specialist
              </h1>
              <div className="flex items-center gap-6">
                <span className="text-sm text-[#0BA02C] bg-[#E7F6EA] p-1">
                  Part-time
                </span>
                <p className="text-sm text-[#767F8C]">
                  Salary: $20,000 - $25,000
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/download-removebg-preview.png"
                  alt=""
                  className="w-14 h-14 rounded-full border"
                />
                <div>
                  <h1 className="text-xl font-medium text-[#18191C]">JAS</h1>
                  <span>
                    <p className="text-sm text-[#767F8C]">Dhaka, Bangladesh</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-6">
          <Pagination count={10} color="primary" />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Page;
