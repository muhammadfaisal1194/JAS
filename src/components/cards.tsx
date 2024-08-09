import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Cards = () => {
  return (
    <div className="flex justify-around py-10">
      <div className="flex items-center p-1 bg-slate-200 hover:shadow-md hover:bg-white">
        <div className="flex flex-col gap-3 p-8">
          <h1 className="text-3xl font-medium">Service Provider</h1>
          <p className="text-sm font-normal text-[#636A80] w-[330px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus
            a dolor convallis efficitur.
          </p>
          <button className="flex items-center w-fit gap-2 border bg-white border-blue-200 p-1 px-3 text-[#0A65CC]">
            Register now <FaArrowRight className="text-[#0A65CC]" />
          </button>
        </div>
        <img
          src="/services-removebg-preview.png"
          alt=""
          className="w-40 h-32"
        />
      </div>
      <div className="flex items-center p-1 bg-slate-200 hover:shadow-md hover:bg-white">
        <div className="flex flex-col gap-3 p-8">
          <h1 className="text-3xl font-medium">Find a JOB</h1>
          <p className="text-sm font-normal text-[#636A80] w-[330px]">
            Cras in massa pellentesque, mollis ligula non, luctus dui. Morbi sed
            efficitur dolor. Pelque augue risus, aliqu.
          </p>
          <button className="flex items-center w-fit gap-2 border bg-white border-blue-200 p-1 px-3 text-[#0A65CC]">
            Register now <FaArrowRight className="text-[#0A65CC]" />
          </button>
        </div>
        <img
          src="/pointofsale_jobs-removebg-preview.png"
          alt=""
          className="w-40 h-36"
        />
      </div>
    </div>
  );
};

export default Cards;
