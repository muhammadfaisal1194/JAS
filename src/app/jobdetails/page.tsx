import Navbar from "@/components/nav-bar";
import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { CiMap } from "react-icons/ci";
import { IoMdStopwatch } from "react-icons/io";
import { LuWallet2 } from "react-icons/lu";
import { SiOnlyoffice } from "react-icons/si";
import { RiShoppingBag4Line } from "react-icons/ri";
import { MdOutlineDateRange } from "react-icons/md";
import { RiLink } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Footer from "@/components/footer";
import Pagination from "@mui/material/Pagination";
import Image from "next/image";

const Page = () => {
  return (
    <div>
      <Navbar />

      <div className="flex justify-between px-10 p-4 bg-[#ececec]">
        <p className="text-lg font-medium cursor-pointer hover:text-blue-600">
          Job Details
        </p>
        <span className="flex gap-1">
          <p className="text-[#767F8C] text-sm cursor-pointer hover:text-blue-600">
            Home /
          </p>
          <p className="text-[#767F8C] text-sm cursor-pointer hover:text-blue-600">
            Graphics & Design /
          </p>
          <p className="text-sm cursor-pointer hover:text-blue-600">
            Job Details
          </p>
        </span>
      </div>
      <div className="px-10">
        <div>
          <div className="flex justify-between p-4">
            <div className="flex items-center gap-4">
              <Image
                src="https://st3.depositphotos.com/43745012/44906/i/450/depositphotos_449066958-stock-photo-financial-accounting-logo-financial-logo.jpg"
                alt=""
                width={96}
                height={96}
                className="w-24 h-24 rounded-full border"
              />
              <div className="grid gap-2">
                <h1 className="text-2xl font-medium text-[#18191C]">
                  Techical Support Specialist
                </h1>
                <span className="flex items-center gap-2">
                  <p className="text-sm text-[#767F8C]">Dhaka, Bangladesh</p>
                  <span className="text-sm rounded-md uppercase text-[#ffff] bg-[#0BA02C] p-1 px-2">
                    Part-time
                  </span>
                  <span className="text-sm rounded-xl text-red-600 bg-[#FFEDED] p-1 px-2">
                    Featured
                  </span>
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#E7F0FA] hover:bg-[#d4e8ff] p-3">
                <FaRegBookmark className="text-blue-600" />
              </div>
              <button className="flex items-center text-sm gap-2 bg-blue-600 hover:bg-blue-700 p-3 px-6 rounded-md text-white font-semibold">
                Apply Now
                <FaArrowRight className="text-sm" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="grid gap-2">
              <h1 className="font-medium text-xl">Job Description</h1>
              <span className="text-gray-600 grid gap-2">
                Velstar is a Shopify Plus agency, and we partner with brands to
                help them grow, we also do the same with our people! <br /> Here
                at Velstar, we don&apos;t just make websites, we create
                exceptional digital experiences that consumers love. Our team of
                designers, developers, strategists, and creators work together
                to push brands to the next level. From Platform Migration, User
                Experience & User Interface Design, to Digital Marketing, we
                have a proven track record in delivering outstanding eCommerce
                solutions and driving sales for our clients.
                <br />
                The role will involve translating project specifications into
                clean, test-driven, easily maintainable code. You will work with
                the Project and Development teams as well as with the Technical
                Director, adhering closely to project plans and delivering work
                that meets functional & non-functional requirements. You will
                have the opportunity to create new, innovative, secure and
                scalable features for our clients on the Shopify platform <br />
                <div className="grid gap-2">
                  <h1 className="font-medium text-xl">Requirements</h1>
                  <span>
                    <ul>
                      <li className="list-disc list-inside">
                        Great troubleshooting and analytical skills combined
                        with the desire to tackle challenges head-on
                      </li>
                      <li className="list-disc list-inside">
                        3+ years of experience in back-end development working
                        either with multiple smaller projects simultaneously or
                        large-scale applications
                      </li>
                      <li className="list-disc list-inside">
                        Experience with HTML, JavaScript, CSS, PHP, Symphony
                        and/or Laravel
                      </li>
                      <li className="list-disc list-inside">
                        Working regularly with APIs and Web Services (REST,
                        GrapthQL, SOAP, etc)
                      </li>
                    </ul>
                  </span>
                </div>
              </span>
            </div>
            <div className="w-[100rem] flex flex-col gap-6">
              <div className="flex items-center p-4 border-2 border-[#E7F0FA]">
                <div className="text-center">
                  <p className="text-[#18191C] text-base font-medium">
                    Salary (RS:)
                  </p>
                  <h1 className="text-[#0BA02C] text-lg font-medium">
                    100,000 - 120,000
                  </h1>
                  <p className="text-[#767F8C] text-sm">Monthly salary</p>
                </div>
                <hr className="h-16 border mx-6" />
                <div className="flex flex-col items-center">
                  <div>
                    <CiMap className="text-4xl text-blue-600" />
                  </div>
                  <h1 className="text-[#18191C] text-base font-medium">
                    Job Location
                  </h1>
                  <p className="text-[#767F8C] text-sm">Dhaka, Bangladesh</p>
                </div>
              </div>
              <div>
                <div className="p-4 border-2 border-[#E7F0FA] grid gap-4">
                  <h1 className="text-xl font-medium">Job Overview</h1>
                  <div className="flex items-center gap-12">
                    <div className="grid gap-3">
                      <span>
                        <MdOutlineDateRange className="text-blue-600 text-2xl" />
                        <p className="text-gray-500 text-sm">Job Posted:</p>
                        <p className="text-gray-900 text-sm">14 Jun, 2021</p>
                      </span>
                    </div>
                    <div className="grid gap-3">
                      <span>
                        <IoMdStopwatch className="text-blue-600 text-2xl" />
                        <p className="text-gray-500 text-sm">Job expire in:</p>
                        <p className="text-gray-900 text-sm">14 Aug, 2021</p>
                      </span>
                    </div>
                    <div className="grid gap-3">
                      <span>
                        <SiOnlyoffice className="text-blue-600 text-2xl" />
                        <p className="text-gray-500 text-sm">Job Level:</p>
                        <p className="text-gray-900 text-sm">Entry Level</p>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-12">
                    <div className="grid gap-3">
                      <span>
                        <LuWallet2 className="text-blue-600 text-2xl" />
                        <p className="text-gray-500 text-sm">Experience</p>
                        <p className="text-gray-900 text-sm">$50k-80k/month</p>
                      </span>
                    </div>
                    <div className="grid gap-3">
                      <span>
                        <RiShoppingBag4Line className="text-blue-600 text-2xl" />
                        <p className="text-gray-500 text-sm">Education</p>
                        <p className="text-gray-900 text-sm">Graduation</p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 border-t-0 p-2 py-4 border-2 border-[#E7F0FA]">
                  <h1 className="text-xl font-medium">Share this job:</h1>
                  <div className="flex gap-2">
                    <button className="flex rounded-md font-medium items-center gap-2 text-blue-600 bg-[#E7F0FA] p-2 px-4">
                      <RiLink className="text-xl" />
                      Copy Links
                    </button>
                    <div className="p-1 text-blue-600 rounded-md px-2 bg-[#E7F0FA] flex items-center justify-center">
                      <AiFillLinkedin className="text-2xl" />
                    </div>
                    <div className="p-1 text-blue-600 rounded-md px-2 bg-[#E7F0FA] flex items-center justify-center">
                      <FaFacebookSquare className="text-2xl" />
                    </div>
                    <div className="p-1 text-blue-600 rounded-md px-2 bg-[#E7F0FA] flex items-center justify-center">
                      <FaTwitter className="text-2xl" />
                    </div>
                    <div className="p-1 text-blue-600 rounded-md px-2 bg-[#E7F0FA] flex items-center justify-center">
                      <MdEmail className="text-2xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* jobs */}
          <div className="flex flex-col mt-40 gap-8">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-medium">Related Jobs</h1>
              <button className="flex items-center gap-2 border border-blue-200 p-1 px-3 text-[#0A65CC]">
                View All <FaArrowRight className="text-[#0A65CC]" />
              </button>
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
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-20 pb-6">
          <Pagination count={10} color="primary" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
