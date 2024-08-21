import React, { useEffect, useRef } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiPlusCircle } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";

interface ThreedotmanueProps {
  threedotmanue: boolean;
  setThreedotmanue: React.Dispatch<React.SetStateAction<boolean>>;
}

const Threedotmanue: React.FC<ThreedotmanueProps> = ({
  threedotmanue,
  setThreedotmanue,
}) => {
  const catThreedotmanue = useRef<HTMLDivElement | null>(null);

  const closethreedotmanue = (e: MouseEvent) => {
    if (
      threedotmanue &&
      catThreedotmanue.current &&
      !catThreedotmanue.current.contains(e.target as Node)
    ) {
      setThreedotmanue(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closethreedotmanue);

    return () => {
      document.removeEventListener("mousedown", closethreedotmanue);
    };
  }, [threedotmanue]);

  const toggleDropdown = () => {
    setThreedotmanue(!threedotmanue);
  };

  return (
    <div>
      <div ref={catThreedotmanue} className="relative">
        <BsThreeDotsVertical
          className="text-xl text-gray-500"
          onClick={toggleDropdown}
        />
        {threedotmanue && (
          <div className="absolute mt-2 w-52 right-0 z-10 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul className="relative p-2 w-full text-sm grid gap-1">
              <li className="flex items-center text-blue-600 hover:bg-blue-100 gap-1 p-2 ">
                <FiPlusCircle className="text-lg" /> Graduated
              </li>
              <li className="flex items-center text-blue-600 gap-1 p-2 hover:bg-blue-100">
                <IoEyeOutline className="text-lg" />
                intermediate
              </li>
              <li className="flex items-center text-blue-600 gap-2 p-2 hover:bg-blue-100">
                <RxCrossCircled className="text-lg" /> Middle Education
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Threedotmanue;
