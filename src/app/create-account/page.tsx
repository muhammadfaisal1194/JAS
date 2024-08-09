"use client";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";

const Createaccount = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div className="flex items-center justify-between ms-10">
      <div className="p-12">
        <Image
          src="/download-removebg-preview.png"
          alt=""
          className="w-32 h-16"
        />
        <div>
          <h1 className="text-2xl font-medium">Create account</h1>
          <p className="text-gray-500">
            Already have account{" "}
            <a href="" className="text-blue-600 cursor-pointer font-medium">
              Log In
            </a>
          </p>
          <div className="bg-gray-200 w-fit flex flex-col gap-2 rounded-md text-center">
            <p className="text-sm text-[#7c7c7c]">CREATE ACCOUNT AS A</p>
            <div className="w-full">
              <ul className="flex items-center gap-6 px-4">
                <button
                  className={
                    "flex items-center justify-center rounded-md gap-1 p-2 px-8 w-full " +
                    (openTab === 1 ? "text-white bg-[#042852]" : "")
                  }
                  onClick={(e) => {
                    setOpenTab(1);
                  }}
                >
                  <CgProfile />
                  Candidate
                </button>

                <button
                  className={
                    "flex items-center justify-center rounded-md gap-1 p-2 px-8 w-full " +
                    (openTab === 2 ? "text-white bg-[#042852]" : "")
                  }
                  onClick={(e) => {
                    setOpenTab(2);
                  }}
                >
                  <HiOutlineBuildingOffice2 />
                  Employers
                </button>
              </ul>
              <div className="relative flex flex-col bg-white w-full">
                <div className="py-5 flex-auto">
                  <div className="tab-content tab-space">
                    <div
                      className={openTab === 1 ? "block" : "hidden"}
                      id="link1"
                    >
                      <div>
                        <div className="grid gap-4">
                          <div className="flex items-center gap-4">
                            <input
                              type="text"
                              className="outline-none border rounded-md border-gray-400"
                              placeholder="Full Name"
                            />
                            <input
                              type="text"
                              placeholder="Username"
                              className="outline-none border rounded-md border-gray-400"
                            />
                          </div>
                          <div className="flex flex-col gap-5">
                            <input
                              type="email"
                              placeholder="example@gmail.com"
                              required
                            />
                            <input
                              type="Password"
                              placeholder="Password"
                              required
                            />
                            <input
                              type="Password"
                              placeholder="Confirm Password"
                              required
                            />
                            <span className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                className="rounded-sm"
                                required
                              />
                              <p>
                                I've read and agree with your{" "}
                                <span className="text-blue-600">
                                  Terms of Services
                                </span>
                              </p>
                            </span>
                          </div>
                        </div>
                        <div className="grid gap-4 mt-6">
                          <button
                            type="submit"
                            className="text-white w-full text-center justify-center flex items-center gap-3 p-3 px-6 rounded text-sm bg-[#0a65cc]"
                          >
                            Create Account <FaArrowRight />
                          </button>
                          <p>OR</p>
                          <span className="flex items-center gap-4">
                            <button className="flex items-center border gap-2 p-2 px-6 rounded text-sm bg-white">
                              <FaFacebookF className="text-[#0a65cc] text-lg" />
                              Sign up with Facebook
                            </button>
                            <button className="flex items-center border gap-2 p-2 px-6 rounded text-sm bg-white">
                              <FcGoogle className="text-lg" /> Sign up with
                              Google
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className={openTab === 2 ? "block" : "hidden"}
                      id="link2"
                    >
                      <div>
                        <div className="grid gap-4">
                          <div className="flex items-center gap-4">
                            <input
                              type="text"
                              className="outline-none border rounded-md border-gray-400"
                              placeholder="Full Name"
                            />
                            <input
                              type="text"
                              placeholder="Username"
                              className="outline-none border rounded-md border-gray-400"
                            />
                          </div>
                          <div className="flex flex-col gap-5">
                            <input
                              type="email"
                              placeholder="example@gmail.com"
                              required
                            />
                            <input
                              type="Password"
                              placeholder="Password"
                              required
                            />
                            <input
                              type="Password"
                              placeholder="Confirm Password"
                              required
                            />
                            <span className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                className="rounded-sm"
                                required
                              />
                              <p>
                                I've read and agree with your{" "}
                                <span className="text-blue-600">
                                  Terms of Services
                                </span>
                              </p>
                            </span>
                          </div>
                        </div>
                        <div className="grid gap-4 mt-6">
                          <button
                            type="submit"
                            className="text-white w-full text-center justify-center flex items-center gap-3 p-3 px-6 rounded text-sm bg-[#0a65cc]"
                          >
                            Create Account <FaArrowRight />
                          </button>
                          <p>OR</p>
                          <span className="flex items-center gap-4">
                            <button className="flex items-center border gap-2 p-2 px-6 rounded text-sm bg-white">
                              <FaFacebookF className="text-[#0a65cc] text-lg" />
                              Sign up with Facebook
                            </button>
                            <button className="flex items-center border gap-2 p-2 px-6 rounded text-sm bg-white">
                              <FcGoogle className="text-lg" /> Sign up with
                              Google
                            </button>
                          </span>
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
      <div>
        <Image
          src="https://www.simplilearn.com/ice9/free_resources_article_thumb/13_Famous_Business_Leaders_You_Must_Follow_in_2022.jpg"
          alt=""
          className="h-screen"
        />
      </div>
    </div>
  );
};

export default Createaccount;
