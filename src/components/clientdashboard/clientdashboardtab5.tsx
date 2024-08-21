import React, { useRef } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import Image from "next/image";
import Threedotmanue from "@/components/dropdowns/threedotmanue";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { GrUserExpert } from "react-icons/gr";
import Pagination from "@mui/material/Pagination";

interface Clientdashboardtab5Props {
  openTab: number;
  setOpenTab: React.Dispatch<React.SetStateAction<number>>;
}

const Clientdashboardtab5: React.FC<Clientdashboardtab5Props> = ({
  openTab,
  setOpenTab,
}) => {
  const [threedotmanue, setThreedotmanue] = React.useState(false);

  return (
    <div>
      <div className={openTab === 5 ? "block" : "hidden"} id="link2">
        <div className="grid gap-4 w-full p-4">
          <h1 className="gap-2 text-xl font-medium">Saved Cadidates</h1>
          <div className="w-full flex flex-col gap-6">
            <div className="border shadow hover:shadow-lg hover:bg-white p-8 h-fit grid gap-2">
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
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col gap-1 w-full">
                    <h1 className="flex items-center gap-2 text-xl font-medium text-[#18191C]">
                      Marketing Officer
                      <MdVerified />
                    </h1>

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

                  <div className="flex w-full justify-end items-center gap-4">
                    <FaRegBookmark className="text-xl" />
                    <p className="w-fit hover:bg-blue-700 hover:text-white p-2 px-4 rounded bg-slate-200 text-blue-600">
                      View Applications
                    </p>
                    <div>
                      <Threedotmanue
                        threedotmanue={threedotmanue}
                        setThreedotmanue={setThreedotmanue}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border shadow hover:shadow-lg hover:bg-white p-8 h-fit grid gap-2">
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
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col gap-1 w-full">
                    <h1 className="flex items-center gap-2 text-xl font-medium text-[#18191C]">
                      Marketing Officer
                      <MdVerified />
                    </h1>
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
                  <div className="flex w-full justify-end items-center gap-4">
                    <FaRegBookmark className="text-xl" />
                    <p className="w-fit hover:bg-blue-700 hover:text-white p-2 px-4 rounded bg-slate-200 text-blue-600">
                      View Applications
                    </p>
                    <div>
                      <Threedotmanue
                        threedotmanue={threedotmanue}
                        setThreedotmanue={setThreedotmanue}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border shadow hover:shadow-lg hover:bg-white p-8 h-fit grid gap-2">
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
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col gap-1 w-full">
                  <h1 className="flex items-center gap-2 text-xl font-medium text-[#18191C]">
                    Marketing Officer
                    <MdVerified />
                  </h1>

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
                <div className="flex w-full justify-end items-center gap-4">
                  <FaRegBookmark className="text-xl" />
                  <p className="w-fit hover:bg-blue-700 hover:text-white p-2 px-4 rounded bg-slate-200 text-blue-600">
                    View Applications
                  </p>
                  <div>
                    <Threedotmanue
                      threedotmanue={threedotmanue}
                      setThreedotmanue={setThreedotmanue}
                    />
                  </div>
                </div>
              </div>
            </div>
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
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col gap-1 w-full">
                    <h1 className="flex items-center gap-2 text-xl font-medium text-[#18191C]">
                      Marketing Officer
                      <MdVerified />
                    </h1>
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
                  <div className="flex w-full justify-end items-center gap-4">
                    <FaRegBookmark className="text-xl" />
                    <p className="w-fit hover:bg-blue-700 hover:text-white p-2 px-4 rounded bg-slate-200 text-blue-600">
                      View Applications
                    </p>
                    <div>
                      <Threedotmanue
                        threedotmanue={threedotmanue}
                        setThreedotmanue={setThreedotmanue}
                      />
                    </div>
                  </div>
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
  );
};

export default Clientdashboardtab5;
