"use client";
import React from "react";
import Image from "next/image";
import LinearProgress from "@mui/material/LinearProgress";
import { BiCheckDouble } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";

const Finishprofile = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 9000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="h-screen ">
      <div className="flex items-center justify-between py-4">
        <Image
          src="/download-removebg-preview.png"
          alt=""
          width={128}
          height={64}
          className="w-32 h-16"
        />
        <div>
          <LinearProgress
            variant="determinate"
            value={progress}
            className="w-80"
          />
        </div>
      </div>
      <div className="grid gap-4 justify-center items-center text-center pt-24">
        <div className="flex justify-center">
          <span className="rounded-full p-8 bg-blue-100 w-fit">
            <BiCheckDouble className="text-4xl text-blue-700" />
          </span>
        </div>
        <h1 className="text-xl font-medium">
          🎉Congratulations, You profile is 100% complete!
        </h1>
        <p className="text-sm text-gray-400 w-[400px]">
          Donec hendrerit, ante mattis pallentesaue eleifend, tortor urna
          malesuada ante, oget aqua nua augue hendrert igula, Nunc mauris arcy,
          matis sed som vita.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button className="text-blue-700 bg-[#e7f0fa] hover:bg-[#c9d8ea] p-2 px-4 rounded">
            View Dashboard
          </button>
          <button className="flex items-center gap-3 text-white bg-blue-700 hover:bg-blue-800 p-2 px-6 rounded">
            Post Job <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Finishprofile;
