"use client";
import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { FaArrowRight, FaRegBookmark } from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { SiOnlyoffice } from "react-icons/si";
import Navbar from "@/components/nav-bar";
import { CgProfile } from "react-icons/cg";
import { FiPlusCircle } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { MdLibraryBooks } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import Clientdashboardtab1 from "@/components/clientdashboard/clientdashboardtab1";
import Clientdashboardtab2 from "@/components/clientdashboard/clientdashboardtab2";
import Clientdashboardtab3 from "@/components/clientdashboard/clientdashboardtab3";
import Clientdashboardtab4 from "@/components/clientdashboard/clientdashboardtab4";
import Clientdashboardtab5 from "@/components/clientdashboard/clientdashboardtab5";
import Clientdashboardtab6 from "@/components/clientdashboard/clientdashboardtab6";
import Clientdashboardtab7 from "@/components/clientdashboard/clientdashboardtab7";

const Clientdashboard = () => {
  const [openTab, setOpenTab] = React.useState(1);

  const [showModal1, setShowModal1] = React.useState(false);

  return (
    <div>
      <Navbar />
      <hr />
      <div className="flex mx-10">
        <div className="w-fit border-r-2 border-gray-400">
          <p className="text-sm text-gray-400 grid text-center py-2">
            CLIENT DASHBOARD
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
              <CgProfile className="text-xl" />
              Employers Profile
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
                setShowModal1(true);
              }}
            >
              <FiPlusCircle className="text-xl" />
              Post a Job
            </button>
            {showModal1 ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="space-y-6 bg-white w-fit p-8">
                      <div className="flex w-full justify-end">
                        <RxCross2
                          onClick={() => setShowModal1(false)}
                          className="text-2xl cursor-pointer"
                        />
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="border shadow-md rounded-lg hover:shadow-lg border-blue-600 grid gap-3 p-6 w-fit">
                          <div className="grid gap-2">
                            <h1 className="text-xl font-medium">Free</h1>
                            <p className="text-sm w-80">
                              varius tempus neque. Quisque ultrices mi sed lorem
                              condimentum, vel tempus lectus trices.
                            </p>
                          </div>
                          <span className="flex items-center gap-1">
                            <h1 className="text-3xl text-blue-700">RS: 0</h1>
                            <p className="text-gray-400">/weakly</p>
                          </span>
                          <hr className="my-2" />
                          <div className="grid gap-4">
                            <div className="flex items-center gap-2">
                              <FaRegCheckCircle className="text-blue-700" />
                              <p>Post 3 Jobs</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <FaRegCheckCircle className="text-blue-700" />
                              <p>No Urgents & Featured Jobs </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <FaRegCheckCircle className="text-blue-700" />
                              <p>Highlights Job with Colors</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <FaRegCheckCircle className="text-blue-700" />
                              <p>Access & Saved limited Candidates</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <FaRegCheckCircle className="text-blue-700" />
                              <p>limited Critical Support</p>
                            </div>
                          </div>
                          <button className="p-2 px-4 rounded bg-gray-300 ">
                            Post a Job
                          </button>
                        </div>
                        <div className="border shadow-md rounded-lg hover:shadow-lg border-blue-600 grid gap-3 p-6 w-fit">
                          <div className="grid gap-2">
                            <h1 className="text-xl font-medium">Basic</h1>
                            <p className="text-sm w-80">
                              varius tempus neque. Quisque ultrices mi sed lorem
                              condimentum, vel tempus lectus trices.
                            </p>
                          </div>
                          <span className="flex items-center gap-1">
                            <h1 className="text-3xl text-blue-700">RS: 100</h1>
                            <p className="text-gray-400">/weakly</p>
                          </span>
                          <hr className="my-2" />
                          <div className="grid gap-4">
                            <div className="flex items-center gap-2">
                              <FaRegCheckCircle className="text-blue-700" />
                              <p>Post Unlimited Jobs</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <FaRegCheckCircle className="text-blue-700" />
                              <p>Urgents & Featured Jobs </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <FaRegCheckCircle className="text-blue-700" />
                              <p>Highlights Job with Colors</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <FaRegCheckCircle className="text-blue-700" />
                              <p>Access & Saved all Candidates</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <FaRegCheckCircle className="text-blue-700" />
                              <p>24/7 Critical Support</p>
                            </div>
                          </div>
                          <button className="flex items-center gap-2 justify-center p-2 px-4 rounded bg-blue-700 text-white">
                            Choose Plan <FaArrowRight />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
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
              <MdOutlineBusinessCenter className="text-xl" />
              My Jobs
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
              <FaRegBookmark className="text-xl" />
              Saved Candidate
            </button>
            <button
              className={
                "flex items-center gap-1 p-2 w-52 " +
                (openTab === 6
                  ? "text-blue-800 bg-[#e7f0fa] border-l-2 border-blue-800"
                  : "text-gray-600")
              }
              onClick={(e) => {
                setOpenTab(6);
              }}
            >
              <MdLibraryBooks className="text-xl" />
              Plans & Billings
            </button>
            <button
              className={
                "flex items-center gap-1 p-2 w-52 " +
                (openTab === 7
                  ? "text-blue-800 bg-[#e7f0fa] border-l-2 border-blue-800"
                  : "text-gray-600")
              }
              onClick={(e) => {
                setOpenTab(7);
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
              <Clientdashboardtab1 openTab={openTab} setOpenTab={setOpenTab} />
              <Clientdashboardtab2 openTab={openTab} setOpenTab={setOpenTab} />
              <Clientdashboardtab3 openTab={openTab} setOpenTab={setOpenTab} />
              <Clientdashboardtab4 openTab={openTab} setOpenTab={setOpenTab} />
              <Clientdashboardtab5 openTab={openTab} setOpenTab={setOpenTab} />
              <Clientdashboardtab6 openTab={openTab} setOpenTab={setOpenTab} />
              <Clientdashboardtab7 openTab={openTab} setOpenTab={setOpenTab} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientdashboard;
