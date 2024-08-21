import React, { useEffect, useRef } from "react";
import Cities from "@/data/cities.json";
import { FaLocationDot } from "react-icons/fa6";
import { MdGpsFixed } from "react-icons/md";

interface CitiesProps {
  cities: boolean;
  setCities: React.Dispatch<React.SetStateAction<boolean>>;
}
const Citydropdown: React.FC<CitiesProps> = ({ cities, setCities }) => {
  const catMenu = useRef<HTMLDivElement | null>(null);

  const closecities = (e: MouseEvent) => {
    if (
      cities &&
      catMenu.current &&
      !catMenu.current.contains(e.target as Node)
    ) {
      setCities(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", closecities);
    return () => {
      document.removeEventListener("mousedown", closecities);
    };
  }, [cities]);
  const toggleDropdown = () => {
    setCities(!cities);
  };
  return (
    <div>
      <div ref={catMenu} className="relative">
        <div className="flex items-center px-4 gap-3 border border-[#E5E7EB]">
          <FaLocationDot className="text-lg" />
          <button
            className="gap-4 p-3 w-full bg-white border-none font-medium rounded-lg text-sm inline-flex items-center"
            onClick={toggleDropdown}
          >
            Location
          </button>
          <span className="relative">
            <MdGpsFixed className="absolute animate-ping text-lg text-blue-400 hover:text-blue-700" />
            <MdGpsFixed className=" relative text-lg text-blue-500 hover:text-blue-700" />
          </span>
        </div>

        {cities && (
          <div className="absolute z-10 mt-2 h-80 overflow-auto w-full rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul className="relative p-2 w-full text-sm grid gap-1">
              {Cities.map((city) => (
                <li className="p-2 hover:bg-gray-100" key={city.name}>
                  {city.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Citydropdown;
