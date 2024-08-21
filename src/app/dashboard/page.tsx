"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { LuBellRing } from "react-icons/lu";
import { FaArrowRight, FaRegBookmark } from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { SiOnlyoffice } from "react-icons/si";
import Navbar from "@/components/nav-bar";
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import { FaBookmark } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { IoPersonOutline } from "react-icons/io5";
import { FileInput, Label } from "flowbite-react";
import { RiLinkM } from "react-icons/ri";
import { FaRegFileAlt } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { ToggleSwitch } from "flowbite-react";
import { TiDeleteOutline } from "react-icons/ti";

const Dashbord = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const [openTab2, setOpenTab2] = React.useState(1);
  const [bgColor, setBgColor] = useState("black"); // Default background color
  const [showModal, setShowModal] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpen1, setIsOpen1] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const catMenu = useRef<HTMLDivElement | null>(null);
  const catMenu1 = useRef<HTMLDivElement | null>(null);
  const catMenu2 = useRef<HTMLDivElement | null>(null);
  const Menu = useRef<HTMLDivElement | null>(null);
  const [switch2, setSwitch2] = useState(true);
  const [switch3, setSwitch3] = useState(false);
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("Your Profile is public now");
  const [value3, setValue3] = useState("Your resume is private now");

  useEffect(() => {
    setValue(switch2 ? "YES" : "NO");
    setValue2(
      switch2 ? "Your Profile is public now" : "Your Profile is private now"
    );
  }, [switch2]);
  useEffect(() => {
    setValue1(switch3 ? "YES" : "NO");
    setValue3(
      switch3 ? "Your resume is public now" : "Your resume is private now"
    );
  }, [switch3]);
  const handleClick = () => {
    setBgColor(bgColor === "white" ? "black" : "white"); // Toggle color
    console.log("abc");
  };

  const closeOpenMenus = (e: MouseEvent) => {
    if (
      isOpen &&
      catMenu.current &&
      !catMenu.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };
  const closeOpenMenus1 = (e: MouseEvent) => {
    if (
      isOpen1 &&
      catMenu1.current &&
      !catMenu1.current.contains(e.target as Node)
    ) {
      setIsOpen1(false);
    }
  };
  const closeOpenMenus2 = (e: MouseEvent) => {
    if (
      showModal &&
      catMenu2.current &&
      !catMenu2.current.contains(e.target as Node)
    ) {
      setShowModal(false);
    }
  };
  const closeOpenMenus3 = (e: MouseEvent) => {
    if (isOpen2 && Menu.current && !Menu.current.contains(e.target as Node)) {
      setIsOpen2(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus);
    document.addEventListener("mousedown", closeOpenMenus1);
    document.addEventListener("mousedown", closeOpenMenus2);
    document.addEventListener("mousedown", closeOpenMenus3);
    return () => {
      document.removeEventListener("mousedown", closeOpenMenus);
      document.removeEventListener("mousedown", closeOpenMenus1);
      document.removeEventListener("mousedown", closeOpenMenus2);
      document.removeEventListener("mousedown", closeOpenMenus3);
    };
  }, [isOpen, isOpen1, showModal, isOpen2]);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <div>
      <Navbar />
      <hr />
      <div className="flex mx-10">
        <div className="w-fit border-r-2 border-gray-400">
          <p className="text-sm text-gray-400 grid text-center py-2">
            CANDIDATE DASHBOARD
          </p>
          <ul className="items-center gap-6 ps-4">
            <button
              className={
                "flex items-center gap-1 p-2 w-52 " +
                (openTab === 1
                  ? "text-blue-800 bg-[#e7f0fa] border-l-2 border-blue-800"
                  : "text-gray-600")
              }
              onClick={(e) => {
                setOpenTab(1);
              }}
            >
              <SiOnlyoffice className="text-xl" />
              Overview
            </button>

            <button
              className={
                "flex items-center gap-1 p-2 w-52 " +
                (openTab === 2
                  ? "text-blue-800 bg-[#e7f0fa] border-l-2 border-blue-800"
                  : "text-gray-600")
              }
              onClick={(e) => {
                setOpenTab(2);
              }}
            >
              <MdOutlineBusinessCenter className="text-xl" />
              Applied jobs
            </button>
            <button
              className={
                "flex items-center gap-1 p-2 w-52 " +
                (openTab === 3
                  ? "text-blue-800 bg-[#e7f0fa] border-l-2 border-blue-800"
                  : "text-gray-600")
              }
              onClick={(e) => {
                setOpenTab(3);
              }}
            >
              <FaRegBookmark className="text-xl" />
              Favorite jobs
            </button>
            <button
              className={
                "flex items-center gap-1 p-2 w-52 " +
                (openTab === 4
                  ? "text-blue-800 bg-[#e7f0fa] border-l-2 border-blue-800"
                  : "text-gray-600")
              }
              onClick={(e) => {
                setOpenTab(4);
              }}
            >
              <LuBellRing className="text-xl" />
              Job Alert
            </button>
            <button
              className={
                "flex items-center gap-1 p-2 w-52 " +
                (openTab === 5
                  ? "text-blue-800 bg-[#e7f0fa] border-l-2 border-blue-800"
                  : "text-gray-600")
              }
              onClick={(e) => {
                setOpenTab(5);
              }}
            >
              <IoSettingsOutline className="text-xl" />
              Settings
            </button>
          </ul>
        </div>
        <div className="relative flex flex-col bg-white w-full">
          <div className="py-5 flex-auto">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <div className="grid gap-4 p-4">
                  <div className="grid gap-2">
                    <h1 className="text-xl font-medium">Hello👋, Hamid</h1>
                    <p className="text-gray-400 text-sm">
                      Here is your daily activities and job alerts
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="bg-[#e7f0fa] flex items-center gap-32 p-5 rounded-md">
                      <div>
                        <h1 className="text-xl font-semibold">734</h1>
                        <p className="text-sm">Applied jobs</p>
                      </div>
                      <div className="grid gap-3 items-center text-center justify-center justify-items-center">
                        <span className="bg-white w-fit rounded-md p-4 grid justify-center items-center">
                          <MdOutlineBusinessCenter className="text-2xl text-[#5279a6]" />
                        </span>
                      </div>
                    </div>
                    <div className="bg-[#fff6e6] flex items-center gap-32 p-5 rounded-md">
                      <div>
                        <h1 className="text-xl font-semibold">734</h1>
                        <p className="text-sm">Favorite jobs</p>
                      </div>
                      <div className="grid gap-3 items-center text-center justify-center justify-items-center">
                        <span className="bg-white w-fit rounded-md p-4 grid justify-center items-center">
                          <FaRegBookmark className="text-2xl text-[#8a6e3d]" />
                        </span>
                      </div>
                    </div>
                    <div className="bg-[#e7f6ea] flex items-center gap-32 p-5 rounded-md">
                      <div>
                        <h1 className="text-xl font-semibold">734</h1>
                        <p className="text-sm">Job Alerts</p>
                      </div>
                      <div className="grid gap-3 items-center text-center justify-center justify-items-center">
                        <span className="bg-white w-fit rounded-md p-4 grid justify-center items-center">
                          <LuBellRing className="text-2xl text-[#6bbe7c]" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-500 p-6 rounded-md">
                    <div className="flex items-center w-full gap-3">
                      <Image
                        src="/Default_pfp.jpg"
                        alt=""
                        width={60}
                        height={60}
                        className="w-14 h-14 rounded-full"
                      />
                      <div className="flex items-center justify-between w-full">
                        <div className="grid gap-1">
                          <h1 className="text-lg font-medium text-white">
                            Your profile editing is not completed.
                          </h1>
                          <p className="text-sm text-white">
                            Complete your profile & build your custom Resume
                          </p>
                        </div>
                        <button className="flex items-center w-fit gap-2 border rounded bg-white border-blue-200 p-1 px-3 text-red-600">
                          Edit Profile{" "}
                          <FaArrowRight className="text-red-600 font-light" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <h1 className="text-xl font-medium">Recent Applied</h1>
                    <p className="flex items-center gap-2 p-1 px-3 text-gray-500">
                      View All <FaArrowRight className="text-gray-500" />
                    </p>
                  </div>
                  <table className="table-auto">
                    <thead className="bg-[#f1f2f4]">
                      <tr>
                        <th className="text-start ps-2 py-2">Job</th>
                        <th className="text-start py-2">Date Applied</th>
                        <th className="text-start py-2">Status</th>
                        <th className="text-start py-2">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t hover:border hover:border-blue-700 hover:shadow-md hover:bg-gray-50">
                        <td>
                          <div className="p-4 h-fit">
                            <div className="flex items-center gap-4">
                              <Image
                                src="/download-removebg-preview.png"
                                width={56}
                                height={56}
                                alt=""
                                className="w-14 h-14 rounded-md border"
                              />
                              <div className="grid gap-2">
                                <h1 className="flex items-center gap-4 text-xl font-medium text-[#18191C] hover:text-blue-600 cursor-pointer">
                                  Techical Support Specialist
                                  <span className="text-sm text-[#0BA02C] bg-[#E7F6EA] p-1">
                                    Part-time
                                  </span>
                                </h1>
                                <div className="flex items-center gap-6">
                                  <p className="text-sm text-[#767F8C]">
                                    Dhaka, Bangladesh
                                  </p>
                                  <p className="text-sm text-[#767F8C]">
                                    Salary: $20,000 - $25,000
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-gray-500">Feb 2,2024 2:18</td>
                        <td className="text-[#1a9234]">
                          <div className="flex items-center gap-2">
                            <TiTick className="text-[#1a9234]" />
                            Active
                          </div>
                        </td>
                        <td>
                          <p className="flex items-center hover:bg-blue-700 hover:text-white justify-center gap-2 p-2 px-2 rounded bg-slate-200 text-blue-600">
                            View Details
                          </p>
                        </td>
                      </tr>
                      <tr className="border-t hover:border hover:border-blue-700 hover:shadow-md hover:bg-gray-50">
                        <td>
                          <div className="p-4 h-fit">
                            <div className="flex items-center gap-4">
                              <Image
                                src="/download-removebg-preview.png"
                                width={56}
                                height={56}
                                alt=""
                                className="w-14 h-14 rounded-md border"
                              />
                              <div className="grid gap-2">
                                <h1 className="flex items-center gap-4 text-xl font-medium text-[#18191C] hover:text-blue-600 cursor-pointer">
                                  Techical Support Specialist
                                  <span className="text-sm text-[#0BA02C] bg-[#E7F6EA] p-1">
                                    Part-time
                                  </span>
                                </h1>
                                <div className="flex items-center gap-6">
                                  <p className="text-sm text-[#767F8C]">
                                    Dhaka, Bangladesh
                                  </p>
                                  <p className="text-sm text-[#767F8C]">
                                    Salary: $20,000 - $25,000
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-gray-500">Feb 2,2024 2:18</td>
                        <td className="text-[#1a9234]">
                          <div className="flex items-center gap-2">
                            <TiTick className="text-[#1a9234]" />
                            Active
                          </div>
                        </td>
                        <td>
                          <p className="flex items-center hover:bg-blue-700 hover:text-white justify-center gap-2 p-2 px-2 rounded bg-slate-200 text-blue-600">
                            View Details
                          </p>
                        </td>
                      </tr>
                      <tr className="border-t hover:border hover:border-blue-700 hover:shadow-md hover:bg-gray-50">
                        <td>
                          <div className="p-4 h-fit">
                            <div className="flex items-center gap-4">
                              <Image
                                src="/download-removebg-preview.png"
                                width={56}
                                height={56}
                                alt=""
                                className="w-14 h-14 rounded-md border"
                              />
                              <div className="grid gap-2">
                                <h1 className="flex items-center gap-4 text-xl font-medium text-[#18191C] hover:text-blue-600 cursor-pointer">
                                  Techical Support Specialist
                                  <span className="text-sm text-[#0BA02C] bg-[#E7F6EA] p-1">
                                    Part-time
                                  </span>
                                </h1>
                                <div className="flex items-center gap-6">
                                  <p className="text-sm text-[#767F8C]">
                                    Dhaka, Bangladesh
                                  </p>
                                  <p className="text-sm text-[#767F8C]">
                                    Salary: $20,000 - $25,000
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-gray-500">Feb 2,2024 2:18</td>
                        <td className="text-[#1a9234]">
                          <div className="flex items-center gap-2">
                            <TiTick className="text-[#1a9234]" />
                            Active
                          </div>
                        </td>
                        <td>
                          <p className="flex items-center hover:bg-blue-700 hover:text-white justify-center gap-2 p-2 px-2 rounded bg-slate-200 text-blue-600">
                            View Details
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div className="grid gap-4 w-full p-4">
                  <h1 className="flex items-center gap-2 text-xl font-medium">
                    Recent Applied{" "}
                    <p className="text-gray-500 text-base">(593)</p>
                  </h1>
                  <table className="table-auto w-full">
                    <thead className="bg-[#f1f2f4]">
                      <tr>
                        <th className="text-start ps-2 py-2">Job</th>
                        <th className="text-start py-2">Date Applied</th>
                        <th className="text-start py-2">Status</th>
                        <th className="text-start py-2">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t hover:border hover:border-blue-700 hover:shadow-md hover:bg-gray-50">
                        <td>
                          <div className="p-4 h-fit">
                            <div className="flex items-center gap-4">
                              <Image
                                src="/download-removebg-preview.png"
                                width={56}
                                height={56}
                                alt=""
                                className="w-14 h-14 rounded-md border"
                              />
                              <div className="grid gap-2">
                                <h1 className="flex items-center gap-4 text-xl font-medium text-[#18191C] hover:text-blue-600 cursor-pointer">
                                  Techical Support Specialist
                                  <span className="text-sm text-[#0BA02C] bg-[#E7F6EA] p-1">
                                    Part-time
                                  </span>
                                </h1>
                                <div className="flex items-center gap-6">
                                  <p className="text-sm text-[#767F8C]">
                                    Dhaka, Bangladesh
                                  </p>
                                  <p className="text-sm text-[#767F8C]">
                                    Salary: $20,000 - $25,000
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-gray-500">Feb 2,2024 2:18</td>
                        <td className="text-[#1a9234]">
                          <div className="flex items-center gap-2">
                            <TiTick className="text-[#1a9234]" />
                            Active
                          </div>
                        </td>
                        <td>
                          <p className="flex items-center hover:bg-blue-700 hover:text-white justify-center gap-2 p-2 px-2 rounded bg-slate-200 text-blue-600">
                            View Details
                          </p>
                        </td>
                      </tr>
                      <tr className="border-t hover:border hover:border-blue-700 hover:shadow-md hover:bg-gray-50">
                        <td>
                          <div className="p-4 h-fit">
                            <div className="flex items-center gap-4">
                              <Image
                                src="/download-removebg-preview.png"
                                width={56}
                                height={56}
                                alt=""
                                className="w-14 h-14 rounded-md border"
                              />
                              <div className="grid gap-2">
                                <h1 className="flex items-center gap-4 text-xl font-medium text-[#18191C] hover:text-blue-600 cursor-pointer">
                                  Techical Support Specialist
                                  <span className="text-sm text-[#0BA02C] bg-[#E7F6EA] p-1">
                                    Part-time
                                  </span>
                                </h1>
                                <div className="flex items-center gap-6">
                                  <p className="text-sm text-[#767F8C]">
                                    Dhaka, Bangladesh
                                  </p>
                                  <p className="text-sm text-[#767F8C]">
                                    Salary: $20,000 - $25,000
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-gray-500">Feb 2,2024 2:18</td>
                        <td className="text-[#1a9234]">
                          <div className="flex items-center gap-2">
                            <TiTick className="text-[#1a9234]" />
                            Active
                          </div>
                        </td>
                        <td>
                          <p className="flex items-center hover:bg-blue-700 hover:text-white justify-center gap-2 p-2 px-2 rounded bg-slate-200 text-blue-600">
                            View Details
                          </p>
                        </td>
                      </tr>
                      <tr className="border-t hover:border hover:border-blue-700 hover:shadow-md hover:bg-gray-50">
                        <td>
                          <div className="p-4 h-fit">
                            <div className="flex items-center gap-4">
                              <Image
                                src="/download-removebg-preview.png"
                                width={56}
                                height={56}
                                alt=""
                                className="w-14 h-14 rounded-md border"
                              />
                              <div className="grid gap-2">
                                <h1 className="flex items-center gap-4 text-xl font-medium text-[#18191C] hover:text-blue-600 cursor-pointer">
                                  Techical Support Specialist
                                  <span className="text-sm text-[#0BA02C] bg-[#E7F6EA] p-1">
                                    Part-time
                                  </span>
                                </h1>
                                <div className="flex items-center gap-6">
                                  <p className="text-sm text-[#767F8C]">
                                    Dhaka, Bangladesh
                                  </p>
                                  <p className="text-sm text-[#767F8C]">
                                    Salary: $20,000 - $25,000
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-gray-500">Feb 2,2024 2:18</td>
                        <td className="text-[#1a9234]">
                          <div className="flex items-center gap-2">
                            <TiTick className="text-[#1a9234]" />
                            Active
                          </div>
                        </td>
                        <td>
                          <p className="flex items-center hover:bg-blue-700 hover:text-white justify-center gap-2 p-2 px-2 rounded bg-slate-200 text-blue-600">
                            View Details
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link2">
                <div className="grid gap-4 w-full p-4">
                  <h1 className="flex items-center gap-2 text-xl font-medium">
                    Favorite Jobs{" "}
                    <p className="text-gray-500 text-base">(93)</p>
                  </h1>
                  <table className="table-auto w-full">
                    <thead className="bg-[#f1f2f4]">
                      <tr>
                        <th className="text-start ps-2 py-2">Job</th>
                        <th className="text-start py-2">Date Applied</th>
                        <th className="text-start py-2">Status</th>
                        <th className="text-start py-2">Action</th>
                      </tr>
                    </thead>
                    <tbody className="w-full">
                      <tr className="hover:shadow-md hover:bg-gray-50 hover:border border-t hover:border-blue-700">
                        <td>
                          <div className="p-4 h-fit">
                            <div className="flex items-center gap-4">
                              <Image
                                src="/download-removebg-preview.png"
                                width={56}
                                height={56}
                                alt=""
                                className="w-14 h-14 rounded-md border"
                              />
                              <div className="grid gap-2">
                                <h1 className="flex items-center gap-4 text-xl font-medium text-[#18191C] hover:text-blue-600 cursor-pointer">
                                  Techical Support Specialist
                                  <span className="text-sm text-[#0BA02C] bg-[#E7F6EA] p-1">
                                    Part-time
                                  </span>
                                </h1>
                                <div className="flex items-center gap-6">
                                  <p className="text-sm text-[#767F8C]">
                                    Dhaka, Bangladesh
                                  </p>
                                  <p className="text-sm text-[#767F8C]">
                                    Salary: $20,000 - $25,000
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-gray-500">Feb 2,2024 2:18</td>
                        <td className="text-[#1a9234]">
                          <div className="flex items-center gap-2">
                            <TiTick className="text-[#1a9234]" />
                            Active
                          </div>
                        </td>
                        <td>
                          <span className="flex items-center gap-4">
                            <FaBookmark className="text-lg" />
                            <p className="flex w-full items-center justify-center rounded gap-2 p-2 px-2 hover:bg-blue-700 hover:text-white bg-slate-200 text-blue-600">
                              Apply Now <FaArrowRight />
                            </p>
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:shadow-md hover:bg-gray-50 hover:border border-t hover:border-blue-700">
                        <td>
                          <div className="p-4 h-fit">
                            <div className="flex items-center gap-4">
                              <Image
                                src="/download-removebg-preview.png"
                                width={56}
                                height={56}
                                alt=""
                                className="w-14 h-14 rounded-md border"
                              />
                              <div className="grid gap-2">
                                <h1 className="flex items-center gap-4 text-xl font-medium text-[#18191C] hover:text-blue-600 cursor-pointer">
                                  Techical Support Specialist
                                  <span className="text-sm text-[#0BA02C] bg-[#E7F6EA] p-1">
                                    Part-time
                                  </span>
                                </h1>
                                <div className="flex items-center gap-6">
                                  <p className="text-sm text-[#767F8C]">
                                    Dhaka, Bangladesh
                                  </p>
                                  <p className="text-sm text-[#767F8C]">
                                    Salary: $20,000 - $25,000
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-gray-500">Feb 2,2024 2:18</td>
                        <td className="text-[#1a9234]">
                          <div className="flex items-center gap-2">
                            <TiTick className="text-[#1a9234]" />
                            Active
                          </div>
                        </td>
                        <td>
                          <span className="flex items-center gap-4">
                            <FaBookmark className="text-lg" />
                            <p className="flex w-full items-center justify-center rounded gap-2 p-2 px-2 hover:bg-blue-700 hover:text-white bg-slate-200 text-blue-600">
                              Apply Now <FaArrowRight />
                            </p>
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:shadow-md hover:bg-gray-50 hover:border border-t hover:border-blue-700">
                        <td>
                          <div className="p-4 h-fit">
                            <div className="flex items-center gap-4">
                              <Image
                                src="/download-removebg-preview.png"
                                width={56}
                                height={56}
                                alt=""
                                className="w-14 h-14 rounded-md border"
                              />
                              <div className="grid gap-2">
                                <h1 className="flex items-center gap-4 text-xl font-medium text-[#18191C] hover:text-blue-600 cursor-pointer">
                                  Techical Support Specialist
                                  <span className="text-sm text-[#0BA02C] bg-[#E7F6EA] p-1">
                                    Part-time
                                  </span>
                                </h1>
                                <div className="flex items-center gap-6">
                                  <p className="text-sm text-[#767F8C]">
                                    Dhaka, Bangladesh
                                  </p>
                                  <p className="text-sm text-[#767F8C]">
                                    Salary: $20,000 - $25,000
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-gray-500">Feb 2,2024 2:18</td>
                        <td className="text-[#1a9234]">
                          <div className="flex items-center gap-2">
                            <TiTick className="text-[#1a9234]" />
                            Active
                          </div>
                        </td>
                        <td>
                          <span className="flex items-center gap-4">
                            <FaBookmark className="text-lg" />
                            <p className="flex items-center cursor-not-allowed hover:text-gray-400 justify-center gap-2 p-2 px-4 rounded bg-slate-200 text-gray-400">
                              Deadline Expired
                            </p>
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:shadow-md hover:bg-gray-50 hover:border border-t hover:border-blue-700">
                        <td>
                          <div className="p-4 h-fit">
                            <div className="flex items-center gap-4">
                              <Image
                                src="/download-removebg-preview.png"
                                width={56}
                                height={56}
                                alt=""
                                className="w-14 h-14 rounded-md border"
                              />
                              <div className="grid gap-2">
                                <h1 className="flex items-center gap-4 text-xl font-medium text-[#18191C] hover:text-blue-600 cursor-pointer">
                                  Techical Support Specialist
                                  <span className="text-sm text-[#0BA02C] bg-[#E7F6EA] p-1">
                                    Part-time
                                  </span>
                                </h1>
                                <div className="flex items-center gap-6">
                                  <p className="text-sm text-[#767F8C]">
                                    Dhaka, Bangladesh
                                  </p>
                                  <p className="text-sm text-[#767F8C]">
                                    Salary: $20,000 - $25,000
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-gray-500">Feb 2,2024 2:18</td>
                        <td className="text-[#1a9234]">
                          <div className="flex items-center gap-2">
                            <TiTick className="text-[#1a9234]" />
                            Active
                          </div>
                        </td>
                        <td>
                          <span className="flex items-center gap-4">
                            <FaBookmark className="text-lg" />
                            <p className="flex w-full items-center rounded justify-center gap-2 p-2 px-2 hover:bg-blue-700 hover:text-white bg-slate-200 text-blue-600">
                              Apply Now <FaArrowRight />
                            </p>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className={openTab === 4 ? "block" : "hidden"} id="link2">
                <div className="grid gap-4 w-full p-4">
                  <h1 className="flex items-center gap-2 text-xl font-medium">
                    Favorite Jobs{" "}
                    <p className="text-gray-500 text-base">(10 new jobs)</p>
                  </h1>
                  <table className="table-auto w-full">
                    <thead className="bg-[#f1f2f4]">
                      <tr>
                        <th className="text-start ps-2 py-2">Job</th>
                        <th className="text-start py-2">Date Applied</th>
                        <th className="text-start py-2">Status</th>
                        <th className="text-start py-2">Action</th>
                      </tr>
                    </thead>
                    <tbody className="w-full">
                      <tr className="hover:bg-gray-50 hover:shadow-md hover:border border-t hover:border-blue-700">
                        <td>
                          <div className="p-4 h-fit">
                            <div className="flex items-center gap-4">
                              <Image
                                src="/download-removebg-preview.png"
                                width={56}
                                height={56}
                                alt=""
                                className="w-14 h-14 rounded-md border"
                              />
                              <div className="grid gap-2">
                                <h1 className="flex items-center gap-4 text-xl font-medium text-[#18191C] hover:text-blue-600 cursor-pointer">
                                  Techical Support Specialist
                                  <span className="text-sm text-[#0BA02C] bg-[#E7F6EA] p-1">
                                    Part-time
                                  </span>
                                </h1>
                                <div className="flex items-center gap-6">
                                  <p className="text-sm text-[#767F8C]">
                                    Dhaka, Bangladesh
                                  </p>
                                  <p className="text-sm text-[#767F8C]">
                                    Salary: $20,000 - $25,000
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-gray-500">Feb 2,2024 2:18</td>
                        <td className="text-[#1a9234]">
                          <div className="flex items-center gap-2">
                            <TiTick className="text-[#1a9234]" />
                            Active
                          </div>
                        </td>
                        <td>
                          <span className="flex items-center gap-4">
                            <FaRegBookmark
                              onClick={handleClick}
                              className={"text-xl cursor-pointer bg-" + bgColor}
                            />
                            <p className="flex w-full items-center justify-center rounded gap-2 p-2 px-2 hover:bg-blue-700 hover:text-white bg-slate-200 text-blue-600">
                              Apply Now <FaArrowRight />
                            </p>
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:shadow-md hover:bg-gray-50 hover:border border-t hover:border-blue-700">
                        <td>
                          <div className="p-4 h-fit">
                            <div className="flex items-center gap-4">
                              <Image
                                src="/download-removebg-preview.png"
                                width={56}
                                height={56}
                                alt=""
                                className="w-14 h-14 rounded-md border"
                              />
                              <div className="grid gap-2">
                                <h1 className="flex items-center gap-4 text-xl font-medium text-[#18191C] hover:text-blue-600 cursor-pointer">
                                  Techical Support Specialist
                                  <span className="text-sm text-[#0BA02C] bg-[#E7F6EA] p-1">
                                    Part-time
                                  </span>
                                </h1>
                                <div className="flex items-center gap-6">
                                  <p className="text-sm text-[#767F8C]">
                                    Dhaka, Bangladesh
                                  </p>
                                  <p className="text-sm text-[#767F8C]">
                                    Salary: $20,000 - $25,000
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-gray-500">Feb 2,2024 2:18</td>
                        <td className="text-[#1a9234]">
                          <div className="flex items-center gap-2">
                            <TiTick className="text-[#1a9234]" />
                            Active
                          </div>
                        </td>
                        <td>
                          <span className="flex items-center gap-4">
                            <FaBookmark className="text-lg" />
                            <p className="flex w-full items-center justify-center rounded gap-2 p-2 px-2 hover:bg-blue-700 hover:text-white bg-slate-200 text-blue-600">
                              Apply Now <FaArrowRight />
                            </p>
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:shadow-md hover:bg-gray-50 hover:border border-t hover:border-blue-700">
                        <td>
                          <div className="p-4 h-fit">
                            <div className="flex items-center gap-4">
                              <Image
                                src="/download-removebg-preview.png"
                                width={56}
                                height={56}
                                alt=""
                                className="w-14 h-14 rounded-md border"
                              />
                              <div className="grid gap-2">
                                <h1 className="flex items-center gap-4 text-xl font-medium text-[#18191C] hover:text-blue-600 cursor-pointer">
                                  Techical Support Specialist
                                  <span className="text-sm text-[#0BA02C] bg-[#E7F6EA] p-1">
                                    Part-time
                                  </span>
                                </h1>
                                <div className="flex items-center gap-6">
                                  <p className="text-sm text-[#767F8C]">
                                    Dhaka, Bangladesh
                                  </p>
                                  <p className="text-sm text-[#767F8C]">
                                    Salary: $20,000 - $25,000
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-gray-500">Feb 2,2024 2:18</td>
                        <td className="text-[#1a9234]">
                          <div className="flex items-center gap-2">
                            <TiTick className="text-[#1a9234]" />
                            Active
                          </div>
                        </td>
                        <td>
                          <span className="flex items-center gap-4">
                            <FaRegBookmark className="text-xl" />
                            <p className="flex w-full items-center justify-center rounded gap-2 p-2 px-2 hover:bg-blue-700 hover:text-white bg-slate-200 text-blue-600">
                              Apply Now <FaArrowRight />
                            </p>
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:shadow-md hover:bg-gray-50 hover:border border-t hover:border-blue-700">
                        <td>
                          <div className="p-4 h-fit">
                            <div className="flex items-center gap-4">
                              <Image
                                src="/download-removebg-preview.png"
                                width={56}
                                height={56}
                                alt=""
                                className="w-14 h-14 rounded-md border"
                              />
                              <div className="grid gap-2">
                                <h1 className="flex items-center gap-4 text-xl font-medium text-[#18191C] hover:text-blue-600 cursor-pointer">
                                  Techical Support Specialist
                                  <span className="text-sm text-[#0BA02C] bg-[#E7F6EA] p-1">
                                    Part-time
                                  </span>
                                </h1>
                                <div className="flex items-center gap-6">
                                  <p className="text-sm text-[#767F8C]">
                                    Dhaka, Bangladesh
                                  </p>
                                  <p className="text-sm text-[#767F8C]">
                                    Salary: $20,000 - $25,000
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="text-gray-500">Feb 2,2024 2:18</td>
                        <td className="text-[#1a9234]">
                          <div className="flex items-center gap-2">
                            <TiTick className="text-[#1a9234]" />
                            Active
                          </div>
                        </td>
                        <td>
                          <span className="flex items-center gap-4">
                            <FaBookmark className="text-lg" />
                            <p className="flex w-full items-center justify-center rounded gap-2 p-2 px-2 hover:bg-blue-700 hover:text-white bg-slate-200 text-blue-600">
                              Apply Now <FaArrowRight />
                            </p>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className={openTab === 5 ? "block" : "hidden"} id="link2">
                <div>
                  <ul className="flex items-center gap-6 ps-4">
                    <button
                      className={
                        "flex items-center w-fit gap-1 p-2 " +
                        (openTab2 === 1
                          ? "text-blue-800 border-b-2 border-blue-800"
                          : "text-gray-500")
                      }
                      onClick={(e) => {
                        setOpenTab2(1);
                      }}
                    >
                      <IoPersonOutline className="text-lg" />
                      Personal
                    </button>
                    <button
                      className={
                        "flex items-center gap-1 p-2 w-fit " +
                        (openTab2 === 2
                          ? "text-blue-800 border-b-2 border-blue-800"
                          : "text-gray-500")
                      }
                      onClick={(e) => {
                        setOpenTab2(2);
                      }}
                    >
                      <CgProfile className="text-lg" />
                      Profile
                    </button>
                    <button
                      className={
                        "flex items-center gap-1 p-2 w-fit " +
                        (openTab2 === 3
                          ? "text-blue-800 border-b-2 border-blue-800"
                          : "text-gray-500")
                      }
                      onClick={(e) => {
                        setOpenTab2(3);
                      }}
                    >
                      <TbWorld className="text-lg" />
                      Social Links
                    </button>
                    <button
                      className={
                        "flex items-center gap-1 p-2 w-fit " +
                        (openTab2 === 4
                          ? "text-blue-800 border-b-2 border-blue-800"
                          : "text-gray-500")
                      }
                      onClick={(e) => {
                        setOpenTab2(4);
                      }}
                    >
                      <IoSettingsOutline className="text-lg" />
                      Account Setting
                    </button>
                  </ul>
                  <hr />
                </div>
                <div>
                  <div className={openTab2 === 1 ? "block" : "hidden"}>
                    <div>
                      <div className="flex items-center gap-6 p-6">
                        <div className="grid gap-2">
                          <h1 className="text-sm text-slate-700">
                            Profile Picture
                          </h1>
                          <div className="flex w-[300px] items-center justify-center">
                            <Label
                              htmlFor="dropzone-file"
                              className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                            >
                              <div className="flex flex-col items-center justify-center pb-6 pt-5">
                                <svg
                                  className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 20 16"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                  />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                  <span className="font-semibold">
                                    Click to upload
                                  </span>{" "}
                                  or drag and drop
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                                </p>
                              </div>
                              <FileInput
                                id="dropzone-file"
                                className="hidden"
                              />
                            </Label>
                          </div>
                        </div>
                        <div className="grid gap-4 w-full">
                          <div className="flex items-center gap-6">
                            <div className="grid gap-2 w-full">
                              <h1 className="text-sm text-slate-700">
                                Full Name
                              </h1>
                              <input
                                type="text"
                                className="border px-2 rounded-md border-gray-400"
                              />
                            </div>
                            <div className="grid gap-2 w-full">
                              <h1 className="text-sm text-slate-700">Tittle</h1>
                              <input
                                type="text"
                                className="border px-2 rounded-md border-gray-400"
                              />
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="grid gap-2 w-full">
                              <h1 className="text-sm text-slate-700">
                                Experience
                              </h1>
                              <input
                                type="text"
                                className="border px-2 rounded-md border-gray-400"
                                placeholder="? years"
                              />
                            </div>
                            <div className="grid gap-2 w-full">
                              <h1 className="text-sm text-slate-700">
                                Educations
                              </h1>
                              <div ref={catMenu} className="relative">
                                <button
                                  type="button"
                                  className="gap-4 w-full border px-2 rounded-md border-gray-400 p-3 text-gray-400 bg-white font-medium text-sm inline-flex items-center"
                                  onClick={toggleDropdown}
                                >
                                  Select...
                                </button>

                                {isOpen && (
                                  <div className="absolute mt-2 w-full rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                    <ul className="relative p-2 w-full text-sm grid gap-1">
                                      <li className="flex items-center justify-between p-2 hover:bg-gray-100">
                                        Graduated{" "}
                                        <p className="text-gray-500">16+</p>
                                      </li>
                                      <li className="flex items-center justify-between p-2 hover:bg-gray-100">
                                        intermediate{" "}
                                        <p className="text-gray-500">
                                          11 to 12
                                        </p>
                                      </li>
                                      <li className="flex items-center justify-between p-2 hover:bg-gray-100">
                                        Middle Education{" "}
                                        <p className="text-gray-500">9 to 10</p>
                                      </li>
                                      <li className="flex items-center justify-between p-2 hover:bg-gray-100">
                                        Secondary Education{" "}
                                        <p className="text-gray-500">6 to 8</p>
                                      </li>
                                      <li className="flex items-center justify-between p-2 hover:bg-gray-100">
                                        Primary Education{" "}
                                        <p className="text-gray-500">1 to 5</p>
                                      </li>
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="grid gap-2 w-full">
                            <h1 className="text-sm text-slate-700">
                              Personal Website
                            </h1>
                            <span className="flex items-center border px-2 rounded-md border-gray-400">
                              <RiLinkM className="text-2xl text-blue-700" />
                              <input
                                type="text"
                                className="w-full border-none rounded-md"
                                placeholder="Website URL..."
                              />
                            </span>
                          </div>
                          <button className="p-2 px-4 bg-blue-800 text-white rounded-sm w-fit">
                            Save Changes
                          </button>
                        </div>
                      </div>
                      <div className="grid gap-4 px-6">
                        <h1 className="text-lg font-medium">Your Cv/Resume</h1>
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-4 rounded-md border w-fit px-4 p-4 bg-[#f8f9fa]">
                            <FaRegFileAlt className="text-2xl text-blue-700" />
                            <div className="flex items-center w-full gap-12">
                              <span>
                                <h1 className="text-sm font-medium">
                                  Professional Resume
                                </h1>
                                <p className="text-gray-500">3.5 MB</p>
                              </span>
                              <div ref={catMenu1} className="relative">
                                <BsThreeDots
                                  onClick={toggleDropdown1}
                                  className="text-lg cursor-pointer"
                                />
                                {isOpen1 && (
                                  <div className="absolute mt-2 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                    <ul className="relative p-2 w-40 text-sm grid gap-1">
                                      <li className="flex items-center gap-2 text-blue-600 p-2 hover:bg-blue-100">
                                        <FiEdit className="text-blue-600 text-lg" />
                                        Edit Resume
                                      </li>
                                      <li className="flex items-center text-red-500 gap-2 p-2 hover:bg-red-100">
                                        <MdDeleteOutline className="text-red-500 text-xl" />
                                        Delete Resume
                                      </li>
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          <div ref={catMenu2}>
                            <div
                              onClick={() => setShowModal(true)}
                              className="flex items-center gap-4 cursor-pointer rounded-md border-2 border-dashed w-fit px-4 p-4 bg-[#f8f9fa]"
                            >
                              <FiPlusCircle className="text-2xl text-blue-700" />
                              <span>
                                <h1 className="text-sm font-medium">
                                  Add Cv/Resume
                                </h1>
                                <p className="text-gray-500">
                                  Browse file or drop here. only pdf
                                </p>
                              </span>
                            </div>
                            {showModal ? (
                              <>
                                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    {/*content*/}
                                    <div className="space-y-6 bg-white w-[600px] p-6">
                                      <h1 className="flex justify-between text-lg font-medium">
                                        Add Cv/Resume
                                        <RxCross2
                                          onClick={() => setShowModal(false)}
                                          className="text-2xl cursor-pointer"
                                        />
                                      </h1>
                                      <div className="grid gap-2 w-full">
                                        <h1 className="text-sm text-slate-700">
                                          CV/Resume Name
                                        </h1>
                                        <input
                                          type="text"
                                          className="border px-2 rounded-md border-gray-400"
                                        />
                                      </div>
                                      <div className="grid gap-2">
                                        <h1 className="text-sm text-slate-700">
                                          Upload your Cv/Resume
                                        </h1>
                                        <div className="flex items-center justify-center">
                                          <Label
                                            htmlFor="dropzone-file"
                                            className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                          >
                                            <div className="flex flex-col items-center justify-center pb-6 pt-5">
                                              <svg
                                                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 20 16"
                                              >
                                                <path
                                                  stroke="currentColor"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                />
                                              </svg>
                                              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">
                                                  Click to upload
                                                </span>{" "}
                                                or drag and drop
                                              </p>
                                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                                SVG, PNG, JPG or GIF (MAX.
                                                800x400px)
                                              </p>
                                            </div>
                                            <FileInput
                                              id="dropzone-file"
                                              className="hidden"
                                            />
                                          </Label>
                                        </div>
                                      </div>
                                      <div className="flex justify-between">
                                        <button
                                          onClick={() => setShowModal(false)}
                                          className="text-blue-700 bg-blue-200 p-2 px-5 rounded-md"
                                        >
                                          Cancel
                                        </button>
                                        <button
                                          onClick={() => setShowModal(false)}
                                          className="text-white bg-blue-700 p-2 px-5 rounded-md"
                                        >
                                          Add Cv/Resume
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                              </>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={openTab2 === 2 ? "block" : "hidden"}>
                    <div className="grid gap-4 p-6">
                      <div className="flex items-center gap-6">
                        <div className="grid gap-2 w-full">
                          <h1 className="text-sm text-slate-700">
                            Nationality
                          </h1>
                          <input
                            type="text"
                            className="border px-2 rounded-md border-gray-400"
                            defaultValue="Pakistan"
                          />
                        </div>
                        <div className="grid gap-2 w-full">
                          <h1 className="text-sm text-slate-700">City</h1>
                          <input
                            type="text"
                            className="border px-2 rounded-md border-gray-400"
                            placeholder="city..."
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="grid gap-2 w-full">
                          <h1 className="text-sm text-slate-700">Gender</h1>
                          <div ref={Menu} className="relative">
                            <button
                              type="button"
                              className="gap-4 w-full border px-2 rounded-md border-gray-400 p-3 text-gray-400 bg-white font-medium text-sm inline-flex items-center"
                              onClick={toggleDropdown2}
                            >
                              Select...
                            </button>

                            {isOpen2 && (
                              <div className="absolute z-10 mt-2 w-full rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <ul className="relative p-2 w-full text-sm grid gap-1">
                                  <li className="p-2 hover:bg-gray-100">
                                    Male
                                  </li>
                                  <li className="p-2 hover:bg-gray-100">
                                    Female
                                  </li>
                                  <li className="p-2 hover:bg-gray-100">
                                    Other
                                  </li>
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="grid gap-2 w-full">
                          <h1 className="text-sm text-slate-700">
                            Date of Birth
                          </h1>
                          <input
                            type="date"
                            className="border px-2 rounded-md border-gray-400"
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="grid gap-2 w-full">
                          <h1 className="text-sm text-slate-700">Educations</h1>
                          <div ref={catMenu} className="relative">
                            <button
                              type="button"
                              className="gap-4 w-full border px-2 rounded-md border-gray-400 p-3 text-gray-400 bg-white font-medium text-sm inline-flex items-center"
                              onClick={toggleDropdown}
                            >
                              Select...
                            </button>

                            {isOpen && (
                              <div className="absolute mt-2 w-full rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <ul className="relative p-2 w-full text-sm grid gap-1">
                                  <li className="flex items-center justify-between p-2 hover:bg-gray-100">
                                    Graduated{" "}
                                    <p className="text-gray-500">16+</p>
                                  </li>
                                  <li className="flex items-center justify-between p-2 hover:bg-gray-100">
                                    intermediate{" "}
                                    <p className="text-gray-500">11 to 12</p>
                                  </li>
                                  <li className="flex items-center justify-between p-2 hover:bg-gray-100">
                                    Middle Education{" "}
                                    <p className="text-gray-500">9 to 10</p>
                                  </li>
                                  <li className="flex items-center justify-between p-2 hover:bg-gray-100">
                                    Secondary Education{" "}
                                    <p className="text-gray-500">6 to 8</p>
                                  </li>
                                  <li className="flex items-center justify-between p-2 hover:bg-gray-100">
                                    Primary Education{" "}
                                    <p className="text-gray-500">1 to 5</p>
                                  </li>
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="grid gap-2 w-full">
                          <h1 className="text-sm text-slate-700">Experience</h1>
                          <input
                            type="text"
                            className="border px-2 rounded-md border-gray-400"
                            placeholder="example: 1 to 25..."
                          />
                        </div>
                      </div>
                      <div className="grid gap-2 w-full">
                        <h1 className="text-sm text-slate-700">Biography</h1>
                        <textarea
                          className="rounded-md border-gray-400 text-sm"
                          rows={8}
                          cols={50}
                          name="comment"
                          form="usrform"
                          placeholder="Write down your biography here. Let the employers know who you are..."
                        ></textarea>
                      </div>
                      <div className="flex justify-start">
                        <button className="bg-blue-700 hover:bg-blue-800 text-white rounded-md w-fit p-2 px-6">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={openTab2 === 3 ? "block" : "hidden"}>
                    <div className="p-6">
                      <div className="grid gap-2">
                        <h1 className="font-medium">Social Links</h1>
                        <div className="grid gap-8 w-full">
                          <div className="flex items-center gap-2 w-full">
                            <span className="flex items-center gap-2 pr-2">
                              <FaFacebookF className="text-2xl text-blue-600" />
                              Facebook
                            </span>
                            <input
                              type="text"
                              className="w-full border px-2 rounded-md border-gray-400 placeholder:text-sm"
                              placeholder="Profile Link/URL"
                            />
                            <div className="flex gap-2">
                              <button className="bg-gray-100 hover:bg-gray-200 rounded-md p-2 px-8">
                                Remove
                              </button>
                            </div>
                          </div>

                          <div className="flex items-center w-full gap-2">
                            <span className="flex items-center gap-2 pr-7">
                              <FaTwitter className="text-2xl text-[#1c96e8]" />
                              Twitter
                            </span>
                            <input
                              type="text"
                              className="w-full border px-2 rounded-md border-gray-400 placeholder:text-sm"
                              placeholder="Profile Link/URL"
                            />
                            <div className="flex gap-2">
                              <button className="bg-gray-100 hover:bg-gray-200 rounded-md p-2 px-8">
                                Remove
                              </button>
                            </div>
                          </div>
                          <div className="flex items-center w-full gap-2">
                            <span className="flex items-center gap-2 pr-4">
                              <IoLogoYoutube className="text-2xl text-red-600" />
                              Youtube
                            </span>
                            <input
                              type="text"
                              className="w-full border px-2 rounded-md border-gray-400 placeholder:text-sm"
                              placeholder="Profile Link/URL"
                            />
                            <div className="flex gap-2">
                              <button className="bg-gray-100 hover:bg-gray-200 rounded-md p-2 px-8">
                                Remove
                              </button>
                            </div>
                          </div>
                          <div className="flex items-center w-full gap-2">
                            <span className="flex items-center gap-2 pr-4">
                              <TbWorld className="text-2xl text-blue-600" />
                              Website
                            </span>
                            <input
                              type="text"
                              className="w-full border px-2 rounded-md border-gray-400 placeholder:text-sm"
                              placeholder="Profile Link/URL"
                            />
                            <div className="flex gap-2">
                              <button className="bg-gray-100 hover:bg-gray-200 rounded-md p-2 px-8">
                                Remove
                              </button>
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <button className="bg-blue-700 hover:bg-blue-800 text-white rounded-md w-fit p-2 px-14">
                              Save Change
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={openTab2 === 4 ? "block" : "hidden"}>
                    <div className="p-6">
                      <div className="grid gap-2">
                        <h1 className="font-medium text-lg">Contact Info</h1>
                        <div className="grid gap-6 w-full">
                          <div className="grid gap-2">
                            <p className="text-sm">Map Location</p>
                            <input
                              type="text"
                              className="w-full border px-2 rounded-md border-gray-400 placeholder:text-sm"
                              placeholder="Location"
                            />
                          </div>
                          <div className="grid gap-2">
                            <p className="text-sm">Phone</p>
                            <input
                              type="text"
                              className="w-full border px-2 rounded-md border-gray-400 placeholder:text-sm"
                              defaultValue={"+92"}
                            />
                          </div>
                          <div className="grid gap-2">
                            <p className="text-sm">Email</p>
                            <input
                              type="email"
                              className="w-full border px-2 rounded-md border-gray-400 placeholder:text-sm"
                              placeholder="example@gmail.com"
                            />
                          </div>
                          <div className="flex justify-start">
                            <button className="bg-blue-700 hover:bg-blue-800 text-white rounded-md w-fit p-2 px-6">
                              Save Changes
                            </button>
                          </div>
                        </div>
                        <hr className="my-6" />
                        {/* Notifications */}
                        <div className="grid gap-4">
                          <h1 className="text-xl">Notification</h1>
                          <div className="grid gap-3">
                            <div className="flex items-center gap-20">
                              <div className="flex items-center gap-2">
                                <input
                                  type="checkbox"
                                  name="abc"
                                  id=""
                                  className="p-2 rounded"
                                  checked
                                />
                                <p className="text-sm font-medium">
                                  Notify me when employers shortlisted me
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                <input
                                  type="checkbox"
                                  name="abc"
                                  id=""
                                  className="p-2 rounded"
                                  disabled
                                />
                                <p className="text-sm font-medium text-gray-500">
                                  Notify me when employers saved my profile
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-20">
                              <div className="flex items-center gap-2">
                                <input
                                  type="checkbox"
                                  name="abc"
                                  id=""
                                  className="p-2 rounded"
                                  disabled
                                />
                                <p className="text-sm font-medium text-gray-500">
                                  Notify me when my applied jobs are expire
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                <input
                                  type="checkbox"
                                  name="abc"
                                  id=""
                                  className="p-2 rounded"
                                  checked
                                />
                                <p className="text-sm font-medium">
                                  Notify me when employers rejected me
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                name="abc"
                                id=""
                                className="p-2 rounded"
                              />
                              <p className="text-sm font-medium">
                                Notify me when i have up to 5 job alerts
                              </p>
                            </div>
                          </div>
                        </div>
                        <hr className="my-6" />
                        {/* job alerts */}
                        <div className="grid gap-6">
                          <h1 className="text-lg font-medium">Job Alerts</h1>
                          <div className="flex items-center gap-6">
                            <div className="grid gap-2 w-full">
                              <h1 className="text-sm text-slate-700">Role</h1>
                              <input
                                type="text"
                                className="border px-2 rounded-md border-gray-400"
                                placeholder="Your job roles"
                              />
                            </div>
                            <div className="grid gap-2 w-full">
                              <h1 className="text-sm text-slate-700">
                                Location
                              </h1>
                              <input
                                type="text"
                                className="border px-2 rounded-md border-gray-400"
                                placeholder="City"
                              />
                            </div>
                          </div>
                          <div className="flex justify-start">
                            <button className="bg-blue-700 hover:bg-blue-800 text-white rounded-md w-fit p-2 px-6">
                              Save Changes
                            </button>
                          </div>
                        </div>
                        <hr className="my-6" />
                        {/* Privacy */}
                        <div className="flex items-center gap-20">
                          <div className="grid gap-2">
                            <h1 className="font-medium">Profile Privacy</h1>
                            <div className="flex items-center gap-4 border p-4">
                              <ToggleSwitch
                                checked={switch2}
                                onChange={setSwitch2}
                                label={value}
                                className="text-blue-600"
                              />
                              <hr className="h-6 border" />
                              <p>{value2}</p>
                            </div>
                          </div>
                          <div className="grid gap-2">
                            <h1 className="font-medium">Resume Privacy</h1>
                            <div className="flex items-center gap-4 border p-4">
                              <ToggleSwitch
                                checked={switch3}
                                onChange={setSwitch3}
                                label={value1}
                              />
                              <hr className="h-6 border" />
                              <p>{value3}</p>
                            </div>
                          </div>
                        </div>
                        <hr className="my-6" />
                        {/* Change password */}
                        <div className="grid gap-6">
                          <h1 className="text-lg font-medium">
                            Change Password
                          </h1>
                          <div className="flex items-center gap-6">
                            <div className="grid gap-2 w-full">
                              <h1 className="text-sm text-slate-700">
                                Current Password
                              </h1>
                              <input
                                type="Password"
                                className="border px-2 rounded-md border-gray-400"
                                placeholder="Password"
                              />
                            </div>
                            <div className="grid gap-2 w-full">
                              <h1 className="text-sm text-slate-700">
                                New Password
                              </h1>
                              <input
                                type="Password"
                                className="border px-2 rounded-md border-gray-400"
                                placeholder="Password"
                              />
                            </div>
                            <div className="grid gap-2 w-full">
                              <h1 className="text-sm text-slate-700">
                                Confirm Password
                              </h1>
                              <input
                                type="Password"
                                className="border px-2 rounded-md border-gray-400"
                                placeholder="Password"
                              />
                            </div>
                          </div>
                          <div className="flex justify-start">
                            <button className="bg-blue-700 hover:bg-blue-800 text-white rounded-md w-fit p-2 px-6">
                              Save Changes
                            </button>
                          </div>
                        </div>
                        <hr className="my-6" />
                        {/* delete Profile */}
                        <div className="grid gap-4">
                          <h1 className="text-lg font-medium">
                            Delete Your Account
                          </h1>
                          <p className="text-gray-500 text-sm">
                            If you delete your Jobpilot account, you will no
                            longer be able to get information about the matched
                            jobs, following employers, and job alert,
                            shortlisted jobs and more. You will be abandoned
                            from all the services of Jobpilot.com.
                          </p>
                          <button className="flex items-center gap-1 hover:border w-fit p-3 rounded px-4 text-red-600">
                            <TiDeleteOutline className="text-red-600 text-2xl" />{" "}
                            Close Account
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
