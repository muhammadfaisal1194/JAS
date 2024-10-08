"use client";
import Navbar from "@/components/nav-bar";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { MdGpsFixed } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Footer from "@/components/footer";
import Pagination from "@mui/material/Pagination";
import { MdVerified } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Employesprofileforjob = () => {
  const [value, setValue] = useState<number | undefined>(undefined);

  function valueText(value: number): string {
    setValue(value);
    return `${value}m`;
  }
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
            <button className="bg-blue-600 hover:bg-blue-700 w-36 p-2 px-4 rounded-md text-white font-semibold">
              Find Service
            </button>
          </div>
        </div>
        <div className="flex items-start gap-16">
          <div>
            <div className="border-2 border-gray-100 p-6">
              <span className="flex items-center gap-2">
                <h1 className="text-xl font-medium text-gray-950">
                  location radius:
                </h1>
                <p className="text-lg font-medium text-blue-600">
                  {value} miles
                </p>
              </span>
              <Box sx={{ width: 300 }}>
                <Slider
                  defaultValue={20}
                  getAriaValueText={valueText}
                  valueLabelDisplay="auto"
                  shiftStep={30}
                  step={10}
                  marks
                  min={10}
                  max={100}
                />
              </Box>
            </div>
            <div className="border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27809.00868470641!2d71.75316579999999!3d29.3958674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1722706453979!5m2!1sen!2s"
                width="350"
                height="350"
              ></iframe>
            </div>
          </div>
          <div className="w-full flex flex-col gap-6">
            <div className="border shadow hover:shadow-lg hover:bg-white p-8 h-fit grid gap-2">
              <Link href="/profile">
                <div className="flex items-center gap-4">
                  <div className="w-16 border h-[58px] overflow-hidden rounded-full">
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhDxnfZflJaHkVOTqmNIm4w1IQv6nkg8svSQ&s"
                      alt=""
                      width={80}
                      height={80}
                      className="h-full w-full rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex justify-between items-center">
                      <h1 className="flex items-center gap-2 text-xl font-medium text-[#18191C]">
                        Marketing Officer
                        <MdVerified />
                      </h1>
                      <FaRegBookmark className="text-xl" />
                    </div>
                    <p className="text-sm text-[#767F8C]">Cody Fisher</p>
                    <span className="flex items-center gap-4">
                      <p className="flex items-center gap-1 text-sm text-[#767F8C]">
                        <FaLocationDot className="text-blue-600" />
                        Bahawalpur
                      </p>
                      <p className="flex items-center gap-1 text-sm text-[#767F8C]">
                        <GrUserExpert className="text-blue-600" /> 3 year
                      </p>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="border shadow hover:shadow-lg hover:bg-white p-8 h-fit grid gap-2">
              <Link href="/profile">
                <div className="flex items-center gap-4">
                  <div className="w-16 border h-[58px] overflow-hidden rounded-full">
                    <Image
                      src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                      alt=""
                      width={64}
                      height={64}
                      className="h-full w-full rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex justify-between items-center">
                      <h1 className="flex items-center gap-2 text-xl font-medium text-[#18191C]">
                        Marketing Officer
                        <MdVerified />
                      </h1>
                      <FaRegBookmark className="text-xl" />
                    </div>
                    <p className="text-sm text-[#767F8C]">Cody Fisher</p>
                    <span className="flex items-center gap-4">
                      <p className="flex items-center gap-1 text-sm text-[#767F8C]">
                        <FaLocationDot className="text-blue-600" />
                        Bahawalpur
                      </p>
                      <p className="flex items-center gap-1 text-sm text-[#767F8C]">
                        <GrUserExpert className="text-blue-600" /> 3 year
                      </p>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="border shadow hover:shadow-lg hover:bg-white p-8 h-fit grid gap-2">
              <Link href="/profile">
                <div className="flex items-center gap-4">
                  <div className="w-16 border h-[58px] overflow-hidden rounded-full">
                    <Image
                      src="https://media.istockphoto.com/id/492529287/photo/portrait-of-happy-laughing-man.jpg?s=612x612&w=0&k=20&c=0xQcd69Bf-mWoJYgjxBSPg7FHS57nOfYpZaZlYDVKRE="
                      alt=""
                      width={64}
                      height={64}
                      className="h-full w-full rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex justify-between items-center">
                      <h1 className="flex items-center gap-2 text-xl font-medium text-[#18191C]">
                        Marketing Officer
                        <MdVerified />
                      </h1>
                      <FaRegBookmark className="text-xl" />
                    </div>
                    <p className="text-sm text-[#767F8C]">Cody Fisher</p>
                    <span className="flex items-center gap-4">
                      <p className="flex items-center gap-1 text-sm text-[#767F8C]">
                        <FaLocationDot className="text-blue-600" />
                        Bahawalpur
                      </p>
                      <p className="flex items-center gap-1 text-sm text-[#767F8C]">
                        <GrUserExpert className="text-blue-600" /> 3 year
                      </p>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="border shadow hover:shadow-lg hover:bg-white p-8 h-fit grid gap-2">
              <Link href="/profile">
                <div className="flex items-center gap-4">
                  <div className="w-16 border h-[58px] overflow-hidden rounded-full">
                    <Image
                      src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723939200&semt=ais_hybrid"
                      alt=""
                      width={64}
                      height={64}
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex justify-between items-center">
                      <h1 className="flex items-center gap-2 text-xl font-medium text-[#18191C]">
                        Marketing Officer
                        <MdVerified />
                      </h1>
                      <FaRegBookmark className="text-xl" />
                    </div>
                    <p className="text-sm text-[#767F8C]">Cody Fisher</p>
                    <span className="flex items-center gap-4">
                      <p className="flex items-center gap-1 text-sm text-[#767F8C]">
                        <FaLocationDot className="text-blue-600" />
                        Bahawalpur
                      </p>
                      <p className="flex items-center gap-1 text-sm text-[#767F8C]">
                        <GrUserExpert className="text-blue-600" /> 3 year
                      </p>
                    </span>
                  </div>
                </div>
              </Link>
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

export default Employesprofileforjob;
