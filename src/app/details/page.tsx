"use client";
import Navbar from "@/components/nav-bar";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { GiSettingsKnobs } from "react-icons/gi";
import Pagination from "@mui/material/Pagination";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import Citydropdown from "@/components/dropdowns/citydropdown";
const Page = () => {
  const [cities, setCities] = React.useState(false);

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
          <div className="w-[500px]">
            <Citydropdown cities={cities} setCities={setCities} />
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
            <Link href="/jobdetails">
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
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full border"
                  />
                  <div>
                    <h1 className="text-xl font-medium text-[#18191C]">JAS</h1>
                    <span>
                      <p className="text-sm text-[#767F8C]">
                        Dhaka, Bangladesh
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/jobdetails">
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
                    width={56}
                    height={56}
                    alt=""
                    className="w-14 h-14 rounded-full border"
                  />
                  <div>
                    <h1 className="text-xl font-medium text-[#18191C]">JAS</h1>
                    <span>
                      <p className="text-sm text-[#767F8C]">
                        Dhaka, Bangladesh
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/jobdetails">
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
                    width={56}
                    height={56}
                    alt=""
                    className="w-14 h-14 rounded-full border"
                  />
                  <div>
                    <h1 className="text-xl font-medium text-[#18191C]">JAS</h1>
                    <span>
                      <p className="text-sm text-[#767F8C]">
                        Dhaka, Bangladesh
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex justify-between">
            <Link href="/jobdetails">
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
                    width={56}
                    height={56}
                    alt=""
                    className="w-14 h-14 rounded-full border"
                  />
                  <div>
                    <h1 className="text-xl font-medium text-[#18191C]">JAS</h1>
                    <span>
                      <p className="text-sm text-[#767F8C]">
                        Dhaka, Bangladesh
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/jobdetails">
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
                    width={56}
                    height={56}
                    alt=""
                    className="w-14 h-14 rounded-full border"
                  />
                  <div>
                    <h1 className="text-xl font-medium text-[#18191C]">JAS</h1>
                    <span>
                      <p className="text-sm text-[#767F8C]">
                        Dhaka, Bangladesh
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/jobdetails">
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
                    width={56}
                    height={56}
                    alt=""
                    className="w-14 h-14 rounded-full border"
                  />
                  <div>
                    <h1 className="text-xl font-medium text-[#18191C]">JAS</h1>
                    <span>
                      <p className="text-sm text-[#767F8C]">
                        Dhaka, Bangladesh
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
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
