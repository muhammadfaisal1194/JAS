import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Popularservice = () => {
  return (
    <div className="flex flex-col gap-14">
      {/* service */}
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-medium">Most Popular Services</h1>
          <button className="flex items-center gap-2 border border-blue-200 p-1 px-3 text-[#0A65CC]">
            View All <FaArrowRight className="text-[#0A65CC]" />
          </button>
        </div>
        <div className="flex justify-between">
          <div className="p-4 text-center hover:bg-white shadow-sm border hover:shadow-lg w-fit">
            <img
              src="/pngtree-electric-service-cartoon-vector-equipment-and-electrician-engineer-tools-picture-image_7941933.png"
              alt=""
              className="w-40 h-40 hover:w-44 hover:h-44"
            />
            <p className="text-[#000000ba] font-medium">Electrician</p>
          </div>
          <div className="p-4 hover:bg-white shadow-sm border text-center hover:shadow-lg w-fit">
            <img
              src="/cropped-MrPlumber-Logo-removebg-preview.png"
              alt=""
              className="w-40 h-40 hover:w-44 hover:h-44"
            />
            <p className="text-[#000000ba] font-medium">Plumber</p>
          </div>
          <div className="p-4 hover:bg-white shadow-sm border text-center hover:shadow-lg w-fit">
            <img
              src="/olgas_01-removebg-preview.png"
              alt=""
              className="w-40 h-40 hover:w-44 hover:h-44"
            />
            <p className="text-[#000000ba] font-medium">Home Clean</p>
          </div>
          <div className="p-4 hover:bg-white shadow-sm border text-center hover:shadow-lg w-fit">
            <img
              src="/18532409-carpentry-construction-collage-tools-underneath-wooden-planks-removebg-preview.png"
              alt=""
              className="w-40 h-40 hover:w-44 hover:h-44"
            />
            <p className="text-[#000000ba] font-medium">Carpenters</p>
          </div>
          <div className="p-4 hover:bg-white shadow-sm border text-center hover:shadow-lg w-fit">
            <img
              src="/Appliances-Repair-Service_2_11zon-removebg-preview.png"
              alt=""
              className="w-40 h-40 hover:w-44 hover:h-44"
            />
            <p className="text-[#000000ba] font-medium">Home appliances</p>
          </div>
        </div>
      </div>
      <hr />
      {/* jobs */}
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-medium">Most Recent Jobs</h1>
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
              <img
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
              <img
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
              <img
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
              <img
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
              <img
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
              <img
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
    </div>
  );
};

export default Popularservice;
