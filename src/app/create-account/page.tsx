"use client";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
const Createaccount = () => {
  return (
    <div>
      <div>
        <div>
          <img
            src="/download-removebg-preview.png"
            alt=""
            className="w-32 h-16"
          />
        </div>
        <div>
          <h1 className="text-2xl font-medium">Create account</h1>
          <p className="text-gray-500">
            Already have account{" "}
            <a href="" className="text-blue-600 cursor-pointer font-medium">
              Log In
            </a>
          </p>
          <div className="bg-gray-200 w-fit flex flex-col gap-2 text-center">
            <p className="text-sm text-gray-500">CREATE ACCOUNT AS A</p>
            <Tabs aria-label="Default tabs" variant="default">
              <Tabs.Item active title="Profile" icon={HiUserCircle}>
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Profile tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item title="Dashboard" icon={MdDashboard}>
                This is{" "}
                <span className="font-medium text-gray-800 dark:text-white">
                  Dashboard tab's associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
            </Tabs>
            <span className="flex items-center gap-6">
              <button className="flex items-center gap-1 p-2 px-8">
                <CgProfile />
                Candidate
              </button>
              <button className="flex items-center gap-1 bg-slate-600 p-2 px-8">
                <HiOutlineBuildingOffice2 />
                Employers
              </button>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              className="outline-none border-none"
              placeholder="Full Name"
            />
            <input type="text" placeholder="Username" />
          </div>
          <div className="flex flex-col gap-4">
            <input type="text" placeholder="email" />
            <input type="text" placeholder="Password" />
            <input type="text" placeholder="Confirm Password" />
            <span>
              <input type="checkbox" />
              <p>I've read and agree with your Terms of Services</p>
            </span>
          </div>
          <div>
            <button></button>
            <p></p>
            <span>
              <button></button>
              <button></button>
            </span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Createaccount;
