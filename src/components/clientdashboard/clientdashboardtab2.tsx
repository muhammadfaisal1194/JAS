import React from "react";
import { IoSearch } from "react-icons/io5";
import { GiSettingsKnobs } from "react-icons/gi";
import Citydropdown from "@/components/dropdowns/citydropdown";
import Image from "next/image";
import Link from "next/link";
import { MdVerified } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GrUserExpert } from "react-icons/gr";
import Pagination from "@mui/material/Pagination";

interface Clientdashboardtab2Props {
  openTab: number;
  setOpenTab: React.Dispatch<React.SetStateAction<number>>;
}

const Clientdashboardtab2: React.FC<Clientdashboardtab2Props> = ({
  openTab,
  setOpenTab,
}) => {
  const [cities, setCities] = React.useState(false);
  return (
    <div>
      <div className={openTab === 2 ? "block" : "hidden"} id="link2">
        <div className="grid gap-4 w-full p-4">
          <h1 className="gap-2 text-xl font-medium">Find Employers</h1>
          <div className="flex items-center rounded-xl p-2 gap-3 shadow-md">
            {/* search */}
            <div className="flex border w-full bg-white gap-2 rounded-xl items-center px-2 p-1">
              <IoSearch />
              <input
                type="text"
                className="p-2 w-full border-none"
                placeholder="search"
              />
            </div>
            {/* city */}

            <div className="w-[500px]">
              <Citydropdown cities={cities} setCities={setCities} />
            </div>
            {/* Filters */}
            <div className="flex gap-4">
              <button className="flex items-center p-2 px-4 gap-2 bg-[#f6f6f6] w-28 rounded-md font-semibold hover:bg-white border hover:border-blue-600">
                <GiSettingsKnobs className="font-semibold" />
                Filters
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 w-36 p-2 px-4 rounded-md text-white font-semibold">
                Find Service
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col gap-6">
            <div className="border shadow hover:shadow-lg hover:bg-white p-8 h-fit grid gap-2">
              <Link href="/profile">
                <div className="flex items-center gap-4">
                  <div className="w-16 border h-[58px] overflow-hidden rounded-full">
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhDxnfZflJaHkVOTqmNIm4w1IQv6nkg8svSQ&s"
                      alt=""
                      width={80}
                      height={80}
                      className="h-full w-full rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex justify-between items-center">
                      <h1 className="flex items-center gap-2 text-xl font-medium text-[#18191C]">
                        Marketing Officer
                        <MdVerified />
                      </h1>
                      <FaRegBookmark className="text-xl" />
                    </div>
                    <p className="text-sm text-[#767F8C]">Cody Fisher</p>
                    <span className="flex items-center gap-4">
                      <p className="flex items-center gap-1 text-sm text-[#767F8C]">
                        <FaLocationDot className="text-blue-600" />
                        Bahawalpur
                      </p>
                      <p className="flex items-center gap-1 text-sm text-[#767F8C]">
                        <GrUserExpert className="text-blue-600" /> 3 year
                      </p>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="border shadow hover:shadow-lg hover:bg-white p-8 h-fit grid gap-2">
              <Link href="/profile">
                <div className="flex items-center gap-4">
                  <div className="w-16 border h-[58px] overflow-hidden rounded-full">
                    <Image
                      src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                      alt=""
                      width={64}
                      height={64}
                      className="h-full w-full rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex justify-between items-center">
                      <h1 className="flex items-center gap-2 text-xl font-medium text-[#18191C]">
                        Marketing Officer
                        <MdVerified />
                      </h1>
                      <FaRegBookmark className="text-xl" />
                    </div>
                    <p className="text-sm text-[#767F8C]">Cody Fisher</p>
                    <span className="flex items-center gap-4">
                      <p className="flex items-center gap-1 text-sm text-[#767F8C]">
                        <FaLocationDot className="text-blue-600" />
                        Bahawalpur
                      </p>
                      <p className="flex items-center gap-1 text-sm text-[#767F8C]">
                        <GrUserExpert className="text-blue-600" /> 3 year
                      </p>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="border shadow hover:shadow-lg hover:bg-white p-8 h-fit grid gap-2">
              <Link href="/profile">
                <div className="flex items-center gap-4">
                  <div className="w-16 border h-[58px] overflow-hidden rounded-full">
                    <Image
                      src="https://media.istockphoto.com/id/492529287/photo/portrait-of-happy-laughing-man.jpg?s=612x612&w=0&k=20&c=0xQcd69Bf-mWoJYgjxBSPg7FHS57nOfYpZaZlYDVKRE="
                      alt=""
                      width={64}
                      height={64}
                      className="h-full w-full rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex justify-between items-center">
                      <h1 className="flex items-center gap-2 text-xl font-medium text-[#18191C]">
                        Marketing Officer
                        <MdVerified />
                      </h1>
                      <FaRegBookmark className="text-xl" />
                    </div>
                    <p className="text-sm text-[#767F8C]">Cody Fisher</p>
                    <span className="flex items-center gap-4">
                      <p className="flex items-center gap-1 text-sm text-[#767F8C]">
                        <FaLocationDot className="text-blue-600" />
                        Bahawalpur
                      </p>
                      <p className="flex items-center gap-1 text-sm text-[#767F8C]">
                        <GrUserExpert className="text-blue-600" /> 3 year
                      </p>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="border shadow hover:shadow-lg hover:bg-white p-8 h-fit grid gap-2">
              <Link href="/profile">
                <div className="flex items-center gap-4">
                  <div className="w-16 border h-[58px] overflow-hidden rounded-full">
                    <Image
                      src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723939200&semt=ais_hybrid"
                      alt=""
                      width={64}
                      height={64}
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex justify-between items-center">
                      <h1 className="flex items-center gap-2 text-xl font-medium text-[#18191C]">
                        Marketing Officer
                        <MdVerified />
                      </h1>
                      <FaRegBookmark className="text-xl" />
                    </div>
                    <p className="text-sm text-[#767F8C]">Cody Fisher</p>
                    <span className="flex items-center gap-4">
                      <p className="flex items-center gap-1 text-sm text-[#767F8C]">
                        <FaLocationDot className="text-blue-600" />
                        Bahawalpur
                      </p>
                      <p className="flex items-center gap-1 text-sm text-[#767F8C]">
                        <GrUserExpert className="text-blue-600" /> 3 year
                      </p>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex justify-center py-6">
              <Pagination count={10} color="primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientdashboardtab2;
