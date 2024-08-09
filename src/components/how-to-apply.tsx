import Image from "next/image";
import React from "react";

const Howtoapply = () => {
  return (
    <div className="grid justify-items-center gap-12 bg-[#F1F2F4] py-6 mt-20">
      <h1 className="text-4xl text-[#18191C] font-medium">How JAS work</h1>
      <div className="relative flex justify-between items-center gap-4">
        <div className="grid w-fit py-6 gap-4 justify-items-center text-center">
          <Image src="/Icon.svg" alt="" />
          <div className="grid gap-2">
            <h1 className="text-lg font-medium">Create account</h1>
            <p className="text-sm text-[#767F8C] w-72">
              Aliquam facilisis egestas sapien, nec tempor leo tristique at.
            </p>
          </div>
        </div>
        <Image src="/Arrows.svg" alt="" className="absolute top-0 ml-[190px]" />
        <div className="bg-white rounded-lg py-6 grid gap-4 w-fit justify-items-center text-center">
          <Image src="/Icon1.svg" alt="" />
          <div className="grid gap-2">
            <h1 className="text-lg font-medium">Upload CV/Resume</h1>
            <p className="text-sm text-[#767F8C] w-72">
              Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales
            </p>
          </div>
        </div>
        <Image
          src="/Arrows (1).svg"
          alt=""
          className="absolute ml-[490px] top-[60px]"
        />
        <div className="grid w-fit py-6 gap-4 justify-items-center text-center">
          <Image src="/Icon2.svg" alt="" />
          <div className="grid gap-2">
            <h1 className="text-lg font-medium">Find suitable job</h1>
            <p className="text-sm text-[#767F8C] w-72">
              Phasellus quis eleifend ex. Morbi nec fringilla nibh.
            </p>
          </div>
        </div>
        <Image
          src="/Arrows2.svg"
          alt=""
          className="absolute top-0 right-[180px]"
        />
        <div className="grid w-fit py-6 gap-4 justify-items-center text-center">
          <Image src="/Icon 3.svg" alt="" />
          <div className="grid gap-2">
            <h1 className="text-lg font-medium">Apply job</h1>
            <p className="text-sm text-[#767F8C] w-72">
              Curabitur sit amet maximus ligula. Nam a nulla ante, Nam sodales
              purus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howtoapply;
