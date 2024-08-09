import Navbar from "@/components/nav-bar";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { CiMap } from "react-icons/ci";
import { IoMdStopwatch } from "react-icons/io";
import { RiShoppingBag4Line } from "react-icons/ri";
import { Rating, RatingStar } from "flowbite-react";
import {
  MdOutlineDateRange,
  MdOutlineVerified,
  MdVerified,
} from "react-icons/md";
import { RiLink } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebookSquare, FaRegBookmark } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Footer from "@/components/footer";
import Pagination from "@mui/material/Pagination";
import { GrUserExpert } from "react-icons/gr";
import Image from "next/image";

const Profile = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="flex justify-between px-10 py-4 bg-[#ececec]">
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
      </div>
      <div>
        <div className="relative flex flex-col items-center h-[440px] px-10 bg-white">
          <div className="w-full h-96 overflow-hidden">
            <Image
              src="https://cdn.shopify.com/s/files/1/0579/9945/8475/files/Japan_Electronics_PWD.jpg?v=1664967213"
              alt=""
              className="w-full"
            />
          </div>
          <div className="absolute flex rounded-lg p-6 bottom-0 shadow items-center w-[80%] gap-4 bg-white">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvLDl-14QkMRLK2OTkL_RLBXKPBzBg8eom9A&s"
              alt=""
              className="w-16 h-16 rounded-xl border"
            />
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col gap-1">
                <h1 className="flex items-center gap-2 text-xl font-medium text-[#18191C]">
                  Afzal Group Of Electronics
                </h1>
                <p className="flex items-center gap-1 text-sm text-[#767F8C]">
                  Circular Raod, Bahawalpur
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button className="bg-blue-600 hover:bg-blue-700 p-2 px-6 rounded-md text-white">
                  Call Now
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 p-2 px-6 rounded-md">
                  Massage
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-10 mt-10">
          <div className="flex items-start gap-8">
            <div className="grid gap-2">
              <h1 className="font-medium text-xl">Description</h1>
              <span className="text-gray-600 grid gap-2">
                Velstar is a Shopify Plus agency, and we partner with brands to
                help them grow, we also do the same with our people! <br /> Here
                at Velstar, we dont just make websites, we create exceptional
                digital experiences that consumers love. Our team of designers,
                developers, strategists, and creators work together to push
                brands to the next level. From Platform Migration, User
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
                  <h1 className="font-medium text-xl">Previous Work</h1>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 p-4 shadow">
                      <Image
                        src="https://img.freepik.com/premium-photo/male-electrician-works-electrical-network-repair-ai-generated_406939-9533.jpg"
                        alt=""
                        className="w-24 h-24 rounded-md"
                      />
                      <div className="grid gap-2">
                        <h1 className="text-xl">22-12-2017</h1>
                        <div>
                          <span>
                            <Rating>
                              <RatingStar />
                              <RatingStar />
                              <RatingStar />
                              <RatingStar />
                              <RatingStar />
                            </Rating>
                          </span>
                          “Ut ullamcorper hendrerit tempor. Aliquam in rutrum
                          dui. Maecenas ac placerat metus, in faucibus est.”
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 shadow">
                      <Image
                        src="https://img.freepik.com/premium-photo/male-electrician-works-electrical-network-repair-ai-generated_406939-9533.jpg"
                        alt=""
                        className="w-24 h-24 rounded-md"
                      />
                      <div className="grid gap-2">
                        <h1 className="text-xl">22-12-2017</h1>
                        <div>
                          <span>
                            <Rating>
                              <RatingStar />
                              <RatingStar />
                              <RatingStar />
                              <RatingStar />
                              <RatingStar />
                            </Rating>
                          </span>
                          “Ut ullamcorper hendrerit tempor. Aliquam in rutrum
                          dui. Maecenas ac placerat metus, in faucibus est.”
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 shadow">
                      <Image
                        src="https://img.freepik.com/premium-photo/male-electrician-works-electrical-network-repair-ai-generated_406939-9533.jpg"
                        alt=""
                        className="w-24 h-24 rounded-md"
                      />
                      <div className="grid gap-2">
                        <h1 className="text-xl">22-12-2017</h1>
                        <div>
                          <span>
                            <Rating>
                              <RatingStar />
                              <RatingStar />
                              <RatingStar />
                              <RatingStar />
                              <RatingStar />
                            </Rating>
                          </span>
                          “Ut ullamcorper hendrerit tempor. Aliquam in rutrum
                          dui. Maecenas ac placerat metus, in faucibus est.”
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </span>
            </div>
            <div className="w-[85rem] flex flex-col gap-6">
              <div className="flex items-center p-4 border-2 border-[#E7F0FA]">
                <div className="text-center">
                  <p className="text-[#18191C] text-sm font-medium">Name</p>
                  <h1 className="text-[#0BA02C] font-medium">Muhammad Ahmad</h1>
                </div>
                <hr className="h-16 border mx-6" />
                <div className="flex flex-col items-center">
                  <div>
                    <CiMap className="text-4xl text-blue-600" />
                  </div>
                  <h1 className="text-[#18191C] text-base font-medium">
                    Shop Location
                  </h1>
                  <p className="text-[#767F8C] text-sm">Dhaka, Bangladesh</p>
                </div>
              </div>
              <div>
                <div className="p-4 border-2 border-[#E7F0FA] grid gap-4">
                  <h1 className="text-xl font-medium">Profile Overview</h1>
                  <div className="flex items-center gap-12">
                    <div className="grid gap-3">
                      <span>
                        <MdOutlineDateRange className="text-blue-600 text-2xl" />
                        <p className="text-gray-500 text-sm">Member since</p>
                        <p className="text-gray-900 text-sm">14 Jun, 2021</p>
                      </span>
                    </div>
                    <div className="grid gap-3">
                      <span>
                        <IoMdStopwatch className="text-blue-600 text-2xl" />
                        <p className="text-gray-500 text-sm">experience</p>
                        <p className="text-gray-900 text-sm">20 years</p>
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
                  <h1 className="text-xl font-medium">Share this Profile:</h1>
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
          <div className="w-full flex flex-col gap-6 mt-40">
            <h1 className="text-3xl font-medium">Related Profiles</h1>
            <div className="flex items-center w-full gap-6">
              <div className="border w-full shadow hover:shadow-lg hover:bg-white p-8 h-fit grid gap-2">
                <div className="flex items-center gap-4">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGhWJtaM-Wd4n1pEorbqbvvldzG6m0W0KBsw&s"
                    alt=""
                    className="w-16 h-16 rounded-full border"
                  />
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex justify-between items-center">
                      <h1 className="flex items-center gap-2 text-xl font-medium text-[#18191C]">
                        Maqbool electronics Bahawalpur
                        <MdOutlineVerified />
                      </h1>
                      <FaRegBookmark className="text-xl" />
                    </div>
                    <p className="text-sm text-[#767F8C]">Maqbool Hassan</p>
                    <span className="flex items-center gap-4">
                      <p className="flex items-center gap-1 text-sm text-[#767F8C]">
                        <FaLocationDot className="text-blue-600" />
                        Circular Raod, Bahawalpur
                      </p>
                      <p className="flex items-center gap-1 text-sm text-[#767F8C]">
                        <GrUserExpert className="text-blue-600" /> 3 year
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="border w-full shadow hover:shadow-lg hover:bg-white p-8 h-fit grid gap-2">
                <div className="flex items-center gap-4">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0579/9945/8475/files/Japan_electronics_gulnoor_market_murree_road.jpg?v=1665212766"
                    alt=""
                    className="w-16 h-16 rounded-full border"
                  />
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex justify-between items-center">
                      <h1 className="flex items-center gap-2 text-xl font-medium text-[#18191C]">
                        Japan Electronics
                        <MdVerified />
                      </h1>
                      <FaRegBookmark className="text-xl" />
                    </div>
                    <p className="text-sm text-[#767F8C]">Maqbool Hassan</p>
                    <span className="flex items-center gap-4">
                      <p className="flex items-center gap-1 text-sm text-[#767F8C]">
                        <FaLocationDot className="text-blue-600" />
                        Circular Raod, Bahawalpur
                      </p>
                      <p className="flex items-center gap-1 text-sm text-[#767F8C]">
                        <GrUserExpert className="text-blue-600" /> 25 year
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center w-full gap-6">
              <div className="border w-full shadow hover:shadow-lg hover:bg-white p-8 h-fit grid gap-2">
                <div className="flex items-center gap-4">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvLDl-14QkMRLK2OTkL_RLBXKPBzBg8eom9A&s"
                    alt=""
                    className="w-16 h-16 rounded-full border"
                  />
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex justify-between items-center">
                      <h1 className="flex items-center gap-2 text-xl font-medium text-[#18191C]">
                        Afzal Group Of Electronics
                        <MdOutlineVerified />
                      </h1>
                      <FaRegBookmark className="text-xl" />
                    </div>
                    <p className="text-sm text-[#767F8C]">Afzal Hassan</p>
                    <span className="flex items-center gap-4">
                      <p className="flex items-center gap-1 text-sm text-[#767F8C]">
                        <FaLocationDot className="text-blue-600" />
                        Circular Raod, Bahawalpur
                      </p>
                      <p className="flex items-center gap-1 text-sm text-[#767F8C]">
                        <GrUserExpert className="text-blue-600" /> 8 year
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="border w-full shadow hover:shadow-lg hover:bg-white p-8 h-fit grid gap-2">
                <div className="flex items-center gap-4">
                  <Image
                    src="https://lh3.googleusercontent.com/p/AF1QipOq6rQK80nP7fKzips42NProa857bA0ChelPaYx=s1600-w228"
                    alt=""
                    className="w-16 h-16 rounded-full border"
                  />
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex justify-between items-center">
                      <h1 className="flex items-center gap-2 text-xl font-medium text-[#18191C]">
                        Tariq Electronic bahawalpur
                        <MdVerified />
                      </h1>
                      <FaRegBookmark className="text-xl" />
                    </div>
                    <p className="text-sm text-[#767F8C]">Tariq Hassan</p>
                    <span className="flex items-center gap-4">
                      <p className="flex items-center gap-1 text-sm text-[#767F8C]">
                        <FaLocationDot className="text-blue-600" />
                        Circular Raod, Bahawalpur
                      </p>
                      <p className="flex items-center gap-1 text-sm text-[#767F8C]">
                        <GrUserExpert className="text-blue-600" /> 20 year
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-20 pb-6">
            <Pagination count={10} color="primary" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
