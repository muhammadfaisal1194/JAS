import React from "react";
import { FaArrowRight, FaRegAddressCard } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { MdOutlineBusinessCenter, MdOutlineCheckCircle } from "react-icons/md";
import Threedotmanue from "@/components/dropdowns/threedotmanue";

interface Clientdashboardtab1Props {
  openTab: number;
  setOpenTab: React.Dispatch<React.SetStateAction<number>>;
}

const Clientdashboardtab1: React.FC<Clientdashboardtab1Props> = ({
  openTab,
  setOpenTab,
}) => {
  const [threedotmanue, setThreedotmanue] = React.useState(false);
  return (
    <div>
      <div className={openTab === 1 ? "block" : "hidden"} id="link1">
        <div className="grid gap-4 p-4">
          <div className="grid gap-2">
            <h1 className="text-xl font-medium">Hello👋, JAS</h1>
            <p className="text-gray-400 text-sm">
              Here is your daily activities and applications
            </p>
          </div>
          <div className="flex items-center gap-10">
            <div className="bg-[#e7f0fa] flex items-center gap-32 p-5 rounded-md">
              <div>
                <h1 className="text-xl font-semibold">734</h1>
                <p className="text-sm">Open jobs</p>
              </div>
              <div className="grid gap-3 items-center text-center justify-center justify-items-center">
                <span className="bg-white w-fit rounded-md p-4 grid justify-center items-center">
                  <MdOutlineBusinessCenter className="text-2xl text-[#5279a6]" />
                </span>
              </div>
            </div>
            <div className="bg-[#fff6e6] flex items-center gap-32 p-5 rounded-md">
              <div>
                <h1 className="text-xl font-semibold">7340</h1>
                <p className="text-sm"> Saved Candidates</p>
              </div>
              <div className="grid gap-3 items-center text-center justify-center justify-items-center">
                <span className="bg-white w-fit rounded-md p-4 grid justify-center items-center">
                  <FaRegAddressCard className="text-2xl text-[#8a6e3d]" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-medium">Recently Posted Jobs</h1>
            <p className="flex items-center gap-2 p-1 px-3 text-gray-500">
              View All <FaArrowRight className="text-gray-500" />
            </p>
          </div>
          <table className="table-auto">
            <thead className="bg-[#f1f2f4]">
              <tr>
                <th className="text-start ps-2 py-2">Job</th>
                <th className="text-start py-2">Status</th>
                <th className="text-start py-2">APPLICATIONS </th>
                <th className="text-start py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t hover:border hover:border-blue-700 hover:shadow-md hover:bg-gray-50">
                <td>
                  <div className="p-4 h-fit">
                    <div className="grid gap-2">
                      <h1 className="flex items-center gap-4 text-xl font-medium text-[#18191C] hover:text-blue-600 cursor-pointer">
                        UI/UX Designer
                      </h1>
                      <div className="flex items-center gap-6">
                        <p className="text-sm text-[#767F8C]">Part-time</p>
                        <p className="text-sm text-[#767F8C]">7 days ago</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-[#1a9234]">
                  <div className="flex items-center gap-2">
                    <MdOutlineCheckCircle className="text-[#1a9234] text-xl" />
                    Active
                  </div>
                </td>
                <td className="text-gray-500">
                  <div className="flex items-center gap-1">
                    <HiOutlineUserGroup className="text-xl" />
                    85 Applications
                  </div>
                </td>
                <td>
                  <div className="flex items-center w-full gap-6">
                    <p className="w-fit hover:bg-blue-700 hover:text-white justify-center gap-2 p-2 px-4 rounded bg-slate-200 text-blue-600">
                      View Applications
                    </p>
                    <div>
                      <Threedotmanue
                        threedotmanue={threedotmanue}
                        setThreedotmanue={setThreedotmanue}
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-t hover:border hover:border-blue-700 hover:shadow-md hover:bg-gray-50">
                <td>
                  <div className="p-4 h-fit">
                    <div className="grid gap-2">
                      <h1 className="flex items-center gap-4 text-xl font-medium text-[#18191C] hover:text-blue-600 cursor-pointer">
                        UI/UX Designer
                      </h1>
                      <div className="flex items-center gap-6">
                        <p className="text-sm text-[#767F8C]">Part-time</p>
                        <p className="text-sm text-[#767F8C]">7 days ago</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-[#1a9234]">
                  <div className="flex items-center gap-2">
                    <MdOutlineCheckCircle className="text-[#1a9234] text-xl" />
                    Active
                  </div>
                </td>
                <td className="text-gray-500">
                  <div className="flex items-center gap-1">
                    <HiOutlineUserGroup className="text-xl" />
                    85 Applications
                  </div>
                </td>
                <td>
                  <div className="flex items-center w-full gap-6">
                    <p className="flex w-fit items-center hover:bg-blue-700 hover:text-white justify-center gap-2 p-2 px-4 rounded bg-slate-200 text-blue-600">
                      View Applications
                    </p>
                    <div>
                      <Threedotmanue
                        threedotmanue={threedotmanue}
                        setThreedotmanue={setThreedotmanue}
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-t hover:border hover:border-blue-700 hover:shadow-md hover:bg-gray-50">
                <td>
                  <div className="p-4 h-fit">
                    <div className="grid gap-2">
                      <h1 className="flex items-center gap-4 text-xl font-medium text-[#18191C] hover:text-blue-600 cursor-pointer">
                        UI/UX Designer
                      </h1>
                      <div className="flex items-center gap-6">
                        <p className="text-sm text-[#767F8C]">Part-time</p>
                        <p className="text-sm text-[#767F8C]">7 days ago</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-[#1a9234]">
                  <div className="flex items-center gap-2">
                    <MdOutlineCheckCircle className="text-[#1a9234] text-xl" />
                    Active
                  </div>
                </td>
                <td className="text-gray-500">
                  <div className="flex items-center gap-1">
                    <HiOutlineUserGroup className="text-xl" />
                    85 Applications
                  </div>
                </td>
                <td>
                  <div className="flex items-center w-full gap-6">
                    <p className="flex w-fit items-center hover:bg-blue-700 hover:text-white justify-center gap-2 p-2 px-4 rounded bg-slate-200 text-blue-600">
                      View Applications
                    </p>
                    <div>
                      <Threedotmanue
                        threedotmanue={threedotmanue}
                        setThreedotmanue={setThreedotmanue}
                      />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Clientdashboardtab1;
