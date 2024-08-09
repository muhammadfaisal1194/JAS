"use client";
import Navbar from "@/components/nav-bar";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { GiSettingsKnobs } from "react-icons/gi";
import { FaArrowRight, FaLocationDot } from "react-icons/fa6";
import Pagination from "@mui/material/Pagination";
import Footer from "@/components/footer";
import { MdGpsFixed } from "react-icons/md";
import Image from "next/image";

const Service = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between px-10 p-4 bg-[#ececec]">
        <p className="text-lg font-medium cursor-pointer hover:text-blue-600">
          Find Service
        </p>
        <span className="flex gap-1">
          <p className="text-[#767F8C] text-sm cursor-pointer hover:text-blue-600">
            Home /
          </p>
          <p className="text-sm cursor-pointer hover:text-blue-600">
            Find Service
          </p>
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
          <div className="relative inline-block border">
            <button
              type="button"
              className="flex justify-between w-72 px-6 p-3 bg-white font-medium rounded-lg text-sm items-center"
            >
              <span className="flex items-center gap-3">
                <FaLocationDot className="text-lg" />
                Near You
              </span>
              <span className="relative">
                <MdGpsFixed className="absolute animate-ping text-lg text-blue-400 hover:text-blue-700" />
                <MdGpsFixed className=" relative text-lg text-blue-500 hover:text-blue-700" />
              </span>
            </button>
          </div>
          {/* Filters */}
          <div className="flex gap-4">
            <button className="flex items-center p-2 px-4 gap-2 bg-[#f6f6f6] w-28 rounded-md font-semibold hover:bg-white border hover:border-blue-600">
              <GiSettingsKnobs className="font-semibold" />
              Filters
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 w-32 p-2 px-4 rounded-md text-white font-semibold">
              Find Service
            </button>
          </div>
        </div>
        {/* Services */}
        <div className="grid gap-10">
          <div className="flex flex-col gap-8">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-medium">Most Popular Services</h1>
              <button className="flex items-center gap-2 border border-blue-200 p-1 px-3 text-[#0A65CC]">
                View All <FaArrowRight className="text-[#0A65CC]" />
              </button>
            </div>
            <div className="flex justify-between">
              <div className="p-4 text-center hover:bg-white shadow-sm border hover:shadow-lg w-fit">
                <Image
                  src="/pngtree-electric-service-cartoon-vector-equipment-and-electrician-engineer-tools-picture-image_7941933.png"
                  alt=""
                  className="w-40 h-40 hover:w-44 hover:h-44"
                />
                <p className="text-[#000000ba] font-medium">Electrician</p>
              </div>
              <div className="p-4 hover:bg-white shadow-sm border text-center hover:shadow-lg w-fit">
                <Image
                  src="/cropped-MrPlumber-Logo-removebg-preview.png"
                  alt=""
                  className="w-40 h-40 hover:w-44 hover:h-44"
                />
                <p className="text-[#000000ba] font-medium">Plumber</p>
              </div>
              <div className="p-4 hover:bg-white shadow-sm border text-center hover:shadow-lg w-fit">
                <Image
                  src="/olgas_01-removebg-preview.png"
                  alt=""
                  className="w-40 h-40 hover:w-44 hover:h-44"
                />
                <p className="text-[#000000ba] font-medium">Home Clean</p>
              </div>
              <div className="p-4 hover:bg-white shadow-sm border text-center hover:shadow-lg w-fit">
                <Image
                  src="/18532409-carpentry-construction-collage-tools-underneath-wooden-planks-removebg-preview.png"
                  alt=""
                  className="w-40 h-40 hover:w-44 hover:h-44"
                />
                <p className="text-[#000000ba] font-medium">Carpenters</p>
              </div>
              <div className="p-4 hover:bg-white shadow-sm border text-center hover:shadow-lg w-fit">
                <Image
                  src="/Appliances-Repair-Service_2_11zon-removebg-preview.png"
                  alt=""
                  className="w-40 h-40 hover:w-44 hover:h-44"
                />
                <p className="text-[#000000ba] font-medium">Home appliances</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex justify-between">
              <div className="p-4 text-center hover:bg-white shadow-sm border hover:shadow-lg ">
                <Image
                  src="https://assignmentpoint.com/wp-content/uploads/2013/09/Internet-Service.jpg"
                  alt=""
                  className="w-40 h-40 hover:w-44 hover:h-44"
                />
                <p className="text-[#000000ba] font-medium">
                  Internet Providers
                </p>
              </div>
              <div className="p-4 hover:bg-white shadow-sm border text-center hover:shadow-lg w-fit">
                <Image
                  src="/auto-service-logo-car-repair-icon-vector-22266860-removebg-preview.png"
                  alt=""
                  className="w-40 h-40 hover:w-44 hover:h-44"
                />
                <p className="text-[#000000ba] font-medium">Car Service</p>
              </div>
              <div className="p-4 hover:bg-white shadow-sm border text-center hover:shadow-lg w-fit">
                <Image
                  src="/360_F_279426500_flTlayq22Q0SRgUqfLRV1DJRiFvGanq5.jpg"
                  alt=""
                  className="w-40 h-40 hover:w-44 hover:h-44"
                />
                <p className="text-[#000000ba] font-medium">Computer Repair</p>
              </div>
              <div className="p-4 hover:bg-white shadow-sm border text-center hover:shadow-lg w-fit">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRgPFaYwH2TW_bzLx3Ya85hv36b2tgCGc4BhakpRO-6ZryFk64DyzyoVuTkDpYiX_rsJY&usqp=CAU"
                  alt=""
                  className="w-40 h-40 hover:w-44 hover:h-44"
                />
                <p className="text-[#000000ba] font-medium">Home Painter</p>
              </div>
              <div className="p-4 hover:bg-white shadow-sm border text-center hover:shadow-lg w-fit">
                <Image
                  src="https://www.kmr-gc.com/wp-content/uploads/2020/03/remodeling-contractor-kmr.jpg"
                  alt=""
                  className="w-40 h-40 hover:w-44 hover:h-44"
                />
                <p className="text-[#000000ba] font-medium">Home Builder</p>
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

export default Service;
